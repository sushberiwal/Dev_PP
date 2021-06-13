// class based stateful components
class Counter extends React.Component {
  // 1. constructor method is the first one to fire
  constructor(props) {
    super(props); // it fire React.Component's constructor
    this.state = {
      count: 0,
      name:props.namee
    }; // state is empty object
  }

  increment = () => {
    console.log("increment");
    this.setState({
      count: this.state.count + 1
    }); // lifecycle events => componentDidUpdate => render
  };

  decrement = () => {
    console.log("decrement");
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    console.log("reset");
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <React.Fragment>
        <p className="badge bg-secondary d-inline-block m-2">
          {" "}
          {this.state.count}
        </p>
        <div>
          <button className="btn btn-primary m-2" onClick={this.increment}>
            +
          </button>
          <button className="btn btn-danger m-2" onClick={this.decrement}>
            -
          </button>
          <button className="btn btn-warning m-2" onClick={this.reset}>
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Counter namee="steve"></Counter>,
  document.querySelector("#root")
);
