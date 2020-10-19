import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {CardContent} from '@material-ui/core';
import {getDayPartName, getIconUrl} from '../../../utils/weatherUtils';
import './dayPartWeather.css';
import '../../shared/cards.css';

const getDayPart = (parts, partName) => {
  const part = parts[partName];
  return {
    partName: getDayPartName(partName),
    temp: part.temp_avg,
    iconUrl: getIconUrl(part.icon),
  };
};

const getDayPartsWeather = (weather) => {
  // первый день из прогноза - сегодняшний
  const {parts} = weather.forecasts[0];

  const day = getDayPart(parts, 'day');
  const night = getDayPart(parts, 'night');
  const morning = getDayPart(parts, 'morning');
  const evening = getDayPart(parts, 'evening');

  console.log([day, night, morning, evening]);

  return [day, night, morning, evening];
};

/**
 * Карточка "Прогноз на сегодня"
 * @param {any} weather - json, полученный из API
 * @return {JSX.Element}
 * @constructor
 */
const DayPartWeather = ({weather}) => {
  const [dayPartsWeather, setDayPartsWeather] = useState([]);

  useEffect(() => {
    if (weather) {
      const dayPartsWeather = getDayPartsWeather(weather);
      setDayPartsWeather(dayPartsWeather);
    }
  }, [weather]);

  return (
    <Card className="weather-card">
      <CardContent>
        <div className="parts-weather-card-content">
          <Typography variant="h6">
            <strong>Прогноз на сегодня</strong>
          </Typography>

          <div className="parts-weather-container">
            {dayPartsWeather.map((partWeather, index) => (
              <div className="part-weather-content" key={index}>
                <Typography variant="h6">
                  <strong>{partWeather.partName}</strong>
                </Typography>
                <Typography variant="h6">
                  <strong>{partWeather.temp}°</strong>
                </Typography>
                <div className="condition-icon">
                  <img src={partWeather.iconUrl} alt=""/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DayPartWeather;
