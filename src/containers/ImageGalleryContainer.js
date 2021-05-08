import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import ImageGallery from '../components/image-gallery/ImageGallery'
import { Alert, AlertTitle } from '@material-ui/core';
import jwt from 'jsonwebtoken'

class ImageGalleryContainer extends Component {
		
	constructor(props) {
		super(props);
		this.state = { 
			imageData: [],
			errorVisibility : 'hidden',
			successVisibility : 'hidden'
		};
		
		this.onDeleteConfirmed = this.onDeleteConfirmed.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);
	};
	
	async getUserImages(){
		const response =  await axios.get('http://localhost:8081/images', {
			headers: {
				'Authorization': localStorage.getItem('token')
			}
		});
		
		 this.setState((prevState, props) => ({
			...prevState,
			imageData: response.data,
		}));
	};
		
	deleteImage(image){
		return true;
	}

	removeImageFromView(image){
		var new_data = [...this.state.imageData];
  	 	var index = new_data.indexOf(image)
		new_data.splice(index, 1);
		return new_data;
	}

	removeAlertInXSecs(alertAttribute, secs){
		setTimeout(() => {
			this.setState((prevState, props) => ({
				...prevState,
				[alertAttribute] : 'hidden'
			}));
		},
		secs)
	}

	onDeleteConfirmed(image){	
		var success = this.deleteImage(image);
		if (success){
			var new_images = this.removeImageFromView(image);
			this.setState((prevState, props) => ({
				...prevState,
				imageData: new_images,
				successVisibility : 'visible'
			}));
			
			this.removeAlertInXSecs('successVisibility', 3500);
		}
		else{
			this.setState((prevState, props) => ({
				...prevState,
				errorVisibility : 'visible'
			}));
			
			this.removeAlertInXSecs('errorVisibility', 3500);
		}
	};
	
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
		} else {
			this.getUserImages();
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
				<ImageGallery onDeleteConfirmed={this.onDeleteConfirmed} imageData={this.state.imageData}/>
				<Alert severity="error" style={{visibility : `${ this.state.errorVisibility }`, position:'fixed', bottom:'20px'}}>
  		 			<AlertTitle>Error in deleting image</AlertTitle>
						Please try again later.
				</Alert>
				<Alert severity="success" style={{visibility : `${ this.state.successVisibility }`, position:'fixed', bottom:'20px'}}>
  		 			<AlertTitle>Deleted Image</AlertTitle>
  		 				Image successfully deleted.
				</Alert>
			</div>
	)};
};

export default ImageGalleryContainer;