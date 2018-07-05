import React, {Component} from "react"; 
import NavBar from "../components/NavBar";

class Games extends Component{
    render(){
        return(
            <div className="gamesComp">
            <NavBar/>
            <div>Games Page</div>
            </div>
        )
    }
}
export default Games;
