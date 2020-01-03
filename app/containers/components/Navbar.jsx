import React, { useState } from "react";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const inputChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row">
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          logo
        </div>
        <div
          className="col-md-10 d-flex justify-content-center align-items-center"
          style={{ height: "5vh" }}
        >
          Startup Without Borders
        </div>
      </div>
    </div>
  );
};

export default Navbar;
