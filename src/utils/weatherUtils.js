/**
 * Возвращает url икноки с погодой
 * @param {string} iconCode - название иконки, полученное из API
 * @return {string} - url иконки
 */
export const getIconUrl = (iconCode) => {
  return `https://yastatic.net/weather/i/icons/blueye/color/svg/${iconCode}.svg`;
};

/**
 * Получение описания погодного состояния
 * @param {string} condition - условное обозначение состояния из строки
 * @return {string} - описание погодного состояния
 */
export const getConditionDescription = (condition) => {
  return conditionDescription[condition];
};


/**
 * Получение названия времени суток
 * @param {string} dayCode - описание названия времени суток, полученное из API
 * @return {string} - название времени суток
 */
export const getDayPartName = (dayCode) => {
  return dayPartNames[dayCode];
};

const dayPartNames = {
  'night': 'Ночь',
  'day': 'День',
  'morning': 'Утро',
  'evening': 'Вечер',
};

const conditionDescription = {
  'clear': 'Ясно',
  'partly-cloudy': 'Малооблачно',
  'cloudy': 'Облачно с прояснениями',
  'overcast': 'Пасмурно',
  'drizzle': 'Морось',
  'light-rain': 'Небольшой дождь',
  'rain': 'Дождь',
  'moderate-rain': 'Умеренно сильный дождь',
  'heavy-rain': 'Сильный дождь',
  'continuous-heavy-rain': 'Длительный сильный дождь',
  'showers': 'Ливень',
  'wet-snow': 'Дождь со снегом',
  'light-snow': 'Небольшой снег',
  'snow': 'Снег',
  'snow-showers': 'Снегопад',
  'hail': 'Град',
  'thunderstorm': 'Гроза',
  'thunderstorm-with-rain': 'Жождь с грозой',
  'thunderstorm-with-hail': 'Гроза с градом',
};


