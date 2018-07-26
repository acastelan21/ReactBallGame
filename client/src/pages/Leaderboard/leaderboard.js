import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import LeadBoardRows from "../../components/LeaderBoardRows";
import "./leaderboard.css";
class Leaderboard extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       leaderBoardUsers:[]

    }
  }
  componentWillMount(){ 
    API.searchForAnswers().then((response)=>{
      console.log("response", response)
      
      this.setState({leaderBoardUsers:response.data})

    })
  }

    render(){
      const loggedIn = this.props.auth.isAuthenticated(); 
      console.log("state in render", this.state)
     

        return(



    <div className="leaderboardComp">
    <NavBar/>
      <div className="row">
      <div className="col-12">
      <h2><u>Overall Leaderboard</u></h2>
      
      </div>
      </div>
    {(loggedIn)?(
       <div className="container" id="overallContain">
      
       <table className="table table-hover table-dark">
         <thead>
           <tr>
             <th scope="col">Rank</th>
             <th scope="col">User</th>
             <th scope="col">Percent Correct(%)</th>
           </tr>
         </thead>
         
     
          <tbody>
           {this.state.leaderBoardUsers.map( (user,i) => (
             <LeadBoardRows

             key={user.userName}
             rank = {i+1}
             userName= {user.userName}
             score={user.scoreBoardScore}
             gamesBettedNum={user.gamesBettedNum}
             />
             


           ))
          
          }
           
     
         
         </tbody>
         
       </table>
       <p><strong>Disclaimer:</strong> Leaderboard is updated daily. It is based on all games betted on.</p>
     
     
     </div>
    ):(<div>You do not have access</div>)}
   


</div>//leaderboard
        )
    }
}
export default Leaderboard;
