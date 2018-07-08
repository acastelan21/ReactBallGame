import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import Standings from "../../components/Standings";
import News from "../../components/News";
import Roster from "../../components/Roster";
class Members extends Component{
  
    render(){
        return(
            <div className="membersComp">
                <NavBar/>
                <div className="row">
                    <div className="col-12">
                        <div>Members Page</div>
                    </div>
                </div>
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
            </div>
        )
    }
}
export default Members;