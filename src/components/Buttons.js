import React from "react";
import { useSelector } from "react-redux";

const Buttons = () => {
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <input type="text"></input>
    </div>
  );
};

export default Buttons;
