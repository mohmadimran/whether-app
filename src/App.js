import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./component/SearchBar";
import Card from "./component/Card";

function App() {
  const [city, searchCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=4d819f9a077d475da1282000250202&q=${city}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch weather data");
      })
      .finally(() => setLoading(false));
  }, [city]);

  return (
    <div className="whether-page-container">
      <SearchBar searchCity={searchCity} />
      {/* {loading && (<p>Loading data…</p>)} */}
      {data && <Card weatherData={data} loading={loading}/>}
    </div>
  );
}

export default App;
