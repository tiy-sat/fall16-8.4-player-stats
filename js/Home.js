import React from 'react'

export default React.createClass({
  render(){
    return(
      <section>
        <h1>Search for stats</h1>
        <form>
          <input name="playerName"
                 placeholder="player name"
                 type="text"/>
          <input type="submit"/>
        </form>
      </section>
    )
  }
})
