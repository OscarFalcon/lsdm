import React, {Component} from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageFrame from './ImageFrame';

class ImageGallery extends Component {

render() {
	return (  
		<div>
			<div> My Images </div>
    		<ImageList>
				{ this.props.imageData.map((image) => (
     				<ImageFrame image={image} key={image.id} onDeleteConfirmed={this.props.onDeleteConfirmed}/>
      		))}
    		</ImageList>
		</div>
)}};

export default ImageGallery;

