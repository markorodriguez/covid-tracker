import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import MapView from "./MapView";
import "leaflet/dist/leaflet.css";

function App() {
  const [state, setState] = useState("");
  const [country, setCountry] = useState("Peru");
  const [countryData, setCountryData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // https://disease.sh/v3/covid-19/countries/604?strict=true Example for Peru
  const baseUrl = "https://disease.sh/v3/covid-19/countries/";

  useEffect(() => {
    Axios.get(baseUrl).then((res) => {
      setState(res.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    Axios.get(baseUrl + country).then((res) => {
      setCountryData(res.data);
    });
  }, [country]);

  const nameCountry = (value) => {
    setCountry(value);
  };

  return (
    <div className="general-container">
      <div className="my-navbar">
        <h1>COVID-19 Map</h1>
      </div>

      {isLoading === false ? (
        <MapView chosenCountry={nameCountry} coords={state} />
      ) : (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      <div className="container text-center">
        <h3 style={{margin: '3rem 0'}} >{countryData.country}</h3>
        <table className="table table-borderless table-striped" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem'}}>
          <tbody>
            <tr>
              <th>Cases</th>
              <td>{new Intl.NumberFormat().format(countryData.cases)}</td>
            </tr>
            <tr>
              <th>Recovered</th>
              <td>{new Intl.NumberFormat().format(countryData.recovered)}</td>
            </tr>
            <tr>
              <th>Deaths</th>
              <td>{new Intl.NumberFormat().format(countryData.deaths)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
