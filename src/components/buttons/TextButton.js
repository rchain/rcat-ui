import React, { Component } from 'react';

class TextButton extends Component {
  render() {
    return (
      <span>
        <input
          type="button"
          name={this.props.name}
          id={this.props.name}
          className="hidebbutton"
          onClick={this.props.onClick}
        />
        <label htmlFor={this.props.name} className={`${this.props.theme === 'dark' ? 'white' : 'black'} text-button underline dib pv2 pr4 br1 f4 pointer`}>{this.props.buttonText}</label>
      </span>
    );
  }
}

export default TextButton;
