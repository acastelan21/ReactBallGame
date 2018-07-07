import React from "react";

const Standings = props => 
    <div className="row">
        <div className="col-6">
            <div className="leagueName">National League
                <div className="divisionName">West
                    <div className="StandTeam">1.{props.standingsNLWestTeam1} W: {props.standingsNLWestTeam1W} L: {props.standingsNLWestTeam1L} GB: {props.standingsNLWestTeam1GB}</div>
                    <div className="StandTeam">2.{props.standingsNLWestTeam2} W: {props.standingsNLWestTeam2W} L: {props.standingsNLWestTeam2L} GB: {props.standingsNLWestTeam2GB}</div>
                    <div className="StandTeam">3.{props.standingsNLWestTeam3} W: {props.standingsNLWestTeam3W} L: {props.standingsNLWestTeam3L} GB: {props.standingsNLWestTeam3GB}</div>
                    <div className="StandTeam">4.{props.standingsNLWestTeam4} W: {props.standingsNLWestTeam4W} L: {props.standingsNLWestTeam4L} GB: {props.standingsNLWestTeam4GB}</div>
                    <div className="StandTeam">5.{props.standingsNLWestTeam5} W: {props.standingsNLWestTeam5W} L: {props.standingsNLWestTeam5L} GB: {props.standingsNLWestTeam5GB}</div>
                    
                </div>
                <div className="divisionName">Central
                    <div className="StandTeam">1.</div>
                    <div className="StandTeam">2.</div>
                    <div className="StandTeam">3.</div>
                    <div className="StandTeam">4.</div>
                    <div className="StandTeam">5.</div>
                </div> 
                <div className="divisionName">East
                    <div className="StandTeam">1.</div>
                    <div className="StandTeam">2.</div>
                    <div className="StandTeam">3.</div>
                    <div className="StandTeam">4.</div>
                    <div className="StandTeam">5.</div>
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className ="leagueName">American League
                <div className="divisionName">West
                    <div className="StandTeam">1.</div>
                    <div className="StandTeam">2.</div>
                    <div className="StandTeam">3.</div>
                    <div className="StandTeam">4.</div>
                    <div className="StandTeam">5.</div>
                </div>
                <div className="divisionName">Central
                    <div className="StandTeam">1.</div>
                    <div className="StandTeam">2.</div>
                    <div className="StandTeam">3.</div>
                    <div className="StandTeam">4.</div>
                    <div className="StandTeam">5.</div>
                </div> 
                <div className="divisionName">East
                    <div className="StandTeam">1.</div>
                    <div className="StandTeam">2.</div>
                    <div className="StandTeam">3.</div>
                    <div className="StandTeam">4.</div>
                    <div className="StandTeam">5.</div>
                </div>
            </div>
        </div>
    </div> //row
export default Standings;
