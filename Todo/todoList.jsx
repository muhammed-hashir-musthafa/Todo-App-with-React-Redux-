import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, todoCompleted } from "../Redux/TodoSlice";

export const TodoList = ({ todos }) => {
  const [editId, setEditId] = useState();
  const [newVal, setnewVal] = useState("");

  const dispatch = useDispatch();

  const HandleDeleteTodo = (itemid) => {
    dispatch(deleteTodo(itemid));
  };

  const HandleEditButton = (item) => {
    setEditId(item.id);
    setnewVal(item.title);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      HandleEditTodo(e);
    }
  };

  const HandleEditTodo = (e) => {
    e.preventDefault();
    if (newVal !== "") {
      dispatch(editTodo({ id: editId, title: newVal }));
      setEditId(null);
      setnewVal("");
    }
  };

  const handleCheckboxChange = (item) => {
    dispatch(todoCompleted(item.id));
  };

  return (
    <div>
      {todos.todos.map((item) => (
        <div
          style={{
            marginTop: "5%",
            textAlign: "start",
            backgroundColor: "lightgrey",
            padding: "5px",
            paddingLeft: "15px",
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 3px",
          }}
          key={item.id}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              paddingTop: "5px",
            }}
          >
            {item.id === editId ? (
              <form action="" onSubmit={HandleEditTodo}>
                <input
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setnewVal(e.target.value)}
                  type="text"
                  value={newVal}
                  style={{
                    borderRadius: "4px",
                    padding: "4px",
                    border: "2px lightgray solid",
                    marginBottom: "2%",
                    width: "90%",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    fontSize: "16px",
                    borderColor: "lightgray",
                    borderRadius: "4px",
                    textAlign: "center",
                    marginRight: "5px",
                    marginLeft: "25%",
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  style={{
                    fontSize: "16px",
                    borderColor: "lightgray",
                    borderRadius: "4px",
                    textAlign: "center",
                    marginRight: "5px",
                  }}
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <div
                  style={{
                    flex: 1,
                    wordWrap: "break-word",
                    marginRight: "10px",
                    minWidth: "0",
                    color: "black",
                    fontWeight: "bold",
                    opacity: item.completed ? "25%" : "100%",
                  }}
                >
                  <input
                    type="checkbox"
                    name="checkbox"
                    style={{ width: "15px", height: "15px" }}
                    checked={item.completed || false}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  {item.title}
                </div>
                <div style={{ display: "flex", flexShrink: 0 }}>
                  <button
                    style={{
                      fontSize: "16px",
                      borderColor: "lightgray",
                      borderRadius: "4px",
                      textAlign: "center",
                      marginRight: "5px",
                    }}
                    onClick={() => HandleDeleteTodo(item.id)}
                  >
                    x
                  </button>
                  <button
                    style={{
                      borderColor: "lightgray",
                      borderRadius: "4px",
                    }}
                    onClick={() => HandleEditButton(item)}
                  >
                    ✎
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
