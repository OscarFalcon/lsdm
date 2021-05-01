import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab';
import {post} from 'axios';
import SignUp from '../components/SignUp'


class SignUpContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {redirect: false, errorVisibility: 'hidden', errorTitle : null, errorMessage : null};
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
		if (signUpPayload.password !== signUpPayload.confirmpassword){
			this.setState((prevState, props) => ({
				...prevState,
				errorTitle : 'User Error',
				errorMessage : 'Password and Confirm Passwords do not match',
				errorVisibility: 'visible'
			}));
			
			this.removeAlertInXSecs('errorVisibility', 3500);			
			return false;
		}

		if (!this.validateEmail(signUpPayload.email)){
			this.setState((prevState, props) => ({
				...prevState,
				errorTitle : 'Invalid Email',
				errorMessage : 'Check the format of email field',
				errorVisibility: 'visible'
			}));
			
			this.removeAlertInXSecs('errorVisibility', 3500);			
			return false;
		}
		
		return true;
	}
	
	onSubmit(event, signUpPayload){
		event.preventDefault();
		if (this.validateSignUpParams(signUpPayload)){
			post('http://localhost:8081/signup', signUpPayload)
			.then((response) => {
				this.setState((prevState, props) => ({
					...prevState,
					redirect : true
				}));
			},(error) => {
				console.log(error);
				this.setState((prevState, props) => ({
					...prevState,
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
			</div>
		)}
};

export default SignUpContainer;