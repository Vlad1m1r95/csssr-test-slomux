const stylesConsoleLog = "background: #222; color: #bada55; font-size: 18px;";

export const createStore = (reducer) => {
  let currentState = reducer.initialStore;

  let listeners = [];

  const dispatch = ({ type = "default", payload }) => {
    console.log(getState());
    console.log(`%c ✔ SlomuxAction: ${type}`, stylesConsoleLog);
    console.log(
      `%c ✔ Subscribers: ${JSON.stringify(listeners)}`,
      stylesConsoleLog
    );

    if (reducer[type] === undefined) return getState(); // если  словили не зарегистрированный action
    currentState = reducer[type](currentState, { type, payload });

    listeners.forEach(({ listener, id }) => {
      listener();
    });
  };
  const getState = () => currentState;

  const subscribe = (listener, id, name = "unknown") => {
    listeners.push({ listener, id, name });
    listeners.filter((listener) => listener);
  };

  const unSubscribe = (id) =>
    // Удаление слушателя
    (listeners = listeners.filter((listener) => listener.id !== id));

  const getAllSubscribers = () => listeners;

  return { getState, dispatch, subscribe, unSubscribe, getAllSubscribers };
};
