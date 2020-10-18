import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import {CardContent} from '@material-ui/core';
import 'moment/locale/ru';
import Typography from '@material-ui/core/Typography';
import {getConditionDescription, getIconUrl} from '../../../utils/weatherUtils';
import './factWeather.css';
import moment from 'moment';

const getFactWeather = (weather) => {
  const {fact} = weather;
  const currentTime = moment(new Date(weather.now_dt))
      .locale('ru')
      .format('LT');

  return {
    currentTime: currentTime,
    temp: fact.temp,
    tempFeelsLike: fact.feels_like,
    iconUrl: getIconUrl(fact.icon),
    conditionDescription: getConditionDescription(fact.condition),
  };
};

const FactWeather = ({weather}) => {
  const [factWeather, setFactWeather] = useState({});

  useEffect(() => {
    if (weather) {
      const factWeather = getFactWeather(weather);
      setFactWeather(factWeather);
    }
  }, [weather]);

  return (
    <Card className="card">
      <CardContent>
        <div className="card-content">
          <div className="card-content-info">
            <Typography variant="h6">
              <strong>Погода сейчас</strong>
            </Typography>

            <Typography variant="h6" color="textSecondary">
              {factWeather.currentTime}
            </Typography>

            <Typography variant="h4">
              {factWeather.temp}°
            </Typography>
            <Typography variant="h6">
            Ощущается как {factWeather.tempFeelsLike}°
            </Typography>
            <Typography variant="h6">
              <strong>{factWeather.conditionDescription}</strong>
            </Typography>
          </div>

          <div className="card-content-icon">
            <img src={factWeather.iconUrl}
              alt={factWeather.conditionDescription}/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FactWeather;
