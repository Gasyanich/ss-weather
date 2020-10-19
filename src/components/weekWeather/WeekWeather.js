import React, {useEffect, useState} from 'react';
import '../shared/cards.css';
import '../shared/layout.css';
import DayWeekWeather from './dayWeekWeather/DayWeeakWeather';
import {apiUrl} from '../../utils/apiUtils';

const WeekWeather = () => {
  const [weekWeather, setWeekWeather] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setWeekWeather(data.forecasts);
        });
  }, []);

  return (
    <div className="full-width week-weather-card-content">
      {weekWeather.map((dayWeek, index) => (
        <DayWeekWeather forecast={dayWeek} key={index}/>
      ))}
    </div>
  );
};

export default WeekWeather;
