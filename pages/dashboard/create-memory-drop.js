import React, { useState, useRef, useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

export const CreateMemoryAvatar = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, [])
  const { getRootProps, getInputProps, isDragActive, acceptedFiles,
    fileRejections, } = useDropzone({
      onDrop, accept: {
        'image/png': ['.png'],
        'image/jpg': ['.jpg'],
        'image/jpeg': ['.jpeg'],
      },
      maxFiles:1
    })

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));


  return (
    <div className="container">
      <div {...getRootProps()} className=" bg-blue-500">
        <input {...getInputProps()} className="bg-blue-500" />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </div>
  )
}

export default CreateMemoryAvatar;
