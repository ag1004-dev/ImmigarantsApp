import "./config/reactotron";
import React, { Component } from "react";
import { Provider } from "react-redux";
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
