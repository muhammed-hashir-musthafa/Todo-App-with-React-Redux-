import React, { useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/TodoSlice";
import { TodoList } from "./todoList";
 
export const Todos = () => {
  const [value, setValue] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const HandleAddTodo = () => {
      if (value !== "") {
          dispatch(addTodo({ title: value, id: Date.now() }));
          setValue("")
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      HandleAddTodo();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "250px",
          backgroundColor: "whitesmoke",
          padding: "25px",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <h1>Todo List</h1>
        <div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              onKeyDown={handleKeyDown}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              value={value}
              style={{
                borderRadius: "4px",
                padding: "4px",
                border: "2px lightgray solid",
              }}
            />
            <button
              onClick={HandleAddTodo}
              type="button"
              style={{
                marginLeft: "5px",
                padding: "4px",
                borderColor: "lightgray",
                borderRadius: "4px",
              }}
            >
              Add
            </button>
          </form>
        </div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};
