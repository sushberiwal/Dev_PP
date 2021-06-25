import React, { useState } from "react";

const UseState = () => {
  
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("blue");

  const incrementValue = () => {
    // console.log("increment count");
    // setCount((prevCount) => prevCount + 1);
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count + 1 };
    // });
    // setCount((prevCount) => prevCount + 1);
  };

  const decrementValue = () => {
    // console.log("decrement count");
    // setCount((prevCount) => prevCount - 1);
    // setColor("red");
  };

  return (
    <div>
      <p>{count}</p>
      <p>{color}</p>
      <button onClick={()=> setCount(count+1)  }>+</button>
      <button onClick={ () => setCount(count-1) }>-</button>
    </div>
  );
};

export default UseState;
