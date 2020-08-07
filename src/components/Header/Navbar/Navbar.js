import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>
        COVID-<span>19</span>
      </h1>
      <ul>
        <a href="#">
          <li>Stats</li>
        </a>
        <a href="#">
          <li>How To Protect</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>FAQ</li>
        </a>
      </ul>
    </nav>
  );
}
