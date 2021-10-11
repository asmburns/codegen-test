import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "@atomic/colors/lib/styles/figma-color-pallet.css";
import "@atomic/typography/lib/styles/fonts.css";
import "./index.css";
import {ApolloClient, ApolloProvider} from "@apollo/client";
import {cache} from "./app/apolloCache";
import {ROUTE_BASENAME} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache,
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router basename={ROUTE_BASENAME}>
                <App/>
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
