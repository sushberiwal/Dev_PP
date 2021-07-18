const initialState = {
  count: 5,
};

const myReducer = function (state = initialState, action) {
  console.log("Inside my reducer");
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default myReducer;
