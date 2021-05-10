import React from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageFrame from './ImageFrame';
import Fab from '@material-ui/core/Fab';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function ImageGallery(props) {	

	const [anchorEl, setAnchorEl] = React.useState(null);
	
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
     setAnchorEl(null);
   };

	return (  
		<div>
			<div> My Images </div>
    		<ImageList>
				{ props.imageData.map((image) => (
     				<ImageFrame image={image} key={image.id} onDeleteConfirmed={props.onDeleteConfirmed}/>
      		))}
    		</ImageList>
			<div>
				<Fab color="red" aria-label="add" onClick={handleClick} style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', position:'fixed', bottom:'20px', right: '20px'}}>
					<IconButton
						sx={{ color: 'rgb(255, 255, 255)' }}
						aria-label={'options'}
					>
						<ImageSearchIcon style={{ color: 'red' }}/>
					</IconButton>
				</Fab>
	       	<Menu
	         	id="simple-menu"
	         	anchorEl={anchorEl}
	         	keepMounted
	         	open={Boolean(anchorEl)}
	         	onClose={handleClose}
	       	>
	         	<MenuItem onClick={handleClose}>Detect & Delete Duplicates</MenuItem>
	      	</Menu>
			</div>
				
				

		</div>
)};


