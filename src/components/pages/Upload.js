import '../../App.css'
import React from 'react'
import DropZoneDescription from '../drop-zone/DropZoneDescription';

function Upload(){
    return(
        <>
            <h1 className = 'upload'> Find Your Duplicates</h1>
             <DropZoneDescription />
            
        </>
    )
}

export default Upload;