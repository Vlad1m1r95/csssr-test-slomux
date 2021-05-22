///Функция по созданию редьюсера.  Вторым параметром принимает объект или callBack функцию.
// callback функция в качестве параметра принимает объект со следующими полями:
//addCase -  функция  первым параметром принимает action созданный функцией actionCreator, вторым параметром функцию по изменению store
//создает ключ значение в объекте reducer. Ключем является action.type, значением — переданная функция.

export const createReducer = (initialState, builder = {}) => {
  let reducer = {};
  const defaultcase = (initialState) => initialState;

  reducer.addCase = (action, toDo) => (reducer[action.type] = toDo);
  if (typeof builder === "object") reducer = builder;
  reducer.addDefaultCase = (action, toDo = defaultcase) =>
    (reducer[action.type] = toDo);
  //После создания reducer полe конструктор больше не нужно
  delete reducer.addCase;
  reducer.initialState = initialState;
  return reducer;
};
