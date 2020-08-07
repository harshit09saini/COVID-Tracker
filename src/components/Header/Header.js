import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className={styles.header}>
        <div className={styles.info}>
          <h3>Coronavirus</h3>
          <h1>
            COVID-<span>19</span>
          </h1>
          <p>
            The Coronavirus COVID-19 was first reported in Wuhan, Hubei, China
            in December 2019.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonPrimary}>How To Protect</button>
          <button className={styles.buttonSecondary}>About Coronavirus</button>
        </div>
      </div>
    </header>
  );
}
