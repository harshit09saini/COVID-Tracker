import axios from "axios";

const apiURL = "https://api.covid19api.com";

export const fetchTotalData = async (selectedCountry) => {
  try {
    if (selectedCountry) {
      const {
        data: { Countries },
      } = await axios.get(`${apiURL}/summary`);
      return Countries.find(({ Country }) => Country === selectedCountry);
    }
    const {
      data: {
        Global: {
          NewConfirmed,
          NewDeaths,
          NewRecovered,
          TotalConfirmed,
          TotalDeaths,
          TotalRecovered,
        },
      },
    } = await axios.get(`${apiURL}/summary`);

    return {
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    };
  } catch (error) {
    console.log(error);
  }
};

export const FetchCountries = async () => {
  try {
    const { data } = await axios.get(`${apiURL}/countries`);
    // const CountryList = data.map(({ Country }) => Country);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const FetchAllTimeData = async (country) => {
  try {
    const { data: confirmedData } = await axios.get(
      `${apiURL}/dayone/country/${country}/status/confirmed`
    );
    const Confirmed = confirmedData.map((data) => ({
      Cases: data.Cases,
      Date: data.Date,
    }));
    const { data: recoveredData } = await axios.get(
      `${apiURL}/dayone/country/${country}/status/recovered`
    );
    const Recovered = recoveredData.map((data) => ({
      Cases: data.Cases,
      Date: data.Date,
    }));
    const { data: deathData } = await axios.get(
      `${apiURL}/dayone/country/${country}/status/deaths`
    );
    const Deaths = deathData.map((data) => ({
      Cases: data.Cases,
      Date: data.Date,
    }));
    const Stats = { Confirmed, Recovered, Deaths };
    return Stats;
  } catch (error) {
    console.log(error);
  }
};
