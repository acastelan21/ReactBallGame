import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"; 
import LogIn from "./pages/login";
import Members from "./pages/members";
import Leaderboard from "./pages/leaderboard";
import Games from "./pages/games"; 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path = "/login" component = {LogIn}/>
        <Route path = "/members" component = {Members}/>
        <Route exact path = "/games" component = {Games}/>
        <Route path = "/leaderboard" component ={Leaderboard}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
