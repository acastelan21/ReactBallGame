import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import API from "../../utils/API";

class Members extends Component{
    state ={
        standings:[]
    }

    handleSearchStandings =(event)=>{
        event.preventDefault();
        API.SearchForStandings()
        .then((response)=>{
            console.log("=====================================");
            console.log(response.data);
            console.log("======================================");
            
            this.setState({
            standings:response.data.league.season
            });
            console.log(this.state.standings);

        })
    }
    render(){
        return(
            <div className="membersComp">
                <NavBar/>
                <div>Members Page</div>
                <div className="row">
                    <div className="col-4">Standings
                    <button onClick={this.handleSearchStandings} type="submit" className="btn btn-primary">
                    Get Standings
                    </button>
                    </div>
                    <div className="col-4">News</div>
                    <div className="col-4">Roster</div>
                    
                </div>
            </div>
        )
    }
}
export default Members;
