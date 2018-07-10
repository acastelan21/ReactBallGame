import React from "react"; 
import "./gamesButton.css";

const GameButton = props => 
            <div className="col-md-4">
                <button id={props._id} onClick={props.handleGameClick} className="eachGame" href="/bets"> {props.homeTeam} vs. {props.awayTeam} </button>
            </div>

export default GameButton ;
