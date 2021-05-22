import { createAction } from "../../lib/slomux/createAction";
export const changestepSize = (step = 1) =>
  createAction("counter/stepSize", step);
