import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import API from "../../utils/API";





class Games extends Component{
    handleSearchGames = (event)=>{
        event.preventDefault();
        API.searchForGames()
        .then((res)=>
        console.log(res))
    }
    render(){
        return(
            <div className="gamesComp">
            <NavBar/>
            <div>Games Today</div>
            <button onClick={this.handleSearchGames}type="submit" className="btn btn-primary">
                Get Games
            </button>


            </div>
        )
    }
}
export default Games;
