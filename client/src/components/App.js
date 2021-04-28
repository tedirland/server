import React, { Component } from "react"
import Header from "./Header"
import Landing from "./Landing"
import About from "./About"
import MyResources from "./MyResources"
import AllResources from "./AllResources"
import CountyResources from "./CountyResources"
import CommunityResources from "./CommunityResources"
import Contact from "./Contact"
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/allresources" component={AllResources} />
            <Route exact path="/myresources" component={MyResources} />
            <Route exact path="/countyresources" component={CountyResources} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/communityresources"
              component={CommunityResources}
            />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
