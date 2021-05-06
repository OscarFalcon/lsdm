import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab';
import {post} from 'axios';
import SignUp from '../components/SignUp'


class SignUpContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {redirect: false, successVisibility : 'hidden', errorVisibility: 'hidden', errorTitle : null, errorMessage : null};
		this.onSubmit = this.onSubmit.bind(this);
	};
	
	removeAlertInXSecs(alertAttribute, secs){
		setTimeout(() => {
			this.setState((prevState, props) => ({
				...prevState,
				[alertAttribute] : 'hidden'
			}));
		},
		secs)
	}
	
	validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(String(email).toLowerCase());
	}
	
	validateSignUpParams(signUpPayload){
		var valid = true;
		var errorTitle = null, errorMessage = null;
		
		if (!signUpPayload.username){
			valid = false;
			errorTitle = 'Username';
			errorMessage = 'Please enter username';
		}
		
		if (!signUpPayload.firstName){
			valid = false;
			errorTitle = 'First Name';
			errorMessage = 'Please enter first name';
		}
		
		else if (!signUpPayload.lastName){
			valid = false;
			errorTitle = 'Last Name';
			errorMessage = 'Please enter last name';
		}
		
		else if (!this.validateEmail(signUpPayload.email)){
			valid = false;
			errorTitle =  'Invalid Email';
			errorMessage ='Please enter valida email';
		}
		
		else if (!signUpPayload.password){
			valid = false;
			errorTitle = 'Invalid Password';
			errorMessage = 'Please enter a password';
		}
			
		else if (signUpPayload.password !== signUpPayload.confirmpassword){
			valid = false;
			errorTitle = 'Invalid Passwords';
			errorMessage = 'Password and Confirm Passwords do not match';
		}

		if (!valid){
			this.setState((prevState, props) => ({
				...prevState,
				errorTitle: errorTitle,
				errorMessage: errorMessage,
				errorVisibility: 'visible'
			}));
			
			this.removeAlertInXSecs('errorVisibility', 3500);
		}
		
		return valid;
	}
	
	successAndRedirect(secs){
		this.setState((prevState, props) => ({
			...prevState,
			successVisibility : 'visible'
		}));
		
		setTimeout(() => {
			this.setState((prevState, props) => ({
				...prevState,
				redirect: true}))},
			secs)
	}
	
	onSubmit(event, signUpPayload){
		event.preventDefault();
		if (this.validateSignUpParams(signUpPayload)){
			post('http://localhost:8081/signup', signUpPayload)
			.then((response) => {
				this.successAndRedirect(3500);
			},(error) => {
				console.log(error);
				this.setState((prevState, props) => ({
					...prevState,
					errorTitle : 'Failed to sign up',
					errorMessage: 'There was an error signing up, please try again later.',
					errorVisibility : 'visible'
				}));	
				
				this.removeAlertInXSecs('errorVisibility', 3500);  
			});
		}
	};
	
	renderRedirect = () => {
		if (this.state.redirect) {
	   	return <Redirect to='/login' />
	   }
	}
	
	render(){
		return(
			<div>
     	 		{this.renderRedirect()}
				<SignUp onSubmit={this.onSubmit}/>
				<Alert severity="error" style={{visibility : `${this.state.errorVisibility}`, position:'fixed', bottom:'20px'}}>
				<AlertTitle> {this.state.errorTitle}</AlertTitle>
					{this.state.errorMessage }
				</Alert>
				<Alert severity="success" style={{visibility : `${ this.state.successVisibility }`, position:'fixed', bottom:'20px'}}>
  		 			<AlertTitle>Signed Up!</AlertTitle>
  		 				Account created!
				</Alert>
			</div>
		)}
};

export default SignUpContainer;