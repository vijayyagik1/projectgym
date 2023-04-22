import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./RegistrationPage.module.css";

function Registration() {
  let initialValues;
  if (localStorage.getItem("user") === null) {
    initialValues = [];
  } else {
    initialValues = JSON.parse(localStorage.getItem("user"));
  }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("user")) || [];
    let isEmailRegistered = false;
    let isUsernameTaken = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        isEmailRegistered = true;
        break;
      }
      if (users[i].username === username) {
        isUsernameTaken = true;
        break;
      }
    }

    if (isEmailRegistered) {
      alert("Email already registered");
    } else if (isUsernameTaken) {
      alert("Username already taken");
    } else {
      addingUser(email, username, password);
    }
  };

  const addingUser = (email, username, password) => {
    const newUser = {
      email: email,
      username: username,
      password: password,
    };

    setUserData([...userData, newUser]);
    setUsername("");
    setEmail("");
    setPassword("");
    alert("registered successfully");
    window.location.assign("/login");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
  }, [userData]);

  return (
    <>
      <div className={styles.regbg}>
        <div className={styles.maincontentreg}>
          <h1 style={{ color: "white" }}>Register Here</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formlogin}>
              Email{" "}
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            <div className={styles.formlogin}>
              UserName
              <input
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                required
                pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className={styles.formlogin}>
              Password
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,20}$"
              />
            </div>

            <div>
              <div>
                <button type="submit" className={styles.regbtn}>
                  Register
                </button>
              </div>
              <p>
                Already have an account?
                <NavLink exact to="/login" className="navlogo">
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
