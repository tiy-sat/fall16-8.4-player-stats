import React from 'react'
import { ajax, post } from 'jquery'
import { sortBy } from 'underscore'
import Player from './Player'

export default React.createClass({
  getInitialState(){
    return {
      teamArray: [

      ]
    }
  },
  componentWillMount(){
    // https://api.fantasydata.net/v3/nfl/stats/{format}/Player/{playerid}
    // e55a134edd44411c94b3a17fb2dcb963  => key
    ajax({
      url: "https://api.fantasydata.net/v3/nfl/stats/JSON/Players/SEA",
      beforeSend: (xhrObj)=>{
          // Request headers
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","e55a134edd44411c94b3a17fb2dcb963");
      },
      success: (team)=>{
        let sortedTeamByExperience = sortBy(team, "Experience");
        this.setState({
          teamArray: sortedTeamByExperience
        })
      }
    })
  },
  render(){
    // We use the keyword `return` to hook into the "lifecycle"
    //   and return JSX (which means we wrap our components/elements in parens)
    return(
      <section>
        { this.state.teamArray.map((playerJSON, i)=>{
            if(playerJSON.PhotoUrl != "http://static.fantasydata.com/headshots/nfl/low-res/0.png"){
              return <Player key={i} playerData={playerJSON} />
            }
          })
        }
      </section>
    )
  }
})
