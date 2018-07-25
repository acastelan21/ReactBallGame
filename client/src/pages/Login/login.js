import React, {Component} from "react"; 
import NavBarLoggedOut from "../../components/NavBarLoggedOut";
import "./login.css";
import Auth from "../../auth/Auth";


const auth =new Auth();


class LogIn extends Component{
    
    render(){
        const { isAuthenticated } = auth; 
        return(
            <div className="logInComp">
                <NavBarLoggedOut/>
                <div className="container" id="overallContain">
                    <div className="row">
                        <div className="col-12">
                            <div className="jumbotron jumbotron-fluid vertical-center">
                                <h1 className="display-4">Welcome to Ball Game!</h1>
                                <p className="lead">This is website where you can make bets on certain outcomes of MLB games. Games are locked 5 minutes before scheduled start time. </p>
                                <hr className="my-4"/>
                                <div>
                                {
                                isAuthenticated() ? 
                                (
                                <div>
                                Logged In <button className="btn btn-primary btn-lg" onClick={() => auth.logout()}>Log Out</button>
                                </div> 
                                ) :
                                ( <div>
                                Logged Out <button className="btn btn-primary btn-lg" onClick={() => auth.login()}>Log In</button>
                                </div> ) 
                                }
                                </div>
                                </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
export default LogIn;



