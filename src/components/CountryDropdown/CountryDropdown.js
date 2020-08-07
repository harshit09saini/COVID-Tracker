import React, { useState, useEffect } from "react";
import { FetchCountries } from "../../api";
import styles from "./CountryDropdown.module.css";

export default function CountryDropdown({ handleCountryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function requestCountryList() {
      const response = await FetchCountries();
      const CountryList = response.map(({ Country }) => Country);
      const SlugList = response.map(({ Slug }) => Slug);
      setCountries({ CountryList, SlugList });
    }
    requestCountryList();
  }, [setCountries]);

  const { CountryList, SlugList } = countries;

  // if (CountryList) console.log(`${CountryList[108]}, ${SlugList[108]}`);
  return (
    <div className={styles.CountryDropdown}>
      <label htmlFor="Country">
        <select
          id="Country"
          onChange={(e) => {
            const selectedIndex = e.target.options.selectedIndex;

            handleCountryChange(
              e.target.value,
              e.target.options[selectedIndex].getAttribute("data-slug")
            );
          }}
          onBlur={(e) => {
            const selectedIndex = e.target.options.selectedIndex;

            handleCountryChange(
              e.target.value,
              e.target.options[selectedIndex].getAttribute("data-slug")
            );
          }}
        >
          <option>Global</option>
          {CountryList
            ? CountryList.map((country, index) => (
                <option
                  key={country}
                  id={SlugList[index]}
                  data-slug={SlugList[index]}
                  value={country}
                >
                  {country}
                </option>
              ))
            : null}
        </select>
      </label>
    </div>
  );
}
