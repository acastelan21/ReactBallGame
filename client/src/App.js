import React, { Component } from 'react';
import history from "./history";
import './App.css';
import {Router, Route} from "react-router-dom"; 
import LogIn from "./pages/login";
import Members from "./pages/members";
import Games from "./pages/games"; 
import Leaderboard from "./pages/leaderboard";
import Auth from "./auth/Auth.js";
import Callback from "./pages/callback";
import axios from "axios";
import Wrapper from "./components/Wrapper"


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
    const { isAuthenticated } = auth; 
    return (
      <Wrapper>
        <Router history={history}>
          <div>
            <div><button onClick={this.getGetRequest}>
              GET TEST</button></div>
            <div>
              {
                isAuthenticated() ? 
                (
                  <div>
                    Logged In <button onClick={() => auth.logout()}>Log Out</button>
                  </div> 
                ) :
                ( <div>
                    Logged Out <button onClick={() => auth.login()}>Log In</button>
                  </div> ) 
              }
            </div>

          {/* Routing for pages */}
          <Route path="/login" render={(props) => <LogIn auth={auth} {...props} />} />
          <Route path="/members" render={(props) => <Members auth={auth} {...props} />} />
          <Route exact path="/games" render={(props) => <Games auth={auth} {...props} />} />
          <Route path="/leaderboard" render={(props) => <Leaderboard auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
            
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
