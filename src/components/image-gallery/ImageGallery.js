import React from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageFrame from './ImageFrame';

export default function ImageGallery(props) {	

	return (  
		<div>
		<div> {props.title} </div>
    		<ImageList>
				{ props.imageData.map((image) => (
     				<ImageFrame image={image} key={image.id} onDeleteConfirmed={props.onDeleteConfirmed}/>
      		))}
    		</ImageList>
		</div>
)};


