import React, { Component } from 'react';

class PressButton extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.handlePress = this.handlePress.bind(this);
  }

  // Handles the click using React's SyntheticEvent object (event)
  handlePress(event) {
    // event here is a SyntheticEvent, React's cross-browser wrapper around the native event
    this.setState({ message: 'I was clicked' });
    console.log('SyntheticEvent type:', event.type);
  }

  render() {
    return (
      <div>
        <h2>Synthetic Event Example</h2>
        <button onClick={this.handlePress}>Press Me</button>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default PressButton;
