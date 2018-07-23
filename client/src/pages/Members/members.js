import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import Standings from "../../components/Standings";
import News from "../../components/News";
import Roster from "../../components/Roster";

class Members extends Component{
  
    render(){
        const loggedIn= this.props.auth.isAuthenticated();
        return(
            <div className="membersComp">
                <NavBar/>
                
                <div className="row">
                    <div className="col-12">
                        <div>Members Page</div>
                    </div>
                </div>
                {(loggedIn) ? ( 
                
                <div className="row">
                    <div className="col-5">
                    <Standings/>
                    </div>
                    <div className="col-7">
                    <News/>
                    <Roster/>
                    </div>
                    {/* <div className="col-3">Roster</div> */}
                    
                </div>
                ): (<div>You do not have access</div>)}
               


            </div> // members comp
        )
    }
}
export default Members;