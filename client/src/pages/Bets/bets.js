import React, {Component} from "react"; 
import API from "../../utils/API"
import QuickTeamStats from "../../components/QuickTeamStats";
class Bets extends Component{

constructor(){
    super();
    this.state={
        gameInfo:[],
        homeTeamInfo:[],
        awayTeamInfo:[],
        homeTeamProbablePitcher:[],
        awayTeamProbablePitcher:[]
    }
}
componentWillMount(){
    API.searchForGameInfo()
    .then((response)=>{
        this.setState({
            gameInfo: response.data.game,
            homeTeamInfo: response.data.game.home,
            awayTeamInfo: response.data.game.away,
            
            homeTeamProbablePitcher: response.data.game.home.probable_pitcher,
            awayTeamProbablePitcher: response.data.game.away.probable_pitcher,

        })
        console.log(this.state.gameInfo)
    })
}

    
    



render (){
  console.log(this.state.homeTeamProbablePitcher);
return(
    <div className="bets">
    <QuickTeamStats 
    //Home Team
    homeTeamName={this.state.homeTeamInfo.name}
    homeTeamWin ={this.state.homeTeamInfo.win} 
    homeTeamLosses={this.state.homeTeamInfo.loss}
    homeTeamProbablePitcherFirstName={this.state.homeTeamProbablePitcher.first_name }
    homeTeamProbablePitcherLastName={this.state.homeTeamProbablePitcher.last_name}
    homeTeamProbablePitcherWins={this.state.homeTeamProbablePitcher.win}
    homeTeamProbablePitcherLosses={this.state.homeTeamProbablePitcher.loss}
    homeTeamProbablePitcherEra={this.state.homeTeamProbablePitcher.era}
    //away team
    awayTeamName={this.state.awayTeamInfo.name}
    awayTeamWin ={this.state.awayTeamInfo.win} 
    awayTeamLosses={this.state.awayTeamInfo.loss}
    awayTeamProbablePitcherFirstName={this.state.awayTeamProbablePitcher.first_name }
    awayTeamProbablePitcherLastName={this.state.awayTeamProbablePitcher.last_name}
    awayTeamProbablePitcherWins={this.state.awayTeamProbablePitcher.win}
    awayTeamProbablePitcherLosses={this.state.awayTeamProbablePitcher.loss}
    awayTeamProbablePitcherEra={this.state.awayTeamProbablePitcher.era}
    />
    </div>

)
}
}

export default Bets;

