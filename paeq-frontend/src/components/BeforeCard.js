import React, { Component } from 'react'
import '../styles/PostCard.css'

class BeforeCard extends Component {

  render() {
    return (
      <div className="cup-post">
        <img src={this.props.post.img} alt={this.props.post.id}/>

        <form className="post-form">
          <input type="text" value="Add a Comment"/>
        </form>
      </div>
    )
  }
}

export default BeforeCard
