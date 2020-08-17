import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { intersects } from "semver";

const TodoDetail = (props) => {
  console.log(props);

  const dispatch = useDispatch();

  const currentItem = useSelector((state) =>
    state.todo.find((x) => x.id === parseInt(props.match.params.id))
  );
  // console.log("TodoItem", currentItem);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "UPDATETODOITEM",
        targetId: parseInt(props.match.params.id),
        targetValue: "This is a new title for item " + props.match.params.id,
      });
    }, 3000);
  }, [props.match.params.id]);

  console.log("------------------------------------------");

  return (
    <div>
      <h1>This is TodoDetail Page</h1>
      <h1>Current Id: {props.match.params.id}</h1>
      <h1>Title: {currentItem.title}</h1>
    </div>
  );
};

export default TodoDetail;
