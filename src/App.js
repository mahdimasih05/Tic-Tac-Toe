import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Log_in from "./components/Log_in";
import Main_menu from "./components/Main_menu";
import About from "./components/About";
import Profile from "./components/Profile";
import Game from "./components/Game";
import Log_out from "./components/Log_out";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Log_in />}></Route>
          <Route path="/menu" element={<Main_menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/start" element={<Game />}></Route>
          <Route path="/logout" element={<Log_out />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
