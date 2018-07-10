import React, {Component} from "react";
import API from "../../utils/API";

class Roster extends Component{
    
    constructor(){
        super();
        this.state={
            regularRoster:[],
            
        }
    }

handleSearchRoster =(event)=>{
    event.preventDefault();
    API.searchForRoster()
    .then((response)=>{
        console.log("=====================================");
        console.log(response.data);
        console.log("======================================");
        this.setState({
            regularRoster: response.data.players
        })

    })
}
render(){
    let injuredRoster = [];
    for(let j = 0; j <this.state.regularRoster.length;j++){
        if (this.state.regularRoster[j].injuries){injuredRoster.push(this.state.regularRoster[j])}
    }
    console.log(injuredRoster);
    return(
        <div className="sectionName"> Roster
        <button onClick={this.handleSearchRoster} type="submit" className="btn btn-primary">
        Get Roster
        </button>
        <div className="row">
        <div className="col-12">
        {this.state.regularRoster.map((regularRoster,i)=>(
        <div className="rosterPlayer" key={i}>
        Position: {regularRoster.position}, Name: {regularRoster.first_name} {regularRoster.last_name}, DOB: {regularRoster.birthdate}
        </div>

        ))}
        <div>Injured Roster</div>
        {injuredRoster.map((injuredRoster,i)=>(
        <div className="injuredPlayer" key={i}>
        Position: {injuredRoster.position}, Name: {injuredRoster.first_name} {injuredRoster.last_name},
        Injury comment: {injuredRoster.injuries[0].comment}, Injury Status: {injuredRoster.injuries[0].status}, Injury Date: {injuredRoster.injuries[0].start_date}
        </div>



        ))}
        </div>
        </div>
        </div> 









    )
}






}

export default Roster;