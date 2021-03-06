import React, { Component } from 'react'

class AfterCard extends Component {

  imgUrl = 'https://s3.us-east-2.amazonaws.com/mod-5-cup-images/' + this.props.content.Key

  postDate = [this.props.content.Key.slice(0, 4), '-', this.props.content.Key.slice(4, 6), '-', this.props.content.Key.slice(6, 8)].join('')

  postTime = [this.props.content.Key.slice(8, 10), ':', this.props.content.Key.slice(10, 12), ':', this.props.content.Key.slice(12, 14)].join('')

  render() {

    return (
      <div className="cup-post">
        <img src={this.imgUrl} alt={this.props.content.Key} />

        <div className="post-info-container">
          <p className="post-date">
            {this.postDate}
          </p>
          <p className="post-time">
            {this.postTime}
          </p>
        </div>

        <ul>

        </ul>
      </div>
    )
  }
}
// <form className="post-form">
// <input type="text" value="Add a Comment"/>
// </form>

export default AfterCard
