import React, {Component} from 'react';
import axios from 'axios';
import DeleteImageDialog from './DeleteImageDialog';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class ImageFrame extends Component {
	
	constructor(props) {
		super(props);
		this.state = {dialogOpened: false};
		this.handleDeleteIconClicked = this.handleDeleteIconClicked.bind(this);
		this.handleDialogNo = this.handleDialogNo.bind(this);
		this.handleDialogYes = this.handleDialogYes.bind(this);
		this.setStateAfterImage = this.setStateAfterImage.bind(this);
	};
	
	handleDeleteIconClicked(event){
		event.stopPropagation();		
		this.setState((prevState, props) => ({
			dialogOpened: true
		}));
	}
	
	handleDialogNo(event){
		event.stopPropagation();		
		this.setState((prevState, props) => ({
			dialogOpened: false
		}));
	}
	
	handleDialogYes(event){
		event.stopPropagation();		
		this.setState((prevState, props) => ({
			dialogOpened: false
		}));
		this.props.onDeleteConfirmed(this.props.image);
	}
	
	
	setStateAfterImage(event){
		const base64 = event.target.result;
		console.log(event);
		this.setState((prevState, props) => ({
 			...prevState,
 			//imageBase64: `data:image/jpg;base64,${Buffer.from(response.data).toString('base64')}`
			imageBase64: base64
 		}));
	}
	
	
	async fetchImage(){
		const response =  await axios.get(this.props.image.ref, {
			responseType: 'blob',
			headers: {
				'Authorization': localStorage.getItem('token')
			}
		});
		
		//console.log(`data:image/jpg;base64,${Buffer.from(response.data).toString('base64')}`);
		
		var reader = new FileReader();
		reader.readAsDataURL(response.data); 
		reader.onloadend = this.setStateAfterImage;
	};
	
	componentDidMount() {
		this.fetchImage();
	}
	
	render(){
		const image = this.props.image;
		//console.log(this.props.image);
		console.log("render!")
		console.log(this.state.imageBase64);
		return(
			<ImageListItem key={image.id}>
				<img src={ this.state.imageBase64 ? this.state.imageBase64 : ''}
      			alt={image.title}
					width="400"
					height="400"
					//loading="lazy"
    			/>
    			<ImageListItemBar
      			title={image.title}
      			subtitle={image.author}
      			actionIcon={
        				<IconButton
							sx={{ color: 'rgb(255, 255, 255)' }}
          				aria-label={`info about ${image.title}`}
							onClick={this.handleDeleteIconClicked}
      				>
      					<DeleteIcon style={{ color: 'red' }}/>
						</IconButton>
      			}					
				/>
					<DeleteImageDialog opened={this.state.dialogOpened} handleDialogNo={this.handleDialogNo} handleDialogYes={this.handleDialogYes} onClose={this.handleDeleteDialogClose} />
			</ImageListItem>
	)}
}

export default ImageFrame;
