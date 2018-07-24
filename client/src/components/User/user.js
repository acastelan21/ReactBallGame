import React, { Component } from 'react';
import Auth from "../../auth/Auth";

const auth = new Auth(); 

class User extends Component {
 
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = auth;
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
          });
        } else {
          this.setState({ profile: userProfile });
        }
      }

  render() {
       const {profile} = this.state
      // console.log("profile" , profile)
      // console.log("sub", profile.sub)
      // if (profile.sub){
      //   let split = profile.sub.split("|")
      //   let userId = split[1]
      //  console.log("id", userId)
      // }
      // else{console.log("false")}
      // // 
    return (

      <div className="userComp">
        <div className="profile-area">
        <p>Hello, {profile.name} </p>

        </div>
        
      </div>
    )
  }
}
export default User; 
