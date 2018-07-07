import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import Standings from "../../components/Standings";
class Members extends Component{
    constructor(){
        super();
        this.state ={
            standingsNLWest:[{},{},{},{},{}],
            standingsNLCentral:[{}],
            standingsNLEast:[{}],
            standingsALEast:[{}],
            standingsALCentral:[{}],
            standingsALWest:[{}], 
    
        }
        }

    handleSearchStandings =(event)=>{
        event.preventDefault();
        API.SearchForStandings()
        .then((response)=>{
            console.log("=====================================");
            console.log(response.data);
            console.log("======================================");
            
            this.setState({
            standingsNLWest:response.data.league.season.leagues[0].divisions[0].teams,
            
            standingsNLCentral:response.data.league.season.leagues[0].divisions[1].teams,
            standingsNLEast:response.data.league.season.leagues[0].divisions[2].teams,
            standingsALEast:response.data.league.season.leagues[1].divisions[0].teams,
            standingsALCentral:response.data.league.season.leagues[1].divisions[1].teams,
            standingsALWest:response.data.league.season.leagues[1].divisions[2].teams, 
            });
            console.log(this.state.standingsNLWest);
            console.log(this.state.standingsNLCentral);
            console.log(this.state.standingsNLEast);
            console.log(this.state.standingsALEast);
            console.log(this.state.standingsALCentral);
            console.log(this.state.standingsALWest);
        })
    }
    
    render(){
        return(
            <div className="membersComp">
                <NavBar/>
                <div>Members Page</div>
                <div className="row">
                    <div className="col-6">Standings
                    <button onClick={this.handleSearchStandings} type="submit" className="btn btn-primary">
                    Get Standings
                    </button>
                    <Standings
                    standingsNLWestTeam1={this.state.standingsNLWest[0].name}
                    standingsNLWestTeam1W={this.state.standingsNLWest[0].win}
                    standingsNLWestTeam1L={this.state.standingsNLWest[0].loss}
                    standingsNLWestTeam1GB={this.state.standingsNLWest[0].games_back}

                    standingsNLWestTeam2={this.state.standingsNLWest[1].name}
                    standingsNLWestTeam2W={this.state.standingsNLWest[1].win}
                    standingsNLWestTeam2L={this.state.standingsNLWest[1].loss}
                    standingsNLWestTeam2GB={this.state.standingsNLWest[1].games_back}

                    standingsNLWestTeam3={this.state.standingsNLWest[2].name}
                    standingsNLWestTeam3W={this.state.standingsNLWest[2].win}
                    standingsNLWestTeam3L={this.state.standingsNLWest[2].loss}
                    standingsNLWestTeam3GB={this.state.standingsNLWest[2].games_back}

                    standingsNLWestTeam4={this.state.standingsNLWest[3].name}
                    standingsNLWestTeam4W={this.state.standingsNLWest[3].win}
                    standingsNLWestTeam4L={this.state.standingsNLWest[3].loss}
                    standingsNLWestTeam4GB={this.state.standingsNLWest[3].games_back}

                    standingsNLWestTeam5={this.state.standingsNLWest[4].name}
                    standingsNLWestTeam5W={this.state.standingsNLWest[4].win}
                    standingsNLWestTeam5L={this.state.standingsNLWest[4].loss}
                    standingsNLWestTeam5GB={this.state.standingsNLWest[4].games_back}
                    />
                    
                    </div>
                    <div className="col-3">News</div>
                    <div className="col-3">Roster</div>
                    
                </div>
            </div>
        )
    }
}
export default Members;
