import React, {useEffect, useState} from 'react';
import '../shared/cards.css';
import '../shared/layout.css';
import DayWeekWeather from './dayWeekWeather/DayWeekWeather';
import {apiUrl} from '../../utils/apiUtils';
import Loader from '../shared/Loader';

const WeekWeather = () => {
  const [weekWeather, setWeekWeather] = useState();

  useEffect(() => {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setWeekWeather(data.forecasts);
        });
  }, []);

  return (
    <>
      {weekWeather ? (
            <div className="full-width week-weather-card-content">
              {weekWeather.map((dayWeek, index) => (
                <DayWeekWeather forecast={dayWeek} key={index}/>
              ))}
            </div>
      ) : <Loader/>}
    </>
  );
};

export default WeekWeather;
