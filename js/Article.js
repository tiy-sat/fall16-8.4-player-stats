import React from 'react'

export default React.createClass({
  render(){
    return (
      <article className="article">
        <h2 className="article__title">
          { this.props.title }
        </h2>
        <p className="article__description">
          { this.props.description }
        </p>
        <img alt="Icon representation of responsive web design"
             className="article__image"
             src={ this.props.imageSource } />
           <a className="article__link"
           href="#">
           read more
        </a>
      </article>
    )
  }
})
