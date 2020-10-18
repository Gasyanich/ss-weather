import React, {useEffect, useState} from 'react';
import '../shared/cards.css';
import '../shared/layout.css';
import DayWeekWeather from './day-week-weather/DayWeeakWeather';

const apiUrl = 'https://ss-weather-api.herokuapp.com/weather/53.2001/50.15';

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
    <div className="full-width"
      style={{display: 'flex', flexDirection: 'column'}}>
      {weekWeather.map((dayWeek, index) => (
        <DayWeekWeather forecast={dayWeek} key={index}/>
      ))}
    </div>
  );
};

export default WeekWeather;
