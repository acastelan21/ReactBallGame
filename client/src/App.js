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

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
class App extends Component {

getGetRequest(){
  console.log("i am here");
  axios.get("/api/database").then(res => {
    console.log(res); 
  })
}


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
          <Route path="/bets" render={(props) => <Bets auth={auth}{...props}/>}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
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
