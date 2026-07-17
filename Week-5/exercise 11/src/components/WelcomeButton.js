import React, { Component } from 'react';

class WelcomeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  // Function that takes "welcome" as an argument
  sayWelcome(text) {
    this.setState({ message: `You said: ${text}` });
  }

  render() {
    return (
      <div>
        <h2>Say Welcome</h2>
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default WelcomeButton;
