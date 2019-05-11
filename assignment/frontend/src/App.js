import React, { Component, Fragment } from "react";
import Search from "./Pages/Search"
import Home from "./Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
