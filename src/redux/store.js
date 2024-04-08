import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/reducers';

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("todos", serializedState);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("todos");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
};

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;