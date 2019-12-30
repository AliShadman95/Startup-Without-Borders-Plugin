import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

var WPAPI = require("wpapi");

const UploadFile = () => {
  const [uploadedFile, setUploadedFile] = useState([]);
  const onDrop = useCallback(async acceptedFiles => {
    wp = new WPAPI({
      endpoint: window.wpr_object.api_url,
      nonce: window.wpr_object.api_nonce
    });
    try {
      console.log(acceptedFiles);
      const response = wp
        .media()
        .file(acceptedFiles[0])
        .create({
          title: acceptedFiles[0].name,
          alt_text: acceptedFiles[0].name
        });

      console.log(response);
      setUploadedFile(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
