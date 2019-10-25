import React, { useState, useEffect } from "react";
import Front from "./pages/Front/Front";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import category from "./components/category/category";
import Food from "./pages/Food/Food";
import MyContext from "./utils/context";
import { db, auth } from "./utils/firebase";
import { Login, Signup } from "./pages/login/login";
import TopNav from "./components/top-nav/TopNav";

export default function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [loading, setLoading] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setLoading(false);
      if (user) {
        localStorage.setItem("loggedIn", "true");
        setLoggedIn(true);
      } else {
        localStorage.setItem("loggedIn", "false");
        setLoggedIn(false);
      }
    });
  }, []);

  if (loading) {
    return <div>Retrieving your information....</div>;
  }

  if (!loggedIn) {
    return (
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
  }

  return (
    <MyContext.Provider value={{ x: 12 }}>
      <div className="App">
        <TopNav />

        <Switch>
          <Route path="/food" component={Food} />
          <Route path="/" component={Front} />
          <Route path="/korean" component={category} />
        </Switch>
      </div>
    </MyContext.Provider>
  );
}
