import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      //   console.log(action);
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const newTodo = state.todos.find((item) => item.id === id);
      if (newTodo) {
        newTodo.title = title;
      }
    },
    todoCompleted: (state, action) => {
      const newTodo = state.todos.find((todo) => action.payload === todo.id);
      if (newTodo) {
        newTodo.completed = !newTodo.completed;
      }
    },
  },
});

export default TodoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, todoCompleted } =
  TodoSlice.actions;
