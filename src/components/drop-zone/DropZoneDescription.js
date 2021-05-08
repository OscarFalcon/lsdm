import React from 'react'
import DropzoneComponent from './DropeZoneComponent'
import './DropZoneDescription.css'
import Button from '../common/Buttons'

function DropZoneDescription(){
    return(
        <div>
            <div className = 'dropzonedescription-container'>
                <h1>
                    Start by uploading your files here
                </h1>
                <p className = 'dropzonedescription-tag'>
                    We will do the rest.
                </p>
                <DropzoneComponent />
                <p className = 'dropzonedescription-info'>
                    Accepted Files: img, jpeg, png, tiff, raw 
                </p>
                <p className = 'dropzonedescription-info'>
                   Trying to upload from Google Drive? 
                   <Button linkTo='/login'>
                   	Start Here
                   </Button>
                </p>
            </div>

        </div>
    )
}

export default DropZoneDescription;