import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
class Leaderboard extends Component{
    render(){
        return(
            <div className="leaderboardComp">
            <NavBar/>
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
      
      <tr>
        <th scope="row"></th>
        <td>username</td>
        <td>score</td>
      </tr>
      

    
    </tbody>
    
  </table>


</div>
</div>
        )
    }
}
export default Leaderboard;