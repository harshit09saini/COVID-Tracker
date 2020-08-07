import React, { useState, useEffect } from "react";
import { FetchAllTimeData } from "../../api";
import { Bar, Line } from "react-chartjs-2";
import styles from "./Graph.module.css";

export default function Graph(props) {
  const { country, slug } = props;
  const [AllTimeData, setAllTimeData] = useState([]);
  const { Confirmed, Recovered, Deaths } = AllTimeData;
  useEffect(() => {
    async function requestAllTimeData() {
      setAllTimeData(await FetchAllTimeData(slug));
    }
    requestAllTimeData();
  }, [country, slug]);

  // CONFIRMED CHART DATA
  if (Confirmed) {
    const DateString = Confirmed.map(({ Date }) => Date);
    const DatesConfirmed = DateString.map((date) => {
      const d = new Date(date);
      return d.toLocaleDateString();
    });

    var LineChartConfirmed = (
      <Line
        data={{
          labels: DatesConfirmed,
          datasets: [
            {
              data: Confirmed ? Confirmed.map(({ Cases }) => Cases) : null,
              label: "Confirmed",
              backgroundColor: "#ECDD7B",
              borderColor: "rgba(0,0,0,0.5)",
              borderWidth: 1,
              showLine: true,
              fill: true,
            },
          ],
        }}
      />
    );
  }
  // RECOVERED CHART DATA
  if (Recovered) {
    const DateString = Recovered.map(({ Date }) => Date);
    const DatesRecovered = DateString.map((date) => {
      const d = new Date(date);
      return d.toLocaleDateString();
    });

    var LineChartRecovered = (
      <Line
        data={{
          labels: DatesRecovered,
          datasets: [
            {
              data: Recovered ? Recovered.map(({ Cases }) => Cases) : null,
              label: "Recovered",
              backgroundColor: "#CDE7BE",
              borderColor: "rgba(0,0,0,0.5)",
              borderWidth: 1,
              showLine: true,
              fill: true,
            },
          ],
        }}
      />
    );
  }
  // DEATH CHART DATA
  if (Deaths) {
    const DateString = Deaths.map(({ Date }) => Date);
    const DatesDeaths = DateString.map((date) => {
      const d = new Date(date);
      return d.toLocaleDateString();
    });

    var LineChartDeaths = (
      <Line
        data={{
          labels: DatesDeaths,
          datasets: [
            {
              data: Deaths ? Deaths.map(({ Cases }) => Cases) : null,
              label: "Deaths",
              backgroundColor: "#BE3C3F",
              borderColor: "rgba(0,0,0,0.5)",
              borderWidth: 1,
              showLine: true,
              fill: true,
            },
          ],
        }}
      />
    );
  }

  return (
    <div className={styles.chartsContainer}>
      {country ? (
        <div className={styles.charts}>
          <div className={styles.chart}>
            <h1>Total Confirmed Cases in {country}</h1>
            <div>{LineChartConfirmed}</div>
          </div>
          <div className={styles.chart}>
            <h1>Total Recovered Cases in {country}</h1>
            <div>{LineChartRecovered}</div>
          </div>
          <div className={styles.chart}>
            <h1>Total Deaths in {country}</h1>
            <div>{LineChartDeaths}</div>
          </div>
        </div>
      ) : (
        <h2>Please Select A Country</h2>
      )}
    </div>
  );
}
