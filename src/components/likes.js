import React, { Component } from "react"

class Likes extends Component {
  state={
    likes: 0 
  }

  increaseLikes = () => {
    this.setState({likes: this.state.likes + 1})
  }

  decreaseLikes = () => {
    if (this.state.likes > 0) {
      this.setState({likes: this.state.likes - 1})
    }
  }

  render() {
    return (
      <div>
        <div>likes: {this.state.likes}</div>
        <button onClick={this.increaseLikes}>
         Like
        </button>
        <button onClick={this.decreaseLikes}>
         Dislike
        </button>
      </div>
    )
  }
}


export default Likes
