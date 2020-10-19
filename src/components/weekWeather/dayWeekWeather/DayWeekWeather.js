import React from 'react';
import Card from '@material-ui/core/Card';
import '../../shared/cards.css';
import './dayWeekWeather.css';
import {CardContent, Hidden, Table, Typography,
  withStyles} from '@material-ui/core';
import {getDate} from '../../../utils/dateTimeUtils';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import {getConditionDescription, getDayPartName, getIconUrl}
  from '../../../utils/weatherUtils';


const CustomTableCell = withStyles((theme) => ({}
))(TableCell);

const dayPartNameCol = {
  width: '15%',
};

const tempCol = {
  width: '15%',
};

const pressureCol = {
  width: '25%',
};

const conditionDescriptionCol = {
  width: '45%',
};

/**
 * Карточка прогноза погоды для дня недели
 * @param {any} forecast - прогноз погоды на день, полученный из API
 * @return {JSX.Element}
 * @constructor
 */
const DayWeekWeather = ({forecast}) => {
  const {date, parts} = forecast;

  const dayWeekWeather = {
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
      }],
  };

  const strongText = (text) => (<strong>{text}</strong>);


  return (
    <Card className="weather-card">
      <CardContent>
        <div className="week-weather-card-content">
          <Typography variant="h6">
            {dayWeekWeather.date}
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell style={dayPartNameCol} align="left">
                  {strongText('Время суток')}
                </CustomTableCell>
                <CustomTableCell style={tempCol} align="right">
                  {strongText('Температура')}
                </CustomTableCell>
                <CustomTableCell style={conditionDescriptionCol} align="left">

                </CustomTableCell>
                <Hidden smDown>
                  <CustomTableCell style={pressureCol} align="right">
                    {strongText('Давление')}
                  </CustomTableCell>
                </Hidden>
              </TableRow>
            </TableHead>
            <TableBody>
              {dayWeekWeather.parts.map((part, index) => (
                <TableRow key={index}>
                  <CustomTableCell style={dayPartNameCol} align="left">
                    {strongText(part.name)}
                  </CustomTableCell>
                  <CustomTableCell style={tempCol} align="right">
                    <strong>
                      {part.part.temp_min}°
                        ...
                      {part.part.temp_max}°
                    </strong>
                  </CustomTableCell>
                  <CustomTableCell style={conditionDescriptionCol} align="left">
                    <div className="day-week-weather-condition-cell">
                      <img src={getIconUrl(part.part.icon)} alt=""/>
                      {strongText(getConditionDescription(part.part.condition))}
                    </div>
                  </CustomTableCell>
                  <Hidden smDown>
                    <CustomTableCell style={pressureCol} align="right">
                      {strongText(part.part.pressure_mm + ' мм.рт.ст')}
                    </CustomTableCell>
                  </Hidden>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
export default DayWeekWeather;
