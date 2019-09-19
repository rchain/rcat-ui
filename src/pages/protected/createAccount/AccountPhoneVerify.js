import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import fulllogo from '../../../assets/img/rchain-fulllogo.svg';
import BasicInput from '../../../components/form-inputs/BasicInput';
import Button from '../../../components/buttons/Button';
import {startLoader, stopLoader} from '../../../redux/actions/loaderActions';
import {logout} from '../../../helpers/logout';
import {validateCodeForm} from '../../../validators/accountCreateValidators';
import {submitMobileVerificationCode, resendMobile} from '../../../redux/actions/authActions';
import ErrorModal from '../../../components/notifications/ErrorModal';
import NotificationSpan from "../../../components/notifications/NotificationSpan";
import TextButton from "../../../components/buttons/TextButton";


class AccountPhoneVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            errors: {},
            errorModal: false,
            errorModalMessage: '',
            notification: false
        };
    }

    closeErrorModal = () => {
        this.setState({
            errorModal: false,
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onCancel = () => {
        logout(this.props.history);
    }

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.submitForm()
        }
    }
    onResend = () => {
        this.setState({notification: true})
        this.props.startLoader();
        resendMobile()
            .then((response) => {
                console.log(response);
                this.props.stopLoader();
            })
            .catch((error) => {
                console.log(error);
                this.props.stopLoader();
                let errorModalMessage = 'Error submiting your data';
                if (error.response && error.response.data && error.response.data.message) {
                    errorModalMessage = error.response.data.message;
                }
                this.setState({
                    errorModal: true,
                    errorModalMessage,
                    notification: false
                })
            });
    }

    submitForm = () => {
        const validForm = this.validateForm();
        if (validForm) {
            this.props.startLoader();
            submitMobileVerificationCode(this.state.code)
                .then((response) => {
                    const user = JSON.parse(localStorage.getItem('login'));
                    user.verification.requireMobileVerification = false;
                    localStorage.setItem('login', JSON.stringify({...user}));
                    this.props.stopLoader();
                    if (user.verification.requireKyc) {
                        this.props.history.push('/kyc');
                    } else {
                        this.props.history.push('/');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.props.stopLoader();
                    let errorModalMessage = 'Error submiting your data';
                    if (error.response && error.response.data && error.response.data.message) {
                        errorModalMessage = error.response.data.message;
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
        errors = validateCodeForm(this.state);
        this.setState({errors})
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            console.log(errors);
            return false;
        }
        return true;
    }

    backToSignupPhone = () => {
        const reset = JSON.parse(localStorage.getItem('login'));
        reset.verification.requireMobile = true;
        localStorage.setItem('login', JSON.stringify({...reset}));
        this.props.history.push('/login/signup-phone');
    }

    render() {
        const mobile = JSON.parse(localStorage.getItem('login')).user.mobile;

        return (
            <div className="w-100 vh-100 flex">
                <div className="w-50 bg-blue">
                    <div className="w-100 pt2 pl2"><img src={fulllogo} alt=""/></div>
                    <div className="ph5 pt5">
                        <p className="f1 b white lh-title mb0">Verify your<br/> phone<br/> number</p>
                        <p className="f6 white lh-copy">Already have an RSong account?<br/>
                            <a onClick={this.onCancel} className="f6 white underline pointer">Log in with the correct
                                google or facebook account.</a>
                        </p>
                    </div>
                </div>
                <div className="w-50 ph5 pt7 bg-black">
					<span className="white ph0 pt0 f3 b ttc flex justify-between border-box lh-title">A text has been sent to:<br/>
                        {mobile}
					</span>
                    <p className="f5 white lh-copy">You will recieve a text message with a validation code. Enter it
                        below.</p>
                    <fieldset className="bn ph0 pt3 mb2">
                        <BasicInput
                            name="code"
                            value={this.state.code}
                            error={this.state.errors.code}
                            placeholder="Validation code *"
                            theme="dark"
                            onChange={this.handleChange}
                            maxLenght={6}
                            onKeyPress={this.keyPressed}
                        />
                        <NotificationSpan
                            notification={this.state.notification}
                            mark='text'
                        />
                    </fieldset>

                    <div className="pb4">
                        <TextButton
                            name="back"
                            buttonText="Back"
                            theme="dark"
                            onClick={this.backToSignupPhone}
                        />
                        <Button
                            name="continue"
                            buttonText="Continue"
                            theme="dark"
                            onClick={this.submitForm}
                        />
                    </div>

                    <p className="f6 white lh-copy">Didn’t receive a text?
                        <a onClick={this.onResend} className="f6 white underline pointer">
                            Click here to resend.</a></p>
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

const AccountPhoneVerifyRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountPhoneVerify);

export default withRouter(AccountPhoneVerifyRedux);
