import React, { Component } from 'react';

// Fixed conversion rate assumption: 1 Euro = 90 Indian Rupees
const RUPEES_TO_EURO_RATE = 90;

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Handles the Click event of the Convert button
  handleSubmit(event) {
    event.preventDefault();
    const rupeeValue = parseFloat(this.state.rupees) || 0;
    const euroValue = (rupeeValue / RUPEES_TO_EURO_RATE).toFixed(2);
    this.setState({ euros: euroValue });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR to EUR)</h2>
        <input
          type="number"
          placeholder="Enter amount in Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euros !== null && (
          <p>
            {this.state.rupees} INR = {this.state.euros} EUR
          </p>
        )}
        <p><em>Note: Conversion rate used is 1 EUR = {RUPEES_TO_EURO_RATE} INR (fixed for this exercise).</em></p>
      </div>
    );
  }
}

export default CurrencyConvertor;
