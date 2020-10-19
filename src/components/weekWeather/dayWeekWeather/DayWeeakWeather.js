import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import '../../shared/cards.css';
import {CardContent, Hidden, Table, Typography} from '@material-ui/core';
import {getDate} from '../../../utils/dateTimeUtils';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import {getConditionDescription, getDayPartName, getIconUrl}
  from '../../../utils/weatherUtils';

/**
 * Карточка прогноза погоды для дня недели
 * @param {any} forecast - прогноз погоды на неделю, полученный из API
 * @return {JSX.Element}
 * @constructor
 */
const DayWeekWeather = ({forecast}) => {
  const [dayWeekWeather, setDayWeekWeather] = useState({});

  useEffect(() => {
    if (forecast) {
      const {date, parts} = forecast;

      setDayWeekWeather({
        date: getDate(date),
        parts: [
          {
            name: getDayPartName('morning'),
            part: parts.morning,
          },
          {
            name: getDayPartName('day'),
            part: parts.day,
          },
          {
            name: getDayPartName('evening'),
            part: parts.evening,
          },
          {
            name: getDayPartName('night'),
            part: parts.night,
          },
        ],
      });
    }
  }, []);

  return (
    <Card className="weather-card">
      <CardContent>
        <div className="week-weather-card-content">
          <Typography variant="h6">
            {dayWeekWeather.date}
          </Typography>
          {dayWeekWeather.parts && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <strong>Время суток</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Температура</strong>
                  </TableCell>
                  <TableCell align="left">

                  </TableCell>
                  <Hidden smDown>
                    <TableCell className="pressure-column" align="right">
                      <strong>Давление</strong>
                    </TableCell>
                  </Hidden>
                </TableRow>
              </TableHead>
              <TableBody>
                {dayWeekWeather.parts.map((partByName, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">
                      <strong>
                        {partByName.name}
                      </strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>
                        {partByName.part.temp_min}°
                        ...
                        {partByName.part.temp_max}°
                      </strong>
                    </TableCell>
                    <TableCell align="left">
                      <div className="hour-weather-condition-cell">
                        <img src={getIconUrl(partByName.part.icon)} alt=""/>
                        <strong>
                          {getConditionDescription(partByName.part.condition)}
                        </strong>
                      </div>
                    </TableCell>
                    <Hidden smDown>
                      <TableCell align="right">
                        <strong>
                          {partByName.part.pressure_mm} мм.рт.ст
                        </strong>
                      </TableCell>
                    </Hidden>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default DayWeekWeather;
