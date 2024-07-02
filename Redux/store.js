import { configureStore } from "@reduxjs/toolkit";
import ReducerTodo from './TodoSlice'

export const store = configureStore({
  reducer: {
    todos:ReducerTodo
  },
});
