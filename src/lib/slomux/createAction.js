export const createAction = (type, payload = null) => {
  return {
    type,
    payload,
  };
};
