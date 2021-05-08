import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/core';
import LogIn from '../components/pages/LogIn'
import {post} from 'axios';


class LogInContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {redirect: false, errorVisibility: 'hidden'};
		this.onLogIn = this.onLogIn.bind(this);
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

	onLogIn(event, loginRequest){
		event.preventDefault();
		post('http://localhost:8081/login', loginRequest)
		.then((response) => {
			console.log(response);
			if (response.status === 200 && response.data && response.data.jwt){
				localStorage.setItem('token', response.data.jwt);
				this.setState((prevState, props) => ({
					...prevState,
					redirect : true
				}));
			}
		},(error) => {
			console.log(error);
			this.setState((prevState, props) => ({
				...prevState,
				errorVisibility : 'visible'
			}));	
			this.removeAlertInXSecs('errorVisibility', 3500);  
		});
	}
	
	renderRedirect = () => {
		if (this.state.redirect) {
	   	return <Redirect to='/images' />
	   }
	}

	render(){
		return (
			<div>
        	 	{this.renderRedirect()}
				<LogIn onLogIn = {this.onLogIn}/>
				<Alert severity="error" style={{visibility : `${ this.state.errorVisibility }`, position:'fixed', bottom:'20px'}}>
  		 			<AlertTitle>Error Logging In</AlertTitle>
						Please try again later.
				</Alert>
			</div>
		);
	}
};

export default LogInContainer;