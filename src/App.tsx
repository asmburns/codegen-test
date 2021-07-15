import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/organization/:id">
            <Landing></Landing>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
