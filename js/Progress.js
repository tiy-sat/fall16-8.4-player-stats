import React from 'react'

export default React.createClass({
  getDefaultProps(){
    return {
      progress: 0
    }
  },
  render(){
    return(
      <div className="progress">
        <div className="progress__bar"
             style={ { width: this.props.progress+"%" } }>
          <span className="progress__barValue"> { this.props.progress }% </span>
        </div>
      </div>
    )
  }
})
