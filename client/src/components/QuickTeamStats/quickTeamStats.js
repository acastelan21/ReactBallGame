import React from "react"; 
import "./quickTeamStats.css";

const quickTeamStats = props =>
<div className="sectionForGameInfo">
    
    <div className="row">
    <div className="col-12">
        <div className="homeTeamStats" >
       {` Home Team: ${props.homeTeamName}
        Wins: ${props.homeTeamWin} 
        Losses: ${props.homeTeamLosses}
        Probable Pitcher: ${props.homeTeamProbablePitcherFirstName } ${props.homeTeamProbablePitcherLastName}
        Wins: ${props.homeTeamProbablePitcherWins}
        Losses: ${props.homeTeamProbablePitcherLosses}
        ERA: ${props.homeTeamProbablePitcherEra}`}
        </div>
       
        <div className="awayTeamStats" >
        {` Away Team: ${props.awayTeamName}
        Wins: ${props.awayTeamWin} 
        Losses: ${props.awayTeamLosses}
        Probable Pitcher: ${props.awayTeamProbablePitcherFirstName } ${props.awayTeamProbablePitcherLastName}
        Wins: ${props.awayTeamProbablePitcherWins}
        Losses: ${props.awayTeamProbablePitcherLosses}
        ERA: ${props.awayTeamProbablePitcherEra}`}

        </div>
        
    </div>
    </div>
    </div>
export default quickTeamStats; 