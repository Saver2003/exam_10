import React, { Component, Fragment } from 'react';
// import Toolbar from "./components/toolbar/Toolbar";

import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";
import Post from "./containers/Post/Post";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/*<header><Toolbar /></header>*/}
        <main className="container">
          <Switch>
            <Route path="/" exact component={News} />
            <Route path="/post" exact component={Post} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
