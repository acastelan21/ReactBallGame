import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import Standings from "../../components/Standings";
import News from "../../components/News";
import Roster from "../../components/Roster";
import "./members.css";
class Members extends Component{
  
    render(){
        const loggedIn= this.props.auth.isAuthenticated();
        return(
            <div className="membersComp">
            
            {(loggedIn) ? ( 
                <div>
                <NavBar/>
                
                
                
                
                
                <div className="row">
                    <div className="col-3">
                    <Standings/>
                    </div>
                    <div className="col-6">
                    <News/>
                    
                    </div>
                    <div className="col-3">
                    <Roster/>
                    </div>
                    {/* <div className="col-3">Roster</div> */}
                    
                </div>
                </div>
                ): (<div>You do not have access</div>)}
               


            </div> // members comp
        )
    }
}
export default Members;