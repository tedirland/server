import React from "react"
import InfoForm from "./InfoForm"
import { Link } from "react-router-dom"

function Landing() {
  return (
    <div className="content">
      <h1>Welcome To ProjectZeroMI</h1>
      <h3>What Is It?</h3>
      <p>
        A dynamic database for individuals looking for relevant Climate Change
        Information
      </p>
      <h3>How Do I Use It?</h3>
      <p>
        Give us some information below and we'll show you all of the resources
        that are relevant to you.
      </p>
      <hr></hr>
      <div className="column is-two-fifths">
        <InfoForm />
      </div>
      <hr></hr>
      Want To See What We've Already Collected?
      <br></br>
      <br></br>
      <Link className="button is-primary" to="/allresources">
        Browse All Resources
      </Link>
    </div>
  )
}

export default Landing
