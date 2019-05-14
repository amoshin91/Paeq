import React, { Component } from 'react'
import '../styles/About.css'
import '../styles/App.css'

class Project extends Component {
  render() {
    return(
      <content className="block">
        <h3 id="about-title">Project<strong>Mission</strong></h3>



        <div className="about-content flex">
          <p>
            <h3>
              <strong>Finding a solution to the age-old problem:</strong> Who keeps leaving dirty dishes in the sink?
            </h3>
          </p>

          <p>
            <strong>We've all faced it.</strong> You come home from a long day at work, ready to sit back and relax on the couch and tune into some re-runs of Friends. You walk into your apartment in eager anticipation to see Ross complain to Rachel about mundane (yet oddly entertaining) problems. You go to your kitchen to get yourself a nice glass of (insert adult beverage of choice here), only to find a sink full of dirty dishes. You've told you roommates numerous times to just clean them or throw them in the dish-washer. Unfortunately, they think YOU are the dish-washer. You think of the many ways in which you can get away with murder. How bad can it really be? <a href="https://en.wikipedia.org/wiki/Zone_of_Death_(geography)">Isn't there that one area in the mid-west where you can't be prosecuted because of some ancient laws and borders?</a>
            <br/>
            <br/>
            How great would it be if you can solve this issue without having to resort to such drastic measures?
          </p>
        </div>

        <div className="about-content flex">
          <p>
            <h3>
              The<strong>Source</strong>
            </h3>
          </p>
          <p>
            A study in 2018 conducted by the Psychology Department at Brock University, St. Catharines, Ontario, Canada, hypothesized that self-awareness would increase honesty in children.
            <br/>
            <br/>
            <div id="quote">
              It was predicted that inducing self-awareness would encourage children's honesty given that self-awareness increases adherence to social and moral norms. Children aged 3 or 4 years (N = 135) completed a modified temptation resistance paradigm where they were asked to not peek at a toy in the absence of an experimenter. Next, children were randomly assigned to one of three conditions: Self-Awareness, Promise, or Control. When questioned about whether they peeked at the toy, children in the Self-Awareness condition were significantly more likely to tell the truth about peeking compared with those in the Promise condition. There was no significant difference between the Promise and Control conditions.
            </div>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/29274660" id="quote-source">
              (1812 Sir Isaac Brock Way, Psychology Department Brock University)
            </a>
          </p>
        </div>

        <div className="about-content">
          <iframe width="680" height="445" src="https://www.youtube.com/embed/n69jTHs61uc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="about-content flex last">
          <p>
            <h3>
              The<strong>Experiment</strong>
            </h3>
          </p>
          <p>
            <strong>Observation:</strong> Dirty cups are left in the communal kitchen sink
            <br/>
            <br/>
            <strong>Hypothesis:</strong> A well-placed mirror will increase self-awareness and honesty in individuals, thereby reducing the number of dirty cups placed in the sink
            <br/>
            <br/>
            <strong>Experiment:</strong> An observation will be made before and after a mirror is placed in front of the sink. In order to document the number of cups, a camera will be pointed at the sink and take a picture when a cup is detected. The image will then be uploaded to a web app, keeping track of the cups. At the end of each day, the web app will keep track of the number of cups placed before and after the mirror was placed.
          </p>
        </div>
      </content>
    )
  }
}

export default Project
