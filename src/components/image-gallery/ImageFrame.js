import React, {Component} from 'react'
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
	
	render(){
		const image = this.props.image;
		return(
			<ImageListItem key={image.id}>
   			<img
      			srcSet={`${image.ref}?w=248&fit=crop&auto=format 1x, ${image.ref}?w=248&fit=crop&auto=format&dpr=2 2x`}
      			alt={image.title}
     	 			loading="lazy"
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
