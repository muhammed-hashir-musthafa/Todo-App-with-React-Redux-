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
        const {id, title}=action.payload;
        const newTodo=state.todos.find(item=>item.id===id)
        if(newTodo){
          newTodo.title=title;
        }
    },
  },
});

export default TodoSlice.reducer;
export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;
