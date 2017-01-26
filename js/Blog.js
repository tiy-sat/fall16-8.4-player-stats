import React from 'react'
import Article from './Article'

export default React.createClass({
  getInitialState(){
    return {
      articles: [
        {
          title: "The top 37 ways to knock RWD out of the park.",
          description: "Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries.",
          imageSource: "http://johnpolacek.github.io/scrolldeck.js/decks/responsive/img/responsive_web_design.png"
        },
        {
          title: "Second Article",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          imageSource: "http://johnpolacek.github.io/scrolldeck.js/decks/responsive/img/responsive_web_design.png"
        },
        {
          title: "Third Article",
          description: "Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries.",
          imageSource: "http://johnpolacek.github.io/scrolldeck.js/decks/responsive/img/responsive_web_design.png"
        }
      ]
    }
  },
  onSubmit(e){
    e.preventDefault()
    this.setState({
      articles: this.state.articles.concat({
        title: this.refs.title.value,
        description: this.refs.description.value,
        imageSource: this.refs.image.value
      })
    })
  },
  render() {
    return (
    <div>
      <h2>Make a new article</h2>
      <form onSubmit={this.onSubmit}>
        <input name="title"
               placeholder="title of article"
               ref="title" />
        <input name="image"
               placeholder="image source"
               ref="image" />
        <textarea placeholder="description of article"
                  ref="description"></textarea>
        <input type="submit" />
      </form>
      { this.state.articles.map( (article, i)=>{
        return <Article title={article.title}
                        description={article.description}
                        imageSource={article.imageSource}
                        key={i} />
      } ) }
    </div>

    )
  }
})
