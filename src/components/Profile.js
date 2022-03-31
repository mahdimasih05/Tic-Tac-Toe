import React from "react";
import { connect } from "react-redux";
import boy from "./media/boy.png";
import girl from "./media/girl.png";
import man from "./media/man.png";
import lady from "./media/lady.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const Back = () => {
    navigate(location.state.path);
  };
  return (
    <div className="row">
      <div onClick={Back} className="col offset-m1 offset-s1 back-i-p">
        <i class="large back-icon">arrow_back</i>
      </div>
      <div className="col offset-m10 offset-s9 logout-p">
        <Link
          to={"/logout"}
          state={{ path: location.state.path }}
          class=" btn logout"
        >
          Log out
        </Link>
      </div>
      <div className="container">
        <div className="col m7 offset-m2 s12 prof1 center-align">
          <img
            src={require("./media/" + user.avatar + ".png")}
            className="prof-ava"
          ></img>
          <p className="prof-name">{user.name}</p>
          <p className="prof-id">id: {user.id}</p>
        </div>
        <div className="col m7 offset-m2 s12 prof2">
          <div className="col m4 s4 center-align">
            <p className="prof-title">Wins:</p>
            <p className="prof-win">
              {user.wins}
              <i className="material-icons">sentiment_satisfied_alt</i>
            </p>
          </div>
          <div className="col m4 s4 center-align">
            <p className="prof-title">Ties:</p>
            <p className="prof-tie">
              {user.ties}
              <i className="material-icons">sentiment_neutral</i>
            </p>
          </div>
          <div className="col m4 s4 center-align">
            <p className="prof-title">Losses:</p>
            <p className="prof-los">
              {user.losses}
              <i className="material-icons">sentiment_very_dissatisfied</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { user: state.users };
};

export default connect(mapStateToProps)(Profile);
