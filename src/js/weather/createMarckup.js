import format from 'date-fns/format';
export const createMarckup = ({ name, main, sys, clouds, weather }) => {
  const sunrise = format(new Date(sys.sunrise * 1000), 'HH:mm');
  const sunset = format(new Date(sys.sunset * 1000), 'HH:mm');

  return `<div class="weather__card">
        <h2 class="city-name">${name}</h2>
        <ul class="weather-info list">
            <li class="weather-info-item">
                <p class="temp">Температура: ${Math.round(main.temp)}&#176;</p>
            </li>
            <li class="weather-info-item">
                <p class="feels-like-temp">Відчувається як: ${Math.round(
                  main.feels_like
                )}&#176;</p>
            </li>
            <li class="weather-info-item">
                <p class="sunrise-time">Схід сонця: ${sunrise}</p>
            </li>
            <li class="weather-info-item">
                <p class="sunset-time">Захід сонця: ${sunset}</p>
            </li>
            <li class="weather-info-item">
                <p class="clouds">Хмарність: ${clouds.all}%</p>
            </li>
            <li><img src="https://openweathermap.org/img/wn/${
              weather[0].icon
            }@2x.png" alt="${weather[0].description}" /></li>
        </ul>
    </div>`;
};
