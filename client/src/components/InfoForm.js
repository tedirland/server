import React from "react"

function InfoForm() {
  return (
    <div className="field">
      <label className="label">Location</label>
      <div className="control has-icons-left">
        <input className="input" type="text" placeholder="Royal Oak" />
        <span className="icon is-small is-left">
          <i className="fas-map-marker"></i>
        </span>
      </div>
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
