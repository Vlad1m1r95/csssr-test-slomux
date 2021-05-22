import { useContext, useState, useLayoutEffect, useMemo } from "react";
import { SlomuxContext } from "../context/SlomuxContext";
import { usePrevious } from "./usePrevious";

export const useSelector = (
  selector,
  compareCallback = () => {},
  selectorId // для определения какой компонент вызвал селектор
) => {
  const ctx = useContext(SlomuxContext);
  const [state, setState] = useState(() => selector(ctx.getState()));
  const previousStore = usePrevious(ctx.getState());

  useLayoutEffect(() => {
    //надежнее поставить uuid или nanoID, здесь простой вариант без библиотек
    const subscribeId = () => {
      return Math.floor(Math.random() * Date.now());
    };

    ctx.subscribe(
      () => {
        const newStore = ctx.getState();
        const newState = selector(newStore);
        if (
          typeof compareCallback === "function" &&
          previousStore !== undefined
        ) {
          const isCompare = compareCallback(newStore, previousStore);
          if (!isCompare) setState(newState);
          if (isCompare) {
            if (newState !== state) setState(selector(newStore));
          }
        } else {
          setState(newState);
        }
      },
      subscribeId,
      selectorId
    );

    return () => ctx.unSubscribe(subscribeId);
  }, [compareCallback, ctx, previousStore, selector, selectorId, state]);

  return state;
};
