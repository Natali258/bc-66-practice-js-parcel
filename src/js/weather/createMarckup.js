
export const createMarckup = ({name, main, sys, clouds, weather}) => {
    return `<div class="weather__card">
        <h2 class="city-name">${name}</h2>
        <ul class="weather-info list">
            <li class="weather-info-item">
                <p class="temp">Температура: ${main.temp}&#176;</p>
            </li>
            <li class="weather-info-item">
                <p class="feels-like-temp">Відчувається як: ${main.feels_like}&#176;</p>
            </li>
            <li class="weather-info-item">
                <p class="sunrise-time">Схід сонця: ${sys.sunrise}</p>
            </li>
            <li class="weather-info-item">
                <p class="sunset-time">Захід сонця: ${sys.sunset}</p>
            </li>
            <li class="weather-info-item">
                <p class="clouds">Хмарність: ${clouds.all}%</p>
            </li>
            <li><img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" /></li>
        </ul>
    </div>`
} 