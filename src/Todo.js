import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "./utils/axios";
import classes from "./Todo.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Todo = (props) => {
  useEffect(() => {
    console.log("useEffect 1");

    return () => {
      console.log("useEffect 2");
    };
  });

  const dispatch = useDispatch();

  const todoList = [
    { id: 1, title: "todo1" },
    { id: 2, title: "todo2" },
    { id: 3, title: "todo3" },
  ];

  const action = {
    type: "SAVETODOLIST",
    data: todoList,
  };

  dispatch(action);

  const todoList2 = useSelector((state) => {
    console.log(state);
    return state.todo;
  });
  // console.log("todoList2", todoList2);

  // useEffect(() => {
  //   axios.get("todo/").then((res) => {
  //     //setTodoList(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect 3");
  // }, [mystate]);

  // const todoList2 = useSelector((state) => state.todo);
  // console.log("todoList2", todoList2);

  console.log("1. Rendering Component");
  return (
    <div>
      <h1 id={classes.abc}>This is Todo Page</h1>
      <ul className={classes.redText2}>
        {todoList.map((x) => (
          <Link key={x.id} to={"todo/" + x.id}>
            <li key={x.id} className={classes.redText}>
              {x.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

// useEffect(() => {
//   console.log("1");
//   axios.get("todo/").then((res) => {
//     //setTodoList(res.data);
//     console.log(res.data);
//   });
//   return () => {
//     console.log("2");
//   };
// }, []);
//import * as actions from "./store/actions/todo";
