import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const UploadFile = () => {
  const [posts, setPosts] = useState([]);
  const [upload, setUpload] = useState("null");

  const onDrop = useCallback(async acceptedFiles => {
    try {
      // Do something with the files

      const response = axios.post(
        "http://localhost/localsite/wp-json/wp/v2/media/",
        acceptedFiles[0],
        {
          headers: {
            "X-WP-Nonce": nonce,
            ContentType: false,
            processData: false,
            "Content-Disposition": "attachment; filename=example.png"
          }
        }
      );

      console.log(response);
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
