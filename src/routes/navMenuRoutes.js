import React from 'react';
import TodayIcon from '@material-ui/icons/Today';
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
];
