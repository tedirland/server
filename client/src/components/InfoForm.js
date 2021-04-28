import React from "react"
import { Link } from "react-router-dom"

function InfoForm() {
  return (
    <div className="field">
      <label>
        <strong>Your Sustainibility Information</strong>
      </label>
      <div className="control">
        <input className="input" type="text" placeholder="City" />
      </div>
      <div className="control">
        <input className="input" type="text" placeholder="Utility Provider" />
      </div>
      <div className="control">
        <input className="input" type="text" placeholder="Employer" />
      </div>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Grocery Store You Shop At"
        />
      </div>
      <div className="control">
        <input className="input" type="text" placeholder="Bank you use" />
      </div>
      <Link className="button is-primary" to="/myresources">
        Submit
      </Link>
    </div>

    //     <div class="field">
    //   <label class="label">Username</label>
    //   <div class="control has-icons-left has-icons-right">
    //     <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    //     <span class="icon is-small is-left">
    //       <i class="fas fa-user"></i>
    //     </span>
    //     <span class="icon is-small is-right">
    //       <i class="fas fa-check"></i>
    //     </span>
    //     </div>
  )
}

export default InfoForm
