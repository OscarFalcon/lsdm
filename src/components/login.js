import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class LogIn extends Component {

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
		this.props.onLogIn(this.state);
		event.preventDefault();
	};
	
	render(){
		const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    	const avatarStyle={backgroundColor:'#1bbd7e'}
    	const btnstyle={margin:'8px 0'}
    	return (
      	<Grid>
				<Paper  style={paperStyle}>
            <Grid align='center'>
            	<Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
               <h2>Sign In</h2>
            </Grid>
				<form onSubmit={this.handleSubmit}>
            	<TextField label='Username' placeholder='Enter username' fullWidth required name="username" onChange={this.handleChange}/>
            	<TextField label='Password' placeholder='Enter password' type='password' fullWidth required name="passsord" onChange={this.handleChange}/>
            	<FormControlLabel
            		control={
               		<Checkbox
                  		name="checked"
                   		color="primary"
                   	/>
              	 	}
              	 	label="Remember me"
            	/>
            	<Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign In</Button>
				</form>
            <Typography >
              	<Link to="/forgot">Forgot password?</Link>
            </Typography>
            <Typography > Dont have have an account?
					<Link to="/signup">Sign Up</Link>
            </Typography>
				</Paper>
			</Grid>
	)}
};

export default LogIn;