import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import config from '../../config';

import 'react-dropzone-uploader/dist/styles.css'

/* const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '150px',
  borderWidth: 4,
  borderRadius: 10,
  borderColor: '#eeeeee',
  borderStyle: 'solid',
  backgroundColor: '#fff',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
}; */



const MyUploader = () => {
	
  const getUploadParams = ({ meta }) => { 
	  return {
		   url: config.service + '/images',
			headers : {
				Authorization : localStorage.getItem('token')
			}
		}
  };

  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const onDrop = () => {console.log('onDrop')};

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
		onDrop={onDrop}
      accept="image/*"
    />
  )
}

<MyUploader />

export default MyUploader;