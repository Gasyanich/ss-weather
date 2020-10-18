import React, {useEffect, useState} from 'react';
import 'moment/locale/ru';
import FactWeather from './fact-weather/';
import DayPartWeather from './day-part-weather/';
import './todayWeather.css';
import HourWeather from './hour-weather';

const apiUrl = 'https://ss-weather-api.herokuapp.com/weather/53.2001/50.15';

/**
 * Страница "Прогноз на сегодня"
 * @return {JSX.Element}
 * @constructor
 */
const TodayWeather = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
        });
  }, []);

  return (
    <div className="container full-width">
      <FactWeather weather={weather} />
      <DayPartWeather weather={weather} />
      <HourWeather weather={weather}/>
    </div>
  );
};

export default TodayWeather;
