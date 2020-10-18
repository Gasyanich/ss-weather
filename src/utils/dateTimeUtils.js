import moment from 'moment';

/**
 * Возвращает строку с датой вида <День недели>, <месяц с числом>
 * @param {string} date - дата
 * @return {string} - форматированная строка
 */
export const getDate = (date) => {
  const dayWeekName = moment(date).format('dddd');

  const dayWeekUpperCase = dayWeekName.charAt(0).toUpperCase() +
      dayWeekName.slice(1);

  const dateMonth = moment(date).locale('ru').
      format('LL');

  const dateMonthWithoutYear = dateMonth.slice(0, dateMonth.length - 8);

  return dayWeekUpperCase + ', ' + dateMonthWithoutYear;
};


/**
 * Возвращает строку вида '00:00' по номеру часа в сутках
 * @param {number} hour - номер часа в сутках
 * @return {string} - форматированная строка
 */
export const getTimeByHour = (hour) => {
  if (hour < 10) {
    return `0${hour}:00`;
  } else {
    return `${hour}:00`;
  }
};
