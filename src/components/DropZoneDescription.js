import React from 'react'
import DropzoneComponent from './DropeZoneComponent'
import './DropZoneDescription.css'
import { Button } from './Buttons'
import { Link } from 'react-router-dom';

function DropZoneDescription(){
    return(
        <>
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
                   <Button>
                    <Link to ='/SignUp'>Start Here </Link>
                   </Button>
                </p>
            </div>

        </>
    )
}

export default DropZoneDescription;