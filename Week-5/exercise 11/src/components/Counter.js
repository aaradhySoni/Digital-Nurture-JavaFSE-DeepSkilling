import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  // Method to say Hello followed by a static message
  sayHello() {
    this.setState({ message: 'Hello, this is a static message from the Counter component!' });
  }

  // Increment button invokes both incrementValue() and sayHello()
  handleIncrement() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.sayHello();
  }

  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default Counter;
