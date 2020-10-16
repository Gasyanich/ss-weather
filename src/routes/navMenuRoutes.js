import React from 'react';
import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';
import DateRangeIcon from '@material-ui/icons/DateRange';

export const navMenuRoutes = [
  {
    title: 'Прогноз на сегодня',
    path: '/today',
    icon: <TodayIcon />,
  },
  {
    title: 'Прогноз на неделю',
    path: '/week',
    icon: <DateRangeIcon/>,
  },
  {
    title: 'Прогноз на месяц',
    path: '/month',
    icon: <EventIcon/>,
  },
];
