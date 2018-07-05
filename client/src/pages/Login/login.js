import React, {Component} from "react"; 
import NavBar from "../../components/NavBar";
import "./login.css";




class LogIn extends Component{
    
    render(){
        
        return(
            <div className="logInComp">
                <NavBar/>
                <div className="container" id="overallContain">
                    <div className="row">
                        <div className="col-12">
                            <div className="jumbotron jumbotron-fluid vertical-center">
                                <h1 className="display-4">Welcome to Ball Game!</h1>
                                <p className="lead">This is website where you can make bets on certain outcomes of MLB games. Games are locked 5 minutes before scheduled start time. </p>
                                <hr className="my-4"/>
                                <a className="btn btn-primary btn-lg" href="/games" role="button">Today's Games</a>
                                <a className="btn btn-primary btn-lg" href="/leaderboard" role="button">Leaderboard</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
export default LogIn;