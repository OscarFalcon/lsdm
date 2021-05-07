import React, {Component} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


class SignUp extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
      this.handleChange = this.handleChange.bind(this);
	};
	
	handleChange(event) {
		this.setState({ ...this.state, [event.target.name]: event.target.value });
	};
	
	render(){
      const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
      const headerStyle = { margin: 0 }
      const avatarStyle = { backgroundColor: '#1bbd7e' }
		
		return(
			<Grid>
      	<Paper style={paperStyle}>
         	<Grid align='center'>
		 			<Avatar style={avatarStyle}></Avatar>
            	<h2 style={headerStyle}>Sign Up</h2>
            	<Typography variant='caption' gutterBottom>Sign up for an account.</Typography>
         	</Grid>
			<form onSubmit={(event)=>this.props.onSubmit(event, this.state)}>
					<TextField fullWidth label='Username' placeholder="Enter username" name="username" onChange={this.handleChange}/>			
					<TextField fullWidth label='First Name' placeholder="Enter your name" name="firstName" onChange={this.handleChange}/>
           	 	<TextField fullWidth label='Last Name' placeholder="Enter your name" name="lastName" onChange={this.handleChange}/>
           	 	<TextField fullWidth label='Email' placeholder="Enter your email" name="email" onChange={this.handleChange}/>
           	 	<TextField fullWidth label='Password' placeholder="Enter your password" name="password" onChange={this.handleChange}/>
           	 	<TextField fullWidth label='Confirm Password' placeholder="Confirm your password" name="confirmpassword" onChange={this.handleChange}/>
					<FormControl labelcontrol={<Checkbox name="checked" />} label="I accept the terms and conditions." name="terms" onChange={this.handleChange}/>
		 			<Button 
						type='submit'
						variant='contained'
						color='primary'>
						Sign up
					</Button>
				</form>
        	</Paper>
		</Grid>
	)};
}
export default SignUp;