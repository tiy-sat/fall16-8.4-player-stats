import React from 'react'

export default React.createClass({
  render(){
    // We use the keyword `return` to hook into the "lifecycle"
    //   and return JSX (which means we wrap our components/elements in parens)
    return(
      <article>
        <h2>Russel Wilson</h2>
        <ul>
          <li>QBR</li>
          <li>ACR</li>
          <li>RYPG</li>
          <li>PYPG</li>
        </ul>
      </article>
    )
  }
})
