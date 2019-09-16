import React from "react";
import Nav from "./components/Nav/Nav";
import Front from "./pages/Front/Front";
import Tos from "./pages/Etc/Tos";
import Privacy from "./pages/Etc/Privacy";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/tos" component={Tos} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/" component={Front} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
