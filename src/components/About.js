import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="row">
      <div className="col offset-m1 offset-s1 back-i">
        <Link to={"/menu"}>
          <i class="large back-icon">arrow_back</i>
        </Link>
      </div>
      <div className="container">
        <div className="col m12 s12 aboutpage">
          <input
            className="tab-input"
            id="tab1"
            type="radio"
            name="tabs"
            defaultChecked
          ></input>
          <label className="tab-label" for="tab1">
            History
          </label>

          <input
            className="tab-input"
            id="tab2"
            type="radio"
            name="tabs"
          ></input>
          <label className="tab-label" for="tab2">
            Gameplay
          </label>

          <input
            className="tab-input"
            id="tab3"
            type="radio"
            name="tabs"
          ></input>
          <label className="tab-label" for="tab3">
            Producer
          </label>

          <section id="content1">
            <p>
              Games played on three-in-a-row boards can be traced back to
              ancient Egypt, where such game boards have been found on roofing
              tiles dating from around 1300 BC. An early variation of
              tic-tac-toe was played in the Roman Empire, around the first
              century BC. It was called terni lapilli and instead of having any
              number of pieces, each player had only three; thus, they had to
              move them around to empty spaces to keep playing. The game's grid
              markings have been found chalked all over Rome. The first print
              reference to "noughts and crosses", the British name, appeared in
              1858, in an issue of Notes and Queries. The first print reference
              to a game called "tick-tack-toe" occurred in 1884.
            </p>
          </section>

          <section id="content2">
            <p>
              1. The game is played on a grid that's 3 squares by 3 squares.
              <br></br>
              <br></br>
              2. You are X, your friend (or the computer in this case) is O.
              Players take turns putting their marks in empty squares.<br></br>
              <br></br>
              3. The first player to get 3 of his/her marks in a row (up, down,
              across, or diagonally) is the winner.<br></br>
              <br></br>
              4. When all 9 squares are full, the game is over. If no player has
              three marks in a row, the game ends in a tie.
            </p>
          </section>

          <section id="content3">
            <p className="center-align">
              Mahdi Masihipour<br></br>
              <br></br>
              github: mahdimasih05<br></br>
              <br></br>
              email-address: mahdimasihipour@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default React.memo(About);
