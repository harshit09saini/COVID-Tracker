import React, { Component } from "react";
import styles from "./App.module.css";
import Card from "./components/Card/Card";
import CountryDropdown from "./components/CountryDropdown/CountryDropdown";
import Graph from "./components/Graph/Graph";
import { fetchTotalData } from "./api";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = { data: {}, country: "" };
  async componentDidMount() {
    const data = await fetchTotalData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const Countrydata = await fetchTotalData(country);

    if (Countrydata) {
      this.setState({ data: Countrydata });
    } else {
      this.setState({
        data: {
          NewConfirmed: "",
          NewDeaths: "",
          NewRecovered: "",
          TotalConfirmed: "Data Not Available",
          TotalDeaths: "Data Not Available",
          TotalRecovered: "Data Not Available",
        },
      });
    }

    this.setState({ country });
  };

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Card data={this.state.data} />
        <CountryDropdown handleCountryChange={this.handleCountryChange} />
        <Graph data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
