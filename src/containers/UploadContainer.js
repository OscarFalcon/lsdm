import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import Upload from '../components/pages/Upload'
import jwt from 'jsonwebtoken'


class UploadContainer extends Component {

	constructor(props) {
		super(props);
		this.state = { 
		}
	}
	
	verrifyAuthToken(){
		const token = localStorage.getItem('token');
		var decodedToken = jwt.decode(token, {complete: true});
		var dateNow = new Date();
		
		//compare jwt time in seconds to date (divide by 1000 to get seconds )
		// 1620433881 < 1620444180.206
		return decodedToken.payload.exp > (dateNow.getTime() / 1000)
	}
	
	componentDidMount(){
		if (this.verrifyAuthToken() === false){
			this.setRedirect();
		}
	};
	
	setRedirect = () => {
		this.setState({
	   	redirect: true
	   });
	}
	
	renderRedirect = () => {
	    if (this.state.redirect) {
	      return <Redirect to='/login' />
	    }
	 }
	
 	render(){
 		return (
 			<div>
				{ this.renderRedirect() }
				<Upload/> 
			</div>
		)};
}

export default UploadContainer;