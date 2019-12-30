import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

var WPAPI = require("wpapi");

const UploadFile = ({ onFileUpload }) => {
  const onDrop = useCallback(async acceptedFiles => {
    wp = new WPAPI({
      endpoint: window.wpr_object.api_url,
      nonce: window.wpr_object.api_nonce
    });
    try {
      console.log(acceptedFiles);
      const response = await wp
        .media()
        .file(acceptedFiles[0])
        .create({
          title: acceptedFiles[0].name,
          alt_text: acceptedFiles[0].name
        });
      console.log(response);
      onFileUpload(response.id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Click to select image</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default UploadFile;
