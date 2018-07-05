import React, {Component} from "react"; 
import "./bets.css"; 
import NavBar from "../../components/NavBar";
class Bets extends Component{ 


render(){

    return (
        <div className="BetsComp">
            <NavBar/> 
            <div>
            Bets Page
            </div> 
        </div>
    )
}


}
export default Bets