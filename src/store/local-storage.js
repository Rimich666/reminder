export const loadState = () => {
    try {
      const serialState = localStorage.getItem('reminderState');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      console.log(err);
      return undefined;
    }
};

export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('reminderState', JSON.stringify(getState()));
    return result;
  };
};
