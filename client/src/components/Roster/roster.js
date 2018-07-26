import React, {Component} from "react";
import API from "../../utils/API";
import "./roster.css";
class Roster extends Component{
    
    constructor(){
        super();
        this.state={
            regularRoster:[],
            
        }
    }
componentWillMount(){
    this.handleSearchRoster()
}
handleSearchRoster =()=>{
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
        <div className="sectionName">
         <div className="row">
                <div className="col-12">
                <h2><u>Roster</u></h2>
                </div>
                </div>
       
        
        <div className="row">
        <div className="col-12">
        {this.state.regularRoster.map((regularRoster,i)=>(
        <div className="rosterPlayer" key={i}>
        <div><strong>Name:</strong> {regularRoster.first_name} {regularRoster.last_name}</div>
        <div><strong>Position:</strong> {regularRoster.position}</div>
        <div><strong>DOB:</strong>{regularRoster.birthdate}</div>
         
        </div>

        ))}
        <h2><u>Injured Roster</u></h2>
        {injuredRoster.map((injuredRoster,i)=>(
        <div className="injuredPlayer" key={i}>
        <div><strong>Name:</strong> {injuredRoster.first_name} {injuredRoster.last_name}</div>
        <div><strong>Position:</strong> {injuredRoster.position}</div>
        <div><strong>Injury Date:</strong> {injuredRoster.injuries[0].start_date}</div>
        <div><strong>Injury Status:</strong> {injuredRoster.injuries[0].status}</div>
        <div><strong>Injury comment:</strong> {injuredRoster.injuries[0].comment}</div>
        
        
        </div>



        ))}
        </div>
        </div>
        </div> 









    )
}






}

export default Roster;