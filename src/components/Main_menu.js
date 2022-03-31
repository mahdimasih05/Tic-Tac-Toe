import React, { useState } from "react";
import boy from "./media/boy.png";
import girl from "./media/girl.png";
import man from "./media/man.png";
import lady from "./media/lady.png";
import { connect } from "react-redux";
import Hooks from "../hoc/Hooks";
import { Link, useLocation } from "react-router-dom";

const Main_menu = ({ user }) => {
  const location = useLocation().pathname;
  return (
    <div className="row">
      <div class="col offset-m9 offset-s7 chip-box ">
        <Link to={"/profile"} state={{ path: location }}>
          <div className="chip">
            <img src={require("./media/" + user.avatar + ".png")}></img>
            {user.name}
          </div>
        </Link>
      </div>
      <div className="col s12 m12 offset-m6 offset-s6 mainmenu">
        <div class="popover" id="menu">
          <div class="content">
            <div class="nav">
              <ul class="nav_list">
                <div class="nav_list_item">
                  <li>
                    <a>
                      <Link to={"/start"}>start</Link>
                    </a>
                  </li>
                </div>
                <div class="nav_list_item">
                  <li>
                    <a>
                      <Link to={"/profile"} state={{ path: location }}>
                        profile
                      </Link>
                    </a>
                  </li>
                </div>
                <div class="nav_list_item">
                  <li>
                    <a>
                      <Link to={"/about"}>about</Link>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { user: state.users };
}

export default connect(mapStateToProps)(Main_menu);
