import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setCity, setLoading } from '../redux/slices/weatherSlice';
import { RootState } from '../redux/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WeatherComponent() {

  const dispatch = useDispatch();
  const { city, weatherData, loading, error } = useSelector((state: RootState) => state.weather);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(e.target.value));
  };

  // const handleSearch = () => {
  //   dispatch(fetchData());
  // };
  const fetchData = async () => {
    
    dispatch(setLoading(true));

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67cb3facfb84232db40503216b70eccc`,
      );
      const data = await response.json();
      if (data.cod !== 200) {
        toast.error(`Sorry, ${data.message}, Please check the city name and try again`);
      }else{
        dispatch(setWeatherData(data));
      }
      
    } catch (e:any) {
        toast.error(`Sorry, ${e.message}`);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(e.target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div className="weather-container">
   
      <h2>Today's Weather</h2>
      <div>
        <input
          placeholder="Type a City"
          type="text"
          id="cityInput"
          value={city}
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}
        />

        <button type="button" onClick={fetchData} disabled={!city || loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <>
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <div className="weather-content">
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="weather image"
              ></img>
            </div>
            <div className='weather-info'>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Wind: {weatherData.wind.speed}m/s</p>

              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Pressure: {weatherData.main.pressure}hpa</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherComponent;
