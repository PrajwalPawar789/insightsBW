import "./counter.css";
import { React, useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function increseHandler() {
    setCount(count+1); //increment counter
  }

  function decreseHandler() {
    setCount(count-1); //decrement counter
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <h3 className="text-[#0398b4] text-2xl font-bold">
        Increment & decrement
      </h3>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151">
        <button
          onClick={decreseHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button
          onClick={increseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398b4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    </div>
  );
}

export default Counter;
