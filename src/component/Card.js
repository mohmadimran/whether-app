export default function Card({ weatherData }) {
    console.log("whether data",weatherData)
    return (
        <div className="weather-cards">
            <div className="weather-card">
                <h1>Temperature</h1>
                <p>{`${weatherData?.current.temp_c}C`}</p>
            </div>
            <div className="weather-card">
                <h1>Humidity</h1>
                <p>{`${weatherData?.current.humidity}%`}</p>
            </div>
            <div className="weather-card">
                <h1>Condition</h1>
                <p>{weatherData?.current.condition.text}</p>
            </div>
            <div className="weather-card">
                <h1>Wind Speed</h1>
                <p>{`${weatherData?.current.wind_kph} kph`}</p>
            </div>
        </div>
    );
}
