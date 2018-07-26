import React, {Component} from "react"; 
import API from "../../utils/API"
import QuickTeamStats from "../../components/QuickTeamStats";
import Questions from "../../components/Questions";
import NavBar from "../../components/NavBar";
import Auth from "../../auth/Auth";

const auth = new Auth(); 
class Bets extends Component{

constructor(props){
    super(props);
    this.state={
        gameInfo:[],
        homeTeamInfo:[],
        awayTeamInfo:[],
        homeTeamProbablePitcher:[],
        awayTeamProbablePitcher:[],
        q1:"",
        q2:"",
        q3:"",
        q4:"",
        q5:"",
    }
    this.handleChange =this.handleChange.bind(this);
}
handleChange(event){
    
    this.setState({[event.target.name]:event.target.value});
    
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
    this.setState({ profile: {} });
        const { userProfile, getProfile } = auth;
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
          });
        } else {
          this.setState({ profile: userProfile });
        }
        
}


handleBetsSumbit = (event)=>{
    event.preventDefault();
    console.log("profile in handle bets", this.state.profile)
    let split = this.state.profile.sub.split("|");
    let userId = split[1]
    const answersKey = {
        _id: userId,
        userName: this.state.profile.nickname,
        favoriteTeam: "White Sox",
        gamesBettedNum: 1, 
        score: 0, 
        scoreBoardScore:0,
        gamesAnswers: {
            GamesBetted: {
            gameId: this.state.gameInfo.id,
            a1:this.state.q1,
            a2:this.state.q2,
            a3:this.state.q3,
            a4:this.state.q4,
            a5:this.state.q5
        }}
        
    }
    console.log("user id", userId);
    console.log ("answers key", answersKey);
    API.searchDB(answersKey).then((response)=>{
        console.log("I found this in DB:",response)
        

    if (response.data === false){
        API.newMember(answersKey).then(console.log("new member added"));
    }
    else{
        API.upDateMember(answersKey).then(console.log("member updated"));
        API.upDateMemberGameCount(response.data[0]).then(console.log("member count update"));
        
    }


   
    
})

    }
 
  
    



render (){
    const loggedIn = this.props.auth.isAuthenticated();
    const {profile} = this.state
    console.log("profile", profile)
    //   console.log("profile" , profile)
    //   console.log("sub", profile.sub)
    //   if (profile.sub){
    //     let split = profile.sub.split("|")
    //     let userId = split[1]
    //    console.log("id", userId)
    //   }
    //   else{console.log("false")}
    
return(
    <div className="betsPage">

   
    <NavBar/>
    <div> Bets Page</div>
    {(loggedIn)?(
        <div>
        
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
        <Questions
        homeTeamAbbr={this.state.homeTeamInfo.abbr}
        awayTeamAbbr={this.state.awayTeamInfo.abbr}
        homeTeamProbablePitcherLastName={this.state.homeTeamProbablePitcher.last_name}
        handleBetsSumbit={this.handleBetsSumbit}
        handleChange = {this.handleChange}
        value ={this.state.value}
        
        
        />
        </div>
    ): (<div> You do not have access </div>)}
    

    </div>

)
}
}



export default Bets;

