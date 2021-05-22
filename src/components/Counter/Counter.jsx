import React, { useCallback } from "react";
import { incrementByAmount, decrimentByAmount } from "../../actions/counter";
import { useSelector, useDispatch, compareEqual } from "../../lib/slomux";

// ВНИМАНИЕ! Использование собственной реализации useSelector и dispatch обязательно

export const Counter = (props) => {
  const stepSize = useSelector(
    (state) => Number(state.stepSize),
    null,
    "Counter"
  );
  const counter = useSelector((state) => state.counter, null, "Counter");
  const dispatch = useDispatch();

  console.count("render component Counter");

  const incrientHandler = useCallback(
    () => dispatch(incrementByAmount(stepSize)),
    [dispatch, stepSize]
  );

  const decrimentHandler = useCallback(
    () => dispatch(decrimentByAmount(stepSize)),
    [dispatch, stepSize]
  );

  return (
    <div>
      <button onClick={decrimentHandler}> - </button>
      <span> {counter} </span>
      <button onClick={incrientHandler}> + </button>
    </div>
  );
};
