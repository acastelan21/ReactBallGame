import React, {Component} from "react";
import "./navBar.css";
import stadiumPic from "../../assets/images/stadium.png";
import User from "../User";
import Auth from "../../auth/Auth";
const auth = new Auth();
class NavBar extends Component {
    
    render(){
        const { isAuthenticated } = auth;
        return(

       
<div className="NavBar">
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            <img src={stadiumPic} width="30" height="30" className="d-inline-block align-top" alt="logo placeholder"/> Ball Game!
        </a>
        <ul className="nav navbar-dark bg-dark justify-content-end">
        <li className="nav-item">
                <a className="nav-link" href="/Members"><User/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/games">Games</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/leaderboard">Leaderboard</a>
            </li>
            {(isAuthenticated)?(
            <li className="nav-item">
                <a className="nav-link" href="/">Log Out</a>
            </li>):(
                <li className="nav-item">
                <a className="nav-link" onClick={() => auth.logout()}>Login</a>
            </li>
            )}
            
        </ul>


    </nav>






</div>
); 

}
}
export default NavBar;