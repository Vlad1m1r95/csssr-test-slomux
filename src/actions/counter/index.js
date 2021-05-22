import { createAction } from "../../lib/slomux/createAction";

export const incrementByAmount = (amount = 1) =>
  createAction("counter/incrementByAmount", amount);
export const decrimentByAmount = (amount = 1) =>
  createAction("counter/decrimentByAmount", amount);
