import { createReducer } from "../lib/slomux/createReduser";
import { changestepSize } from "../actions/step";

const initialState = 2;

export const stepReducer = createReducer(initialState, {
  [changestepSize().type]: (state, action) => ({
    ...state,
    stepSize: (state.stepSize = action.payload),
  }),
});
