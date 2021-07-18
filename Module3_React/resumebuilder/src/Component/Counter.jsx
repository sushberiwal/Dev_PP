import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  console.log("inside counter comp");
  // const [count, setCount] = useState(5);
  return (
    <div>
      <h1>Counter</h1>
      <p> {props.count} </p>

      <button onClick={() => { props.increment(); }}>Increment</button>
      <button onClick={() => { props.decrement(); }}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (store) => {
  console.log("In map state to props", store);
  return { count: store.count };
};

const mapDispatchToProps = (dispatch) => {
  console.log("In map dispatch to props", dispatch);
  return {
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
};

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
