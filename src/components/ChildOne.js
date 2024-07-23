import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterStore, { down, up } from "../slice/counterSlice";

function ChildOne() {
  const counter = useSelector((state) => {
    return state.counter.num; //<- store.js
  });

  const dispatch = useDispatch();
  return (
    <div>
      counter : {counter}
      <br />
      <button
        onClick={() => {
          dispatch(up(100));
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          dispatch(down(1));
        }}
      >
        down
      </button>
    </div>
  );
}

export default ChildOne;
