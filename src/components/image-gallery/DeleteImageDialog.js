import React, {Component} from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

class DeleteImageDialog extends Component {
	
	render(){
		return(
   		<Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" open={this.props.opened}>
      		<DialogTitle id="simple-dialog-title">Do you want to delete this image?</DialogTitle>
     	 		<DialogActions>
	       		<Button
	         		variant="contained"
	         		onClick={this.props.handleDialogNo}
	         		color="primary"
	      		>
	         		No
	      		</Button>
	       		<Button
	        			variant="contained"
	        		 	onClick={this.props.handleDialogYes}
					 	color="secondary"
					>
	         		Yes
	      		</Button>
     			</DialogActions>
			</Dialog>
	)};
};

export default DeleteImageDialog;