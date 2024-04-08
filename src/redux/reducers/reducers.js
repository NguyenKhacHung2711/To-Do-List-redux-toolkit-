import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
        return state.filter((todo, index) => index !== action.payload);
    },
    editTodo: (state, action) => {
        const { index, editedTask } = action.payload;
        state[index] = editedTask;
        localStorage.setItem('todos', JSON.stringify(state));
      }
  }
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;