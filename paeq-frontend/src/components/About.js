import React, { Component } from 'react'
import '../styles/About.css'
import '../styles/App.css'

class Project extends Component {
  render() {
    return(
      <content className="block">
        <h3 id="about-title"><strong>About</strong>The<strong>Project</strong></h3>

        <div id="about-content" className="flex">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque ligula a leo tempor pellentesque. Donec at neque dignissim, pulvinar diam nec, iaculis felis. Fusce molestie sit amet nisi id scelerisque. Mauris auctor sed lectus id auctor. Pellentesque consequat, risus eu eleifend convallis, turpis elit tincidunt magna, porttitor eleifend eros dui eget tortor. Fusce ac aliquam quam, ut sagittis sem. Maecenas egestas placerat quam, ac tristique leo molestie et. Sed varius consequat elit id vehicula. Vestibulum ac urna at odio blandit ultricies. Vivamus quis malesuada nibh, a mollis odio. Etiam ut nulla ac justo cursus commodo. Nullam sodales, ligula vel egestas malesuada, leo dui luctus lacus, quis venenatis ligula velit eleifend nunc. Curabitur tortor neque, auctor eget feugiat sit amet, consectetur quis nisi. In non mauris cursus dui lobortis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sodales mauris id neque efficitur, at varius tortor volutpat.
          </p>
          <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut blandit tempor tortor, vel fringilla purus bibendum nec. Ut lorem tellus, convallis quis tortor a, pulvinar suscipit tellus. Ut venenatis diam tortor. Vivamus auctor erat dignissim, accumsan massa vel, suscipit libero. In id felis tincidunt, tempus lacus at, vulputate urna. Maecenas vitae varius justo, vitae lacinia odio. Nulla facilisi.
          </p>
        </div>
      </content>
    )
  }
}

export default Project
