import React, { useCallback } from "react";
import { useDispatch, useSelector, compareEqual } from "../../lib/slomux";
import { changestepSize } from "../../actions/step";

export const Step = () => {
  const stepSize = useSelector((state) => state.stepSize, compareEqual, "Step");
  const dispatch = useDispatch();

  console.count("render component Step");

  const handleChangeStepSize = useCallback(
    ({ target }) => {
      console.log(target.value);
      dispatch(changestepSize(Number(target.value)));
    },
    [dispatch]
  );
  return (
    <div>
      <div>
        Значение счётчика должно увеличиваться или уменьшаться на заданную
        величину шага
      </div>
      <div>Текущая величина шага: {stepSize}</div>

      <input
        type="range"
        min="1"
        max="5"
        value={stepSize}
        onChange={handleChangeStepSize}
      />
    </div>
  );
};
