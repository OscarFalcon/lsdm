import '../../App.css'
import React, {Component} from 'react'
import DropZoneDescription from '../drop-zone/DropZoneDescription';


class Upload extends Component {

render(){
	return (
		<div>
			<h1 className='upload'> Find Your Duplicates</h1>
				<DropZoneDescription />
		</div>
	);
}}

export default Upload;