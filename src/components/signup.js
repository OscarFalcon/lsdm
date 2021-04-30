import React, {Component} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';


class SignUp extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
      this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};
	
	handleChange(event) {
		this.setState({ ...this.state, [event.target.name]: event.target.value });
		console.log(this.state);
	};

	handleSubmit(event) {
		console.log("submit: " + event.target);
		console.log(this.state);
		console.log(this.props);
		this.props.onSubmit(this.state);
		event.preventDefault();
	};
   
	render(){
      const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
      const headerStyle = { margin: 0 }
      const avatarStyle = { backgroundColor: '#1bbd7e' }
      const marginTop = { marginTop: 5 }
		
		return(
			<Grid>
      	<Paper style={paperStyle}>
         	<Grid align='center'>
		 			<Avatar style={avatarStyle}></Avatar>
            	<h2 style={headerStyle}>Sign Up</h2>
            	<Typography variant='caption' gutterBottom>Sign up for an account.</Typography>
         	</Grid>
				<form onSubmit={this.handleSubmit}>
					<TextField fullWidth label='First Name' placeholder="Enter your name" name="firstName" onChange={this.handleChange}/>
           	 	<TextField fullWidth label='Last Name' placeholder="Enter your name" name="lastName" onChange={this.handleChange}/>
           	 	<TextField fullWidth label='Email' placeholder="Enter your email" name="email" onChange={this.handleChange}/>
           	 	<TextField fullWidth label='Password' placeholder="Enter your password" name="password "onChange={this.handleChange}/>
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