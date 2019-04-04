import React, { Component } from 'react';

class BasicInput extends Component {
	render() {
		return (
			<label>
				<span className={`${ this.props.labelText ? '' : 'visuallyhidden' } dib pa0 mb2 ${ this.props.disabled ? 'gray' : '' }`}>
					{this.props.labelText}
				</span>
				<input
					type={this.props.type}
					name={this.props.name}
					value={this.props.value}
					onChange={this.props.onChange}
					placeholder={this.props.placeholder}
					className={`${this.props.theme === "dark" ? 'basic-input-dark border-box  b--white bg-black' : 'basic-input-light border-box'}
						input-reset border-box w-100 h2 br1 ba ph2 mb3
						${this.props.disabled ? 'b--gray' : ''}
						${this.props.error ? 'b--red' : ''}
						`}
					disabled={this.props.disabled}
				/>
			</label>
		);
	}
}

export default BasicInput;
