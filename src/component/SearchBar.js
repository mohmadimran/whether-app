import { useState } from "react";

export default function SearchBar({ searchCity }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    searchCity(city); 
    setCity(""); 
  };

  return (
    <div>
      <input
      className="search-box"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn" onClick={handleSearch}>Search</button>
    </div>
  );
}