import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ListMenu from "./ListMenu";
import Navbar from "./Navbar";
import Events from "./Events";
import { registerRoutes } from "../helpers/Crud";
const LoggedIn = ({ nonce, url, wpapi }) => {
  const [events, setEvents] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [partners, setPartners] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    registerRoutes();
  }, []);

  return (
    <div className="container" style={{ padding: "0px" }}>
      <Navbar />
      <div className="row" style={{ padding: "0px" }}>
        <div className="col-md-3">
          <ListMenu />
        </div>
        <div className="col-md-9">
          <Events wp={wp} />
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
