import React from "react"
import "./questions.css"; 

const Questions = props =>
    <div className="sectionForQuestions"> 
        <div className="row">
            <div className="col-12">
                <div className="questions">
                <h3>Questions (Chose Wisely)</h3>
                <form>
                    <div className = "q1">
                        <p>1. Who will win the game?</p>
                            <select name="q1" id="Q1" value={props.value} onChange={props.handleChange}>
                                <option value="null"></option>
                                <option value={props.homeTeamAbbr}>{props.homeTeamAbbr}</option>
                                <option value={props.awayTeamAbbr}>{props.awayTeamAbbr}</option>
                            </select>
                    </div>
                    <div className = "q2">
                        <p>2. Will {props.homeTeamProbablePitcherLastName} have more than 5 strikeouts today?</p>
                            <select name= "q2"id="Q2" value={props.value} onChange={props.handleChange}>
                                <option value="null"></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select> 
                    </div>
                    <div className = "q3">
                        <p>3.How many hits will {props.awayTeamAbbr} </p>
                            <select name="q3"id="Q3" value={props.value} onChange={props.handleChange}>
                                <option value="null"></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                    </div>
                    <div className = "q4">
                        <p>4.Will {props.homeTeamAbbr} score seven or more runs? </p>
                            <select name="q4"id="Q4" value={props.value} onChange={props.handleChange}>
                                <option value="null"></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                    </div>
                    <div className = "q5">
                    <p>5.Will {props.awayTeamAbbr} have more than 2 errors in today's game? </p>
                            <select name="q5" id="Q5" value={props.value} onChange={props.handleChange}>
                                <option value="null"></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                    </div>
    
                
    
                    <button type="submit" onClick ={props.handleBetsSumbit} className="btn btn-primary submit" data-toggle="modal" data-target="#exampleModal">Submit</button>
                </form>
                </div> 
            </div> 
        </div>
    </div> 


export default Questions 
