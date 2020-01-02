import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";

const LoggedIn = ({ nonce, url, wpapi }) => {
  return (
    <div className="container" style={{ padding: "0px" }}>
      <Navbar />
      <div className="row" style={{ padding: "0px" }}>
        {/*  <div className="col-md-3">
          <ListMenu />
        </div>
        <div className="col-md-9">
          <Events wp={wp} /> 
        
        </div>*/}
        <div className="col-md-12"></div>
      </div>
    </div>
  );
};

export default LoggedIn;
