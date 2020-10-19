import React, {useEffect, useState} from 'react';
import 'moment/locale/ru';
import FactWeather from './factWeather/';
import DayPartWeather from './dayPartWeather/';
import './todayWeather.css';
import HourWeather from './hourWeather';
import {apiUrl} from '../../utils/apiUtils';

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
