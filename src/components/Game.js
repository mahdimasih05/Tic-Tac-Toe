import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import boy from "./media/boy.png";
import girl from "./media/girl.png";
import man from "./media/man.png";
import lady from "./media/lady.png";
import Hooks from "../hoc/Hooks";
import gameover from "./media/gameover.png";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: [
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
        { id: 9, value: null },
      ],
      Refs: [
        (this.ele1 = React.createRef()),
        (this.ele2 = React.createRef()),
        (this.ele3 = React.createRef()),
        (this.ele4 = React.createRef()),
        (this.ele5 = React.createRef()),
        (this.ele6 = React.createRef()),
        (this.ele7 = React.createRef()),
        (this.ele8 = React.createRef()),
        (this.ele9 = React.createRef()),
        (this.ele10 = React.createRef()),
        (this.ele11 = React.createRef()),
        (this.ele12 = React.createRef()),
        (this.ele13 = React.createRef()),
      ],
      status: null,
      icon: null,
      id: this.props.user.id,
      avatar: this.props.user.avatar,
      name: this.props.user.name,
      wins: this.props.user.wins,
      losses: this.props.user.losses,
      ties: this.props.user.ties,
    };
  }
  render() {
    const Player = (e) => {
      e.target.className += " close small-x";
      e.target.setAttribute("disabled", "disabled");
      let PL_ch = this.state.parts.filter((item) => {
        return item.id == e.target.id;
      });
      PL_ch[0].value = "Pl";
      Checker();
      setTimeout(() => {
        if (this.state.status == null) {
          Computer();
        } else {
          return;
        }
      }, 500);
    };
    const Computer = () => {
      let Pc_ch = this.state.parts.filter((item) => {
        return item.value !== "Pl" && item.value !== "Pc";
      });
      Pc_ch = Pc_ch[Math.floor(Math.random() * Pc_ch.length)];
      Pc_ch.value = "Pc";

      this.state.Refs[Pc_ch.id - 1].current.classList.add("circle-t");
      this.state.Refs[Pc_ch.id - 1].current.setAttribute(
        "disabled",
        "disabled",
      );
      setTimeout(() => {
        if (this.state.status == null) {
          Checker();
        }
      }, 100);
    };
    const Message = (value) => {
      setTimeout(() => {
        switch (value) {
          case "Pl":
            this.state.Refs[10].current.className = "hide";
            this.state.Refs[11].current.classList.add("won");
            this.state.Refs[12].current.classList.add("won");
            var wins = this.props.user.wins;
            wins += 1;
            this.setState({
              status: "won!",
              icon: "sentiment_satisfied_alt",
              wins: wins,
            });
            this.state.Refs[9].current.classList.add("block");
            this.state.Refs[9].current.classList.remove("hide-message");
            break;
          case "Pc":
            this.state.Refs[10].current.className = "hide";
            this.state.Refs[11].current.classList.add("los");
            this.state.Refs[12].current.classList.add("los");
            var losses = this.props.user.losses;
            losses += 1;
            this.setState({
              status: "lose!",
              icon: "sentiment_very_dissatisfied",
              losses: losses,
            });
            this.state.Refs[9].current.classList.add("block");
            this.state.Refs[9].current.classList.remove("hide-message");
            break;
          case "tie":
            this.state.Refs[10].current.className = "hide";
            this.state.Refs[11].current.classList.add("tie");
            this.state.Refs[12].current.classList.add("tie");
            var ties = this.props.user.ties;
            ties += 1;
            this.setState({
              status: "tie!",
              icon: "sentiment_neutral",
              ties: ties,
            });
            this.state.Refs[9].current.classList.add("block");
            this.state.Refs[9].current.classList.remove("hide-message");
            break;
        }
        this.props.SendInfo(this.state);
      }, 400);
    };
    const Checker = () => {
      const p = this.state.parts;
      setTimeout(() => {
        if (
          p[0].value == p[1].value &&
          p[0].value == p[2].value &&
          p[1].value == p[2].value &&
          p[0].value != null
        ) {
          Message(p[0].value);
        }
        if (
          p[3].value == p[4].value &&
          p[3].value == p[5].value &&
          p[4].value == p[5].value &&
          p[3].value != null
        ) {
          Message(p[3].value);
        }
        if (
          p[6].value == p[7].value &&
          p[6].value == p[8].value &&
          p[7].value == p[8].value &&
          p[6].value != null
        ) {
          Message(p[6].value);
        }
        if (
          p[0].value == p[3].value &&
          p[0].value == p[6].value &&
          p[3].value == p[6].value &&
          p[0].value != null
        ) {
          Message(p[0].value);
        }
        if (
          p[1].value == p[4].value &&
          p[1].value == p[7].value &&
          p[4].value == p[7].value &&
          p[1].value != null
        ) {
          Message(p[1].value);
        }
        if (
          p[2].value == p[5].value &&
          p[2].value == p[8].value &&
          p[5].value == p[8].value &&
          p[2].value != null
        ) {
          Message(p[2].value);
        }
        if (
          p[0].value == p[4].value &&
          p[0].value == p[8].value &&
          p[4].value == p[8].value &&
          p[0].value != null
        ) {
          Message(p[0].value);
        }
        if (
          p[2].value == p[4].value &&
          p[2].value == p[6].value &&
          p[4].value == p[6].value &&
          p[2].value != null
        ) {
          Message(p[2].value);
        }
      }, 100);
      setTimeout(() => {
        if (
          p[0].value != null &&
          p[1].value != null &&
          p[2].value != null &&
          p[3].value != null &&
          p[4].value != null &&
          p[5].value != null &&
          p[6].value != null &&
          p[7].value != null &&
          p[8].value != null &&
          this.state.status == null
        ) {
          Message("tie");
        }
      }, 600);
    };
    const Close = () => {
      this.props.navigate("/menu");
    };
    const handleClick = (e) => {
      Player(e);
    };

    return (
      <div className="row">
        <div className="col offset-m1 offset-s1 back-i-t">
          <Link to={"/menu"}>
            <i class="large back-icon">arrow_back</i>
          </Link>
        </div>
        <div class="col offset-m9 offset-s7 chip-box-t">
          <div className="chip">
            <img
              src={require("./media/" + this.props.user.avatar + ".png")}
            ></img>
            {this.props.user.name}
          </div>
        </div>
        <div className="container-t">
          <div className="t-page" ref={this.ele11}>
            <div className="col m4 s4 t-box center-align">
              <button
                onClick={handleClick}
                id={1}
                ref={this.ele1}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align">
              <button
                onClick={handleClick}
                id={2}
                ref={this.ele2}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align border-r">
              <button
                onClick={handleClick}
                id={3}
                ref={this.ele3}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align">
              <button
                onClick={handleClick}
                id={4}
                ref={this.ele4}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align">
              <button
                onClick={handleClick}
                id={5}
                ref={this.ele5}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align border-r">
              <button
                onClick={handleClick}
                id={6}
                ref={this.ele6}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align border-b">
              <button
                onClick={handleClick}
                id={7}
                ref={this.ele7}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align border-b">
              <button
                onClick={handleClick}
                id={8}
                ref={this.ele8}
                className="btn-t"
              ></button>
            </div>
            <div className="col m4 s4 t-box center-align border-r border-b">
              <button
                onClick={handleClick}
                id={9}
                ref={this.ele9}
                className="btn-t"
              ></button>
            </div>
          </div>
          <div
            className="col m10 s12 hide-message center-align"
            id="message-t"
            ref={this.ele10}
          >
            <i className="material-icons message-close-t" onClick={Close}>
              close
            </i>
            <i className="material-icons message-i-t" ref={this.ele13}>
              {this.state.icon}
            </i>
            <img src={gameover}></img>
            <p className="message-p-t" ref={this.ele12}>
              You {this.state.status}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.users };
}

const mapDispatchToProps = (dispatch) => {
  return {
    SendInfo: (e) => {
      dispatch({
        id: e.id,
        type: "ADD_USER",
        name: e.name,
        avatar: e.avatar,
        wins: e.wins,
        ties: e.ties,
        losses: e.losses,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Hooks(Game));
