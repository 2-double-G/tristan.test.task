export const reducer = (state, callback) => {
  const action = callback(state);

  return { ...state, ...action };
};
