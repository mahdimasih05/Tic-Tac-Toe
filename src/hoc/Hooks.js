import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Hooks = (Component) =>
  function Comp(props) {
    const param = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <Component
        {...props}
        param={param}
        navigate={navigate}
        location={location}
      />
    );
  };

export default Hooks;
