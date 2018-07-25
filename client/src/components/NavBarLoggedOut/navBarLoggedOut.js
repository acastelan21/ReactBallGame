import React, {Component} from "react";

import stadiumPic from "../../assets/images/stadium.png";


 class navBarLoggedOut extends Component {
  render() {
    return (
        <div className="NavBar">
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={stadiumPic} width="30" height="30" className="d-inline-block align-top" alt="logo placeholder"/> Ball Game!
            </a>
            <ul className="nav navbar-dark bg-dark justify-content-end">
            
                <li className="nav-item">
                    <a className="nav-link" href="/games">Games Today</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/leaderboard">Leaderboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/signup">Signup</a>
                </li>
            </ul>
    
    
        </nav>
    
    
    
    
    
    
    </div>
    )
  }
}
export default navBarLoggedOut;