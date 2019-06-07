export const setToStorage = (name: string, data: string) =>
    localStorage.setItem(name, data);
export const deleteFromStorage = (name: string) =>
    localStorage.removeItem(name);
export const getFromStorage = (name: string) => localStorage.getItem(name);
