import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fulllogo from '../../../assets/img/rchain-fulllogo.svg';
import BasicInput from '../../../components/form-inputs/BasicInput';
import Button from '../../../components/buttons/Button';
import ErrorModal from '../../../components/notifications/ErrorModal';
import { startLoader, stopLoader } from '../../../redux/actions/loaderActions';
import { submitMobileVerification } from '../../../redux/actions/authActions';
import { validatePhoneForm } from '../../../validators/accountCreateValidators';
import { logout } from '../../../helpers/logout';

class AccountPhone extends Component {
	constructor(props) {
        super(props);
        this.state = {
			phone: '',
			errors: {},
			errorModal: false,
			errorModalMessage: ''
		}
	}

	closeErrorModal = () => {
        this.setState({
            errorModal: false,
        })
	}

	keyPressed = (event) => {
		if (event.key === "Enter") {
			this.submitForm()
		}
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	onCancel = () => {
		logout(this.props.history);
	}

	submitForm = () => {
		const validForm = this.validateForm();
		if (validForm) {
			this.props.startLoader();
			submitMobileVerification(this.state)
			.then((response) => {
				const user = JSON.parse(localStorage.getItem('login'));
				user.verification.requireMobile = false;
				user.user.mobile = this.state.phone;
				localStorage.setItem('login', JSON.stringify({ ...user }));
				this.props.stopLoader();
				this.props.history.push('/login/signup-phone-verify');
			})
			.catch((error) => {
				console.log(error);
				this.props.stopLoader();
				let errorModalMessage = 'Error submiting your data';
				if (error.response && error.response.data && error.response.data.message) {
					errorModalMessage = error.response.data.message;
					if(error.response.data.moreInfo && error.response.data.moreInfo.trim().length > 0) {
						errorModalMessage += '\n' + 'More info: ' + error.response.data.moreInfo;
						if(error.response.data.code === 21211) {
							errorModalMessage += '\n' + 'For example local US number 202-555-0122 should be written as +1-202-555-0122' ;
						}
					}
				}
				this.setState({
					errorModal: true,
					errorModalMessage,
				})
			});
		}
	}

	validateForm = () => {
		let errors = {};
		errors = validatePhoneForm(this.state);
        this.setState({ errors })
		this.errorModal=true
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            console.log(errors);
            return false;
        }
        return true;
	}

	render() {
		return (
			<div className="w-100 vh-100 flex">
				<div className="w-50 bg-blue">
					<div className="w-100 pt2 pl2"><img src={fulllogo} alt="" /></div>
					<div className="ph5 pt5">
						<p className="f1 b white lh-title mb0">Verify your<br /> phone<br /> number</p>
            			<p className="f6 white lh-copy">Already have an RSong account?<br />
							<a onClick={this.onCancel} className="f6 white underline pointer">Log in with the correct google or facebook account.</a>
						</p>
					</div>
				</div>
				<div className="w-50 ph5 pt7 bg-black">
					<p className="f5 white lh-copy">Next, enter your phone number. You’ll recieve a text with a validation code. Standard SMS fees may apply.</p>
					<fieldset className="bn ph0 pt3 mb2">
						<BasicInput
							name="phone"
							value={this.state.phone}
							error={this.state.errors.phone}
							placeholder="Phone number *"
							theme="dark"
							onChange={this.handleChange}
							onKeyPress={this.keyPressed}
						/>
					</fieldset>
					<div className="pb4">
						<Button
							name="continue"
							buttonText="Continue"
							theme="dark"
							onClick={this.submitForm}
						/>
					</div>
				</div>
				{this.state.errorModal ?
                    <ErrorModal
                        closeErrorModal={this.closeErrorModal}
                        errorMessage={this.state.errorModalMessage}
                    />
                    : <></>
                }
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
		startLoader: () => dispatch(startLoader()),
		stopLoader: () => dispatch(stopLoader())
    }
}

const AccountPhoneRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountPhone);

export default withRouter(AccountPhoneRedux);
