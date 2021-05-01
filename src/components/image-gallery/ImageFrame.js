import React, {Component} from 'react'
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class ImageFrame extends Component {

	render(){
		const image = this.props.image;
		return(
			<ImageListItem key={image.id}>
   			<img
      			srcSet={`${image.url}?w=248&fit=crop&auto=format 1x, ${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
							onClick={(e)=>this.props.handleOnDeleteIconClicked(this.props.image)}
      				>
      					<DeleteIcon style={{ color: 'red' }}/>
						</IconButton>
      			}
				/>
			</ImageListItem>
	)}
}

export default ImageFrame;
