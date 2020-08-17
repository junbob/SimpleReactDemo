import React, { Suspense } from "react";
import "./App.css";
import TodoPage from "./Todo";

import { Route, Switch } from "react-router-dom";
import HomePage from "./Home";
import TodoDetail from "./TodoDetail";
// import AboutPage from "./About";
// import NavBar from "./NavBar";
const AboutPage = React.lazy(() => import("./About"));
const NavBar = React.lazy(() => import("./NavBar"));

function App(props) {
  // const abc = TodoPage();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/todo/:id" component={TodoDetail} />
          <Route path="/todo" component={TodoPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
