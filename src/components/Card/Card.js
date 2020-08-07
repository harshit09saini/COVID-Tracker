import React from "react";
import styles from "./Card.module.css";
import cx from "classnames";
import CountUp from "react-countup";
import NumberFormat from "react-number-format";

const Card = ({
  data: {
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  },
}) => {
  return (
    <div className={styles.headerInfo}>
      <h1 className={styles.title}>Coronavirus Disease Update</h1>
      <p className={styles.description}>
        This interactive dashboard provides the latest global numbers and
        numbers by country of COVID-19 cases on a daily basis
      </p>
      <div className={styles.cardGrid}>
        <div className={cx(styles.card, styles.infected)}>
          <h1>
            Infected <span>🦠</span>
          </h1>
          <h2>
            <NumberFormat
              value={TotalConfirmed}
              displayType={"text"}
              thousandSeparator={true}
            />
            <small>
              (
              <NumberFormat
                value={NewConfirmed}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"+"}
              />
              )
            </small>
            {/* <CountUp start={0} end={NewConfirmed} duration={2} separator="," /> */}
          </h2>
        </div>
        <div className={cx(styles.card, styles.deaths)}>
          <h1>
            Deaths <span>💀</span>
          </h1>
          <h2>
            <NumberFormat
              value={TotalDeaths}
              displayType={"text"}
              thousandSeparator={true}
            />
            <small>
              (
              <NumberFormat
                value={NewDeaths}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"+"}
              />
              )
            </small>
            {/* <CountUp end={Math.random() * 100000} duration={2} /> */}
          </h2>
        </div>
        <div className={cx(styles.card, styles.recovered)}>
          <h1>Recovered </h1>
          <h2>
            <NumberFormat
              value={TotalRecovered}
              displayType={"text"}
              thousandSeparator={true}
            />
            <small>
              (
              <NumberFormat
                value={NewRecovered}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"+"}
              />
              )
            </small>
            {/* <CountUp end={Math.random() * 100000} duration={2} /> */}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
