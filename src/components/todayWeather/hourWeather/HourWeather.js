import React, {useEffect, useState} from 'react';
import {CardContent, Hidden, Table} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import './hourWeather.css';
import '../../shared/cards.css';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import {getConditionDescription, getIconUrl} from '../../../utils/weatherUtils';
import {getTimeByHour} from '../../../utils/dateTimeUtils';

/**
 * Карточка "Почасовой прогноз"
 * @param {any} weather - json, полученный из API
 * @return {JSX.Element}
 * @constructor
 */
const HourWeather = ({weather}) => {
  const [todayByHours, setTodayByHours] = useState([]);

  useEffect(() => {
    if (weather) {
      const todayByHours = weather.forecasts[0].hours;
      setTodayByHours(todayByHours);
    }
  }, [weather]);

  return (
    <>
      <Card className="weather-card">
        <CardContent>
          <div className="card-content-hour">
            <Typography variant="h6">
              <strong>Почасовой прогноз</strong>
            </Typography>

            <Table className="hour-weather-table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <strong>Время</strong>
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
                {todayByHours.map((hour) => (
                  <TableRow key={hour.hour}>
                    <TableCell align="left">
                      <strong>
                        {getTimeByHour(hour.hour)}
                      </strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>
                        {hour.temp}°
                      </strong>
                    </TableCell>
                    <TableCell align="left">
                      <div className="hour-weather-condition-cell">
                        <img src={getIconUrl(hour.icon)} alt=""/>
                        <strong>
                          {getConditionDescription(hour.condition)}
                        </strong>
                      </div>
                    </TableCell>
                    <Hidden smDown>
                      <TableCell align="right">
                        <strong>
                          {hour.pressure_mm} мм.рт.ст
                        </strong>
                      </TableCell>
                    </Hidden>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default HourWeather;
