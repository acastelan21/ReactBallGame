import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import GameButton from "../../components/GamesButton";
import "./games.css";



class Games extends Component{
    constructor(props){
        super(props);
        this.state ={
            games:[],
            isThereGames: false
        }
        this.handleGameClick=this.handleGameClick.bind(this);
        
    }
    componentWillMount(){
        this.handleSearchGames()
    }
    handleSearchGames = ()=>{
        
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
    handleGameClick= (event)=>{
            
            const gameId = event.target.id;
            console.log(this.state.games);
            //window.location.href="https://evening-depths-72793.herokuapp.com/bets/" + gameId;
           window.location.href="http://localhost:3000/bets/" + gameId;
            console.log("this in handlegameclick");
        
    }


    render(){
        const loggedIn = this.props.auth.isAuthenticated(); 
        return(
            
            <div className="gamesComp">
                <NavBar/>
                <div className="row">
                <div className="col-12">
                <h2><u>Games Today</u></h2>
                </div>
                </div>
                {(loggedIn)? (
                <div> 
                
                <div className="row">
                {this.state.games.map(games =>(

                    <GameButton
                    _id={games.id}
                    key={games.id}
                    awayTeam={games.away.name}
                    homeTeam={games.home.name}
                    handleGameClick={this.handleGameClick}
                    />
                ))}
                
                </div>
                </div>
            ): (<div> You do not have access </div>)}
                
            


            </div>//games comp
        )
    }
}
export default Games;





