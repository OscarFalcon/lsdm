import React, {Component} from 'react'
import axios from 'axios';
import ImageGallery from '../components/image-gallery/ImageGallery'
import { Alert, AlertTitle } from '@material-ui/core';


class ImageGalleryContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			imageData: [],
			errorVisibility : 'hidden',
			successVisibility : 'hidden'
		};
		
		this.onDeleteConfirmed = this.onDeleteConfirmed.bind(this);
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
	
	componentDidMount(){
		this.getUserImages();
	};
	
	render(){
		return (
			<div>
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