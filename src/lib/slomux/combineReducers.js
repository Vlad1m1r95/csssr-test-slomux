//reducers = {
//  counter : counterReduser,
//  logCounter: logCounterReducer,
//... etc
// }

const pasteStateToInitialStore = (key, value, prevStore) => ({
  ...prevStore,
  [key]: value,
});

export const combineReducers = (reducers) => {
  let rootReducer = reducers;
  let initialStore = {};

  const arrayReducers = Object.keys(reducers);
  //Соединяем все редьюсеры в один родительский редьюсер rootReducer
  for (
    let reducerIndex = 0;
    reducerIndex < arrayReducers.length;
    reducerIndex++
  ) {
    console.log(reducers[arrayReducers[reducerIndex]].default);
    rootReducer = {
      ...rootReducer,
      ...rootReducer[arrayReducers[reducerIndex]],
    };
    delete rootReducer[arrayReducers[reducerIndex]];
    initialStore = pasteStateToInitialStore(
      [arrayReducers[reducerIndex]],
      reducers[arrayReducers[reducerIndex]].initialState,
      initialStore
    );
  }
  delete rootReducer.initialState;
  rootReducer.initialStore = initialStore;
  return rootReducer;
};
