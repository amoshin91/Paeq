import React, { Component } from 'react'
import '../styles/PostCard.css'

class BeforeCard extends Component {

  setComment = () => {
    return this.props.comments.map(comment => <li>{comment.content}</li>)
  }


  render() {
    console.log(this.setComment());
    console.log('card', this.props);
    return (
      <div className="cup-post">
        <img src="http://www.quickmeme.com/img/c8/c8c86216cac46f9446811872b084b5a062c1f0ff61a2d2d4b185537fe7e10005.jpg" alt="1" />

        <ul>
          {this.setComment()}
        </ul>
        <form className="post-form">
          <input type="text" value="Add a Comment"/>
        </form>
      </div>
    )
  }
}
// <img src={this.props.post.photoUrl} alt={this.props.post.id}/>

export default BeforeCard
