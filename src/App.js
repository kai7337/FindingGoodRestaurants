import React, { useState, useEffect } from "react";
import Front from "./pages/Front/Front";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { db, auth } from "./utils/firebase";
import { Login, Signup } from "./pages/login/login";
import TopNav from "./components/top-nav/TopNav";
import Category from "./pages/Category/category";
import EachCat from "./pages/EachCat/eachcats";
import UserContext from "./utils/userContext";

export default function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [loading, setLoading] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  let [admin, setAdmin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        localStorage.setItem("loggedIn", "true");
        let ss = await db
          .collection("users")
          .doc(user.email)
          .get();
        setAdmin(ss.data().admin);
        setLoggedIn(true);
        setLoading(false);
      } else {
        localStorage.setItem("loggedIn", "false");
        setLoggedIn(false);
        setLoading(false);
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
    <div className="App">
      <UserContext.Provider value={admin}>
        <TopNav />
        <Switch>
          <Route path="/food/:catId/:page?" component={EachCat} />
          <Route path="/food" component={Category} />
          <Route path="/" component={Front} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}
