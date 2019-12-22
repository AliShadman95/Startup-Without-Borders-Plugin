import React, { useEffect, useState, useCallback } from "react";
var WPAPI = require("wpapi");
import { useDropzone } from "react-dropzone";
import axios from "axios";

const LoggedIn = ({ nonce, url }) => {
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
  useEffect(() => {
    wp = new WPAPI({
      endpoint: url,
      nonce: nonce
    });

    // Questo fa il fetch di tutti i post su wordpress
    getPosts();
  }, []);

  const onFileUpload = () => {};

  const getPosts = async () => {
    try {
      const data = await wp.posts().get();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

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

export default LoggedIn;
