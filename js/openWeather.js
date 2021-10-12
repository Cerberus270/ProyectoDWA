import * as UI from './selectores.js';

class OpenWeather {
    constructor(ciudad, pais) {
        this.ciudad = ciudad;
        this.pais = pais;
    }

    consultarAPI() {
        const appID = '383fbfeebb99e92072fd1384ab4d1dc1'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.pais}&appid=${appID}&lang=es`;
        UI.spinner(UI.resultadoClima);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if (resultado.cod === "404") {
                    UI.alert('Error la ciudad ingresada no es valida o no se encuentra en la BD', 'danger', UI.mensajeclima);
                    UI.limpiarChildrens(UI.resultadoClima);
                    return;
                } else {
                    const kelvinToCelcius = grados => parseInt(grados - 273.15);
                    const {
                        coord: {
                            lon,
                            lat
                        },
                        weather,
                        main: {
                            temp,
                            feels_like,
                            temp_min,
                            temp_max,
                            pressure,
                            humidity
                        },
                        wind: {
                            speed
                        },
                        clouds: {
                            all
                        },
                        dt,
                        timezone

                    } = resultado;
                    console.log(resultado);
                    //Hora Fuente => https://stackoverflow.com/questions/62376115/how-to-obtain-open-weather-api-date-time-from-city-being-fetched
                    const d = new Date()
                    const localTime = d.getTime()
                    const localOffset = d.getTimezoneOffset() * 60000
                    const utc = localTime + localOffset
                    var hora = utc + (1000 * timezone)
                    const nd = new Date(hora)
                    //Hora
                    UI.limpiarChildrens(UI.resultadoClima);
                    UI.limpiarChildrens(UI.mensajeclima);
                    UI.resultadoClima.setAttribute('class', 'mx-auto', 'text-center');
                    const texto = document.createElement('p');
                    texto.setAttribute('class', 'description');
                    texto.innerHTML = `
                    <p class="description">
                        descripción: ${weather[0].description}
                        <br>
                        hora: ${nd.getHours()}:${nd.getMinutes()}
                    </p>`;
                    const climaCard = document.createElement('div');
                    climaCard.classList.add('weatherCard', 'text-center', 'mx-auto');
                    climaCard.innerHTML = `
                        <div class="currentTemp">
                            <span class="temp">${kelvinToCelcius(temp)}&#176;</span>
                            <span class="location">${this.ciudad}</span>
                        </div>
                        <div class="currentWeather">
                            <span class="conditions">
                            <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
                            </span>
                            <div class="info">
                                <span>Presion: ${pressure} mb</span>
                                <span>Humedad: ${humidity}%</span>
                            </div>
                        </div>`
                    UI.resultadoClima.appendChild(texto);
                    UI.resultadoClima.appendChild(climaCard);
                }
            })
            .catch(error => console.error(error))
    }
}

export default OpenWeather;