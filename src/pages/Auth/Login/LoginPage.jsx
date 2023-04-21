import React, { useState } from "react";
import styles from "./LoginForm.module.css";
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
    const filteredUsers = Users.filter((user) => {
      return (
        user.username.toString() === username.toString() &&
        user.password.toString() === password.toString()
      );
    });
    if (filteredUsers.length > 0) {
      alert("Login success");
    } else {
      alert("Invalid credentials");
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              placeholder="Password"
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
