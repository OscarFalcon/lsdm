import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import ImageGallery from '../components/image-gallery/ImageGallery'
import config from '../config'


class DuplicateImageGalleryContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
		console.log(this.state);
		this.renderRedirect = this.renderRedirect.bind(this);
		this.onDeleteConfirmed = this.onDeleteConfirmed.bind(this);
		this.getDuplicateImages = this.getDuplicateImages.bind(this);
	};
	
	async getDuplicateImages(){
		console.log('HERE');
		const response =  await axios.get(config.service + '/duplicates', {
			headers: {
				'Authorization': localStorage.getItem('token')
			}
		});
		 this.setState((prevState, props) => ({
			...prevState,
			duplicateData: response.data,
		}));
	};
	
	async deleteImage(image){
		try{ 
			
			console.log('whatt', config.service + image.ref);
			const response =  await axios.delete(config.service + image.ref, {
			headers: {
				'Authorization': localStorage.getItem('token')
			}});
			console.log(response);
			return true;
		}
		catch (err){
			return false;
		}
	}
	
	onDeleteConfirmed(image){
		console.log('delete initiated', image);
		
		var success = this.deleteImage(image);
		if (success){
			this.getDuplicateImages();
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
			this.getDuplicateImages();
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
	 };
	 
	 render(){
		 if (this.state.duplicateData){
			 
			 return Object.keys(this.state.duplicateData).map((key, index) => {
			 	return (
					<ImageGallery key={"gallery-"+key} title={`Duplicate for image ${key}`} onDeleteConfirmed={this.onDeleteConfirmed} imageData={
						new Array(this.state.duplicateData[key]).concat(this.state.duplicateData[key].duplicates)  }/>
			  	)
		 	})
	 	} else {
			return (
				null
			);
	 		 
	 	} 	
	}
}

export default DuplicateImageGalleryContainer;