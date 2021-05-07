import React from 'react'
import Dropzone from 'react-dropzone-uploader'
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
  // CHANGE URL TO SOMETHING ELSE LATER
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*"
    />
  )
}

<MyUploader />

export default MyUploader;