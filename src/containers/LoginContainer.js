import LogIn from '../components/LogIn'

const onLogIn = function(SignUpArgs){
	//const { firstName, lastName, email, password, confirmpassword } = data;
	console.log("posting sign in...");
}

const LogInContainer = () => {
	return (
		<LogIn onLogIn = {onLogIn}/>

)};

export default LogInContainer;