import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import GameButton from "../../components/GamesButton";




class Games extends Component{
    constructor(props){
        super(props);
        this.state ={
            games:[],
            isThereGames: false
        }
        this.handleGameClick=this.handleGameClick.bind(this);
        
    }
   
    

    handleSearchGames = (event)=>{
        event.preventDefault();
        API.searchForGames()
        .then((response)=>{
            this.setState({isThereGames:true});
            console.log("Are there games left today?: " + this.state.isThereGames)
            this.setState({
            games:response.data.games
            });
            console.log(this.state.games);
            console.log("this is in handle search games")
        });//.then(response)
    }//handle search games
    handleGameClick = (event)=>{
        
        window.location.href="http://localhost:3000/bets/" + this.state.games.id;
        console.log(this.state.games);
        
        console.log("this in handlegameclick");
    }


    render(){
        
        return(
            
            <div className="gamesComp">
                <NavBar/>
                <div>Games Today</div>
                <button onClick={this.handleSearchGames} type="submit" className="btn btn-primary">
                Get Games
                </button>
                <div className="row">
                {this.state.games.map(games =>(

                    <GameButton
                    _id={games.id}
                    key={games.id}
                    awayTeam={games.away.name}
                    homeTeam={games.home.name}
                    handleGameClick={this.handleGameClick.bind(this)}
                    />
                ))}
                </div>
            


            </div>
        )
    }
}
export default Games;
