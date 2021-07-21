import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { makeVar } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";
import { Grid, Loader } from "@atomic/ui";

const GET_USER_RIGHTS = gql`
  query {
    userAuthorities {
      roles {
        id
        name
        code
      }
      rights {
        name
      }
    }
  }
`;

function App() {
  console.log("APPLICATION");

  const { loading, error, data } = useQuery(GET_USER_RIGHTS);

  if (loading) {
    return (
      <Grid rowAlign="center" colAlign="center">
        <Loader size="xl" />
      </Grid>
    );
  }

  if (error) {
    console.log(error);
    return <span>Error</span>;
  }

  console.log(data);

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
