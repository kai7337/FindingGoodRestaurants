import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Box from "../../components/box/box";

import "./login.scss";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState(undefined);

  async function tryLogin(ev) {
    ev.preventDefault();
    setErr(undefined);

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      // console.log(err.message);
      // console.log(err.code);
      setErr(err);
    }
  }

  return (
    <div className="Login">
      <Box alpha>
        <h1>Login</h1>
        <Form onSubmit={tryLogin}>
          {err && <div className="errMsg">{err.message}</div>}
          <Form.Label>username</Form.Label>
          <Form.Control
            placeholder="Username"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />

          <Form.Label>password</Form.Label>
          <Form.Control
            placeholder="Password"
            type="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />

          <Button>Login</Button>
          <Button
            type="button"
            onClick={() => {
              auth.signInWithEmailAndPassword("test@test.com", "123123");
            }}
          >
            Test Login
          </Button>
        </Form>
        <Link to="/signup">Don't have an account? sign up!</Link>
      </Box>
    </div>
  );
}

function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState(undefined);

  async function tryLogin(ev) {
    ev.preventDefault();
    setErr(undefined);

    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      // console.log(err.message);
      // console.log(err.code);
      setErr(err);
    }
  }

  return (
    <div className="Login">
      <Box alpha>
        <h1>Signup</h1>
        <Form onSubmit={tryLogin} className="form1">
          {err && <div className="errMsg">{err.message}</div>}

          <Form.Label>username</Form.Label>
          <Form.Control
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            placeholder="Email"
          />
          {/* <input value={email} onChange={ev => setEmail(ev.target.value)} /> */}

          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />

          {/* <label>Your displayname</label>
        <input /> */}

          <Button>Signup</Button>
        </Form>

        <Link to="/login">Already have an account? Log in!</Link>
      </Box>
    </div>
  );
}

export { Login, Signup };
