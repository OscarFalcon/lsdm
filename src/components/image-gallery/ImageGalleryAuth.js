import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import ImageGallery from './ImageGallery';
import ImageGalleryContainer from '../../containers/ImageGalleryContainer';


class ImageGalleryAuth extends Component {

	constructor(props) {
		super(props);
		this.state = { 
		}
	}
	
	verrifyAuthToken(){
		const token = localStorage.getItem('token');
		var decodedToken = jwt.decode(token, {complete: true});
		var dateNow = new Date();
		
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
				<ImageGalleryContainer/> 
			</div>
		)};
}

export default ImageGalleryAuth;