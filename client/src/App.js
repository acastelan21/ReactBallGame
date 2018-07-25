import React, { Component } from 'react';
import history from "./history";
import './App.css';
import {Router, Route} from "react-router-dom"; 
import LogIn from "./pages/Login/";
import Members from "./pages/Members";
import Games from "./pages/Games"; 
import Leaderboard from "./pages/Leaderboard";
import Auth from "./auth/Auth.js";
import Callback from "./pages/CallBack";
import axios from "axios";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Bets from "./pages/Bets";

const auth =new Auth();


class App extends Component {
  
  render() {
    
    return (
      <Wrapper>
        <Router history={history}>
        
          <div>
          {/* Routing for pages */}
          <Route exact path="/" render={(props) => <LogIn auth={auth} {...props} />} />
          <Route path="/members" render={(props) => <Members auth={auth} {...props} />} />
          <Route exact path="/games" render={(props) => <Games auth={auth} {...props} />} />
          <Route path="/leaderboard" render={(props) => <Leaderboard auth={auth} {...props} />} />
          <Route path="/bets/:id" render={(props) => <Bets auth={auth}{...props}/>}/>
          <Route path="/callback" render={(props) => {
            auth.handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
            
          </div>
    
        </Router>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
