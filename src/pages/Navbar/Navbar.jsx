import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/home");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <FontAwesomeIcon
              icon={faPersonRunning}
              style={{ color: "white" }}
              onClick={handleLogo}
            />
          </Link>
        </div>
        <ul className={isMenuOpen ? styles.listresponsive : styles.lists}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <button className={styles.btn} onClick={handleLogin}>
            JoinUs
          </button>
        </ul>

        <button className={styles.menutoggle} onClick={handleClick}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </header>
    </div>
  );
};
export default Header;
