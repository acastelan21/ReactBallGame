import React, {Component} from "react"; 
import NavBar from "../components/NavBar";





class LogIn extends Component{
    
    render(){
        
        return(
            <div className="logInComp">
                <NavBar/>
                <div>Login Page</div>
            </div>
        )
    }
}
export default LogIn;