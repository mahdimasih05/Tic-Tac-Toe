import React, { Component } from "react";
import boy from "./media/boy.png";
import girl from "./media/girl.png";
import man from "./media/man.png";
import lady from "./media/lady.png";
import M from "materialize-css";
import { connect } from "react-redux";
import Hooks from "../hoc/Hooks";
import { useNavigate, Link } from "react-router-dom";

class Log_in extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      user_name: null,
      id: "#" + Math.floor(Math.random() * 900000 + 100000),
      wins: 10,
      ties: 5,
      losses: 7,
    };
  }
  Name = (e) => {
    this.setState({
      user_name: e.target.value,
    });
  };
  Radio = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  SubmitFu = (e) => {
    e.preventDefault();
    !this.state.user_name || !this.state.value
      ? console.log(M.toast({ html: "Please complete your information!" }))
      : this.props.SendInfo(this.state) || this.props.navigate("/menu");
  };
  render() {
    return (
      <div className="container">
        <div className="row container">
          <div className="col s4 offset-s3">
            <h4 className="tic">Tic</h4>
          </div>
          <div className=" col s4 offset-s5">
            <h4 className="tac">Tac</h4>
          </div>
          <div className=" col s4 offset-s7">
            <h4 className="toe">Toe</h4>
          </div>
        </div>
        <div className="row formX">
          <div className="col m6 offset-m3 s12 form">
            <div className="col m6 offset-m3 s12">
              <p className="field-header center-align">Log-in</p>
            </div>
            <div class="input-field col m6 offset-m3 s12">
              <input
                id="input_text"
                type="text"
                onChange={this.Name}
                maxLength={10}
              ></input>
              <label for="input_text">Name</label>
            </div>
            <div className="col m12 s12">
              <p className="ava-header center-align">Choose your avatar</p>
              <div>
                <form className="ava-form" action="#">
                  <div className="col m3 s3">
                    <label className="radio">
                      <input
                        name="avatar"
                        class="with-gap"
                        value="boy"
                        type="radio"
                        onChange={this.Radio}
                      />
                      <img src={boy} className="avatar"></img>
                    </label>
                  </div>
                  <div className="col m3 s3">
                    <label className="radio">
                      <input
                        name="avatar"
                        class="with-gap"
                        type="radio"
                        value="girl"
                        onChange={this.Radio}
                      ></input>
                      <img src={girl} className="avatar"></img>
                    </label>
                  </div>
                  <div className="col m3 s3">
                    <label className="radio">
                      <input
                        name="avatar"
                        class="with-gap"
                        type="radio"
                        value="man"
                        onChange={this.Radio}
                      ></input>
                      <img src={man} className="avatar"></img>
                    </label>
                  </div>
                  <div className="col m3 s3">
                    <label className="radio">
                      <input
                        name="avatar"
                        class="with-gap"
                        type="radio"
                        value="lady"
                        onChange={this.Radio}
                      ></input>
                      <img src={lady} className="avatar"></img>
                    </label>
                  </div>
                  <div className="center-align">
                    <a class=" btn login" onClick={this.SubmitFu}>
                      Log in
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SendInfo: (e) => {
      dispatch({
        id: e.id,
        type: "ADD_USER",
        name: e.user_name,
        avatar: e.value,
        wins: e.wins,
        ties: e.ties,
        losses: e.losses,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Hooks(Log_in));
