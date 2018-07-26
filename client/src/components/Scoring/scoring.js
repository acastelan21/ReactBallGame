import React, { Component } from 'react';
import API from "../../utils/API";

class scoring extends Component {
    constructor(props) {
      super(props)
      this.state = {
         dataInfo:[],
         
      }

    }
    componentWillMount(){
        API.searchForAnswers().then((response)=>{
            console.log("response for search for answers", response)
            this.setState({dataInfo: response.data})
            this.searchBoxScore(response.data); 

        })
    }
    searchBoxScore = (recInfo)=> {
        console.log("rec info in search box score", recInfo.length)

        for(let k= 0; k < recInfo.length; k ++){
            console.log("rec info in search box score" , recInfo)
            console.log("gameanswers in for", recInfo[k].gamesAnswers)
            for(let i = 0; i <recInfo[k].gamesAnswers.GamesBetted.length;i++ ){
                console.log("game id in search box score before sending to API", recInfo[k].gamesAnswers.GamesBetted[i].gameId)
                API.searchGameBoxScore(recInfo[k].gamesAnswers.GamesBetted[i].gameId).then((response)=>{
                    console.log("response for search for game score", response);
                    console.log("number of i", i); 
                    if(response.data.game.status === "closed"){
        
                       this.calculation(recInfo, response, i, k)
                    }
                })
            }
       
        }
        
    }
    calculation = (recInfo, response, i, k) => {
        console.log("response in calc", response)
        API.searchPitchMetrics(response.data.game.id).then((response2)=>{
            console.log("response 2 in calc", response2);

            const answers = recInfo[k].gamesAnswers.GamesBetted[i];
            console.log("answers", answers)
            console.log("response 2", response2)
            console.log("response 1", response)
            let score = 0; 
            

        //============================winning team========================================
        let winningTeam; 
        const homeTeam = response.data.game.home.abbr;
        const awayTeam = response.data.game.away.abbr;

        //get the number of runs for team 
        const awayTeamRuns = response.data.game.away.runs;
        const homeTeamRuns = response.data.game.home.runs;

        if (awayTeamRuns > homeTeamRuns) {
            winningTeam = awayTeam;
        } else {
            winningTeam = homeTeam;
        };
        //============================winning team end========================================

        //============================Pitcher info============================================
        let homePitcher5SOs;
        const stats = response2.data.game.home.players
        for (let j = 0; j < stats.length; j++) {
            const position = response2.data.game.home.players[j].primary_position;



            if (position === "SP") {
                homePitcher5SOs = response2.data.game.home.players[j].statistics.pitch_metrics.overall.outs.ktotal;
            } //if
        } //forLoop

        //============================Pitcher info end============================================
         //============================Scoring============================================
        if(answers.a1 === winningTeam){
            
            score += 1;
        }else{
            
        };
        if((answers.a2 ==="yes") && (homePitcher5SOs > 5)){
            score += 1;
        };
        if((answers.a2 === "no") && (homePitcher5SOs < 5)){
            score += 1;
        };
        if(answers.a3 === response.data.game.away.hits) {
            score += 1;
        };
        if ((answers.a4 === "yes") && ( response.data.game.home.runs > 7)) {
            score += 1;
        };
        if ((answers.a4 === "no") && ( response.data.game.home.runs < 7)) {
            score += 1;
        };
        if ((answers.a5 === "yes") && ( response.data.game.away.errors > 2)) {
            score += 1;
        };
        if ((answers.a5 === "no") && ( response.data.game.away.errors < 2)) {
            score += 1;
        };
       
        console.log("username: ",recInfo[k]._id); 
        console.log("score: ", score)
        const userId = recInfo[k]._id;
        const scoreFromDb = recInfo[k].score;
        const numBets = recInfo[k].gamesBettedNum;
        const sendInfo = {score, userId, scoreFromDb, numBets}
         //============================Scoring end============================================
          //============================Post score in db============================================
        API.sendScoreDb(sendInfo).then((response)=>{
            console.log("sending score" , response); 
        })
           //============================Post score in db============================================


        }) //calculation

    }
  render() {
    console.log("this state", this.state)

    return (
      <div>
        Scoring
      </div>
    )
  }
}

export default scoring; 
