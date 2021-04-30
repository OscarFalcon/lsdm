import SignUp from '../components/SignUp'

const onSubmit = function(SignUpArgs){
	//const { firstName, lastName, email, password, confirmpassword } = data;
	console.log("posting submit...");
}

const SignUpContainer = () => {
	return (
		<SignUp onSubmit={onSubmit}/>
)};

export default SignUpContainer;