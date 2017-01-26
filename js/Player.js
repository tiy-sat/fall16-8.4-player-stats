import React from 'react'
import Progress from './Progress'

export default React.createClass({
  getDefaultProps(){
    return {
      playerData: {
        Name: "Default Name",
        Position: "Unknown"
      }
    }
  },
  render(){
    return(
      <article className="player">
        <h2> { this.props.playerData.Name } </h2>
        <img src={ this.props.playerData.PhotoUrl } />
        <ul>
          <li>Position { this.props.playerData.Position }</li>
          <li>
            Experience
            { this.props.playerData.Experience }
            <Progress progress={ parseFloat(this.props.playerData.Experience) * 10 }/>
          </li>
        </ul>
      </article>
    )
  }
})
