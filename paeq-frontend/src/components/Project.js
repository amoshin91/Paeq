import React, { Component } from 'react'
import '../styles/Project.css'
import '../styles/App.css'
import BeforeCard from './BeforeCard'
import AfterCard from './AfterCard'
// import '../styles/Project.css'

class Project extends Component {

  state = {
    posts: [],
    comments: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts
        }, () => console.log(this.state))
      })
    fetch('http://localhost:3000/comments')
      .then(res => res.json())
      .then(comments => {
        this.setState({
          comments
        })
      })
  }

  setPost = () => {
    return this.state.posts.map(post => <BeforeCard key={post.id} post={post} comments={this.state.comments}/>)
  }

  render() {
    return(
      <content className="flex">
        <div id="content-left">
          <h3><strong>Before</strong>Mirror</h3>
          {this.setPost()}
        </div>
        <div id="content-right">
          <h3><strong>After</strong>Mirror</h3>
          <AfterCard />
        </div>
      </content>
    )
  }
}

export default Project
