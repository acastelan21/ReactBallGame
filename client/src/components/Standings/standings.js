import React, {Component} from "react";
import API from "../../utils/API";

class Standings extends Component{

    constructor(){
    super();
    this.state ={
        standingsNLWest:[],
        standingsNLCentral:[],
        standingsNLEast:[],
        standingsALEast:[],
        standingsALCentral:[],
        standingsALWest:[], 

    }
}
handleSearchStandings =(event)=>{
    event.preventDefault();
    API.searchForStandings()
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
        
    })
}
render(){
    return(
        
            
                <div className="sectionName"> Standings
                <button onClick={this.handleSearchStandings} type="submit" className="btn btn-primary">
                Get Standings
                </button>
                <div className="row">
                <div className="col-6">
                <div className="leagueName">National League
                <div className="divisionName">West
                
                {this.state.standingsNLWest.map((standingsNLWest,i) =>(
                <div key={i}>
                
                
                    <div className="StandTeam" > {i + 1+"."}{standingsNLWest.name} W: {standingsNLWest.win} L: {standingsNLWest.loss} GB : {standingsNLWest.games_back}
                    </div>
                    
                </div>
              
                ))}
                </div> 
                <div className="divisionName">Central
                {this.state.standingsNLCentral.map((standingsNLCentral,i) =>(
                <div key={i}>
                
                
                    <div className="StandTeam" > {i + 1+"."}{standingsNLCentral.name} W: {standingsNLCentral.win} L: {standingsNLCentral.loss} GB : {standingsNLCentral.games_back}
                    </div>
                    
                </div>
              
                ))}
                </div>
               
                <div className="divisionName">East
                {this.state.standingsNLEast.map((standingsNLEast,i) =>(
                <div key={i}>
                
                
                    <div className="StandTeam" > {i + 1+"."}{standingsNLEast.name} W: {standingsNLEast.win} L: {standingsNLEast.loss} GB : {standingsNLEast.games_back}
                    </div>
                    
                </div>
              
                ))}
                </div>
                </div> 
                </div>
                <div className="col-6">
                <div className="leagueName">American League 
                <div className="divisionName">West
                {this.state.standingsALWest.map((standingsALWest,i) =>(
                <div key={i}>
                
                
                    <div className="StandTeam" > {i + 1+"."}{standingsALWest.name} W: {standingsALWest.win} L: {standingsALWest.loss} GB : {standingsALWest.games_back}
                    </div>
                    
                </div>
              
                ))}
                </div>
                <div className="divisionName">Central
                {this.state.standingsALCentral.map((standingsALCentral,i) =>(
                <div key={i}>
                
                
                    <div className="StandTeam" > {i + 1+"."}{standingsALCentral.name} W: {standingsALCentral.win} L: {standingsALCentral.loss} GB : {standingsALCentral.games_back}
                    </div>
                    
                </div>
              
                ))}
                </div>
                <div className="divisionName">East
                {this.state.standingsALEast.map((standingsALEast,i) =>(
                <div key={i}>
                
                
                    <div className="StandTeam" > {i + 1+"."}{standingsALEast.name} W: {standingsALEast.win} L: {standingsALEast.loss} GB : {standingsALEast.games_back}
                    </div>
                    
                </div>
              
                ))}
                </div>
                </div> 
                </div>
                </div>
                </div>//standings
                
                    )
                }
            }
export default Standings;
