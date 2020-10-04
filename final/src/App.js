import React from "react";
import { Switch, Route } from "react-router";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="container-app">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
