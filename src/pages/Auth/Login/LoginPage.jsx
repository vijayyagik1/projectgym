import React, { useState } from "react";
// import styles from "./LoginPage.module.css";
import styles from './LoginForm.module.css'
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Buttons/Button";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const navigate = useNavigate();
  const handleClickRegister = () => {
    navigate("/register");
  };

  function handleLogin() {
    const Users = JSON.parse(localStorage.getItem("user")) || [];
    let usernameMatchFound = false;

    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username.toString() === username.toString()) {
        usernameMatchFound = true;
        if (Users[i].password.toString() === password.toString()) {
          alert("Login success");
          return;
        } else {
          alert("Invalid credentials");
          return;
        }
      }
    }

    if (!usernameMatchFound) {
      alert("Invalid username");
    }
  }

  return (
    <div>
      <div className={styles.login}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            UserName:
            <input
              type="text"
              value={username}
              placeholder="UserName"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </label>
          <button className={styles.button} type="submit" onClick={handleLogin}>
            Login
          </button>
          <Button
            onClick={handleClickRegister}
            buttonName="Register"
            className={styles.ress}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
