import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Log_out = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="container-logout row">
      <div className="col m5 offset-m3 s12 logout-box center-align">
        <i className="material-icons exc-icon">error_outline</i>
        <p className="logout-h">Are you sure you want to log out?</p>
        <p className="logout-m">All of the information will be lost!</p>
        <a onClick={() => navigate("/")} className="logout-btn">
          Yes
        </a>
        <Link
          to={"/profile"}
          state={{ path: location.state.path }}
          className="logout-btn"
        >
          No
        </Link>
      </div>
    </div>
  );
};

export default Log_out;
