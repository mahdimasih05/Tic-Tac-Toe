import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import boy from "./media/boy.png";
import girl from "./media/girl.png";
import man from "./media/man.png";
import lady from "./media/lady.png";
import Hooks from "../hoc/Hooks";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pl_id: null,
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
      ],
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
    };
    const Computer = () => {
      setTimeout(() => {
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
      }, 500);
    };
    const Checker = () => {
      const p = this.state.parts;
      if (
        p[0].value == p[1].value &&
        p[0].value == p[2].value &&
        p[1].value == p[2].value &&
        p[0].value != null
      ) {
        this.props.navigate("/menu");
      }
      if (
        p[3].value == p[4].value &&
        p[3].value == p[5].value &&
        p[4].value == p[5].value &&
        p[3].value != null
      ) {
        this.props.navigate("/menu");
      }
      if (
        p[6].value == p[7].value &&
        p[6].value == p[8].value &&
        p[7].value == p[8].value &&
        p[6].value != null
      ) {
        this.props.navigate("/menu");
      }
    };
    const handleClick = (e) => {
      Computer();
      Player(e);
      Checker();
    };

    return (
      <div className="row">
        <div className="col offset-m1 offset-s1 back-i-t">
          <Link to={"/menu"}>
            <i class="large back-icon">arrow_back</i>
          </Link>
        </div>
        <div class="col offset-m9 offset-s7 chip-box-t">
          <Link to={"/profile"} state={{ path: this.props.location.pathname }}>
            <div className="chip">
              <img
                src={require("./media/" + this.props.user.avatar + ".png")}
              ></img>
              {this.props.user.name}
            </div>
          </Link>
        </div>
        <div className="container-t">
          <div className="t-page">
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
                ref={this.ele