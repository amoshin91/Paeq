import React, { Component } from 'react'
import '../styles/Project.css'
import '../styles/App.css'
import BeforeCard from './BeforeCard'
import AfterCard from './AfterCard'
// import '../styles/Project.css'

class Project extends Component {

  state = {
    bucket: [],
    comments: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(bucket => {
        this.setState({
          bucket: bucket.ListBucketResult.Contents
        })
      })
    fetch('http://localhost:3000/comments')
      .then(res => res.json())
      .then(comments => {
        this.setState({
          comments
        })
      })
  }

  setBeforePost = () => {
    console.log(this.state.bucket)
    return this.state.bucket.slice(0, 12).map(content => <BeforeCard content={content} key={content.Key}/>)
  }

  setAfterPost = () => {
    return this.state.bucket.slice(13).map(content => <AfterCard content={content} key={content.Key}/>)
  }
// <BeforeCard contents={this.state.contents}/>


  // setAfterPost = () => {
  //   return this.state.posts.map(post => <BeforeCard key={post.id} post={post} comments={this.state.comments}/>)
  // }
  // {this.state.bucket.length > 0 ? this.setBeforePost() : console.log('hi')}

  render() {
    return(
      <content className="flex">
        <div id="content-left">
          <h3 className="content-title" id="content-title-left">
            <strong>Before</strong>Mirror
          </h3>
          <p id="cup-count-left">
            <strong>{this.state.bucket.slice(0, 12).length}</strong>Cups<strong>Detected</strong>
          </p>
          {this.state.bucket.length > 0 ? this.setBeforePost() : null}
        </div>

        <div id="content-right">
          <h3 className="content-title" id="content-title-right">
            <strong>After</strong>Mirror
          </h3>
          <p id="cup-count-right">
            <strong>{this.state.bucket.slice(13).length}</strong>Cups<strong>Detected</strong>
          </p>
          {this.state.bucket.length > 0 ? this.setAfterPost() : null}
        </div>
      </content>
    )
  }
}

export default Project
