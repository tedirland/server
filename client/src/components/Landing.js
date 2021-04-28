import React from "react"
import InfoForm from "./InfoForm"

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
        <br></br>
        <br></br>
        Alternatively, you can go <a href="/resources">here</a> to see the
        resources broken down by county
      </p>
      <hr></hr>
      <div className="column is-two-fifths">
        <InfoForm />
      </div>
    </div>
  )
}

export default Landing
