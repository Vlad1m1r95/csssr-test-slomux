import { createReducer } from "../lib/slomux/createReduser";
import { incrementByAmount, decrimentByAmount } from "../actions/counter";

const initialState = 0;

export const counterReducer = createReducer(initialState, {
  [incrementByAmount().type]: (state, action) => ({
    ...state,
    counter: (state.counter += action.payload),
  }),
  [decrimentByAmount().type]: (state, action) => ({
    ...state,
    counter: (state.counter -= action.payload),
  }),
});
