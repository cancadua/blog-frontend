const setDataInLocalStorage = (key, item) => localStorage.setItem(key, item);

const getDataFromLocalStorage = (item) => localStorage.getItem(item);

const deleteDataFromLocalStorage = (key) => localStorage.removeItem(key);

export {
  setDataInLocalStorage,
  getDataFromLocalStorage,
  deleteDataFromLocalStorage
};
