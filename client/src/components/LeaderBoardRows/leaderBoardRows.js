import React from 'react'

const leaderBoardRows = (props) => {
  return (
    
      <tr>
             
             <td>{props.rank}</td>
             <td>{props.userName}</td>
             <td>{props.score}</td>
           </tr>
          
   
  )
}

export default leaderBoardRows
