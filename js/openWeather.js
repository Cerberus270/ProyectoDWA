import * as UI from './selectores.js';

class OpenWeather {
    constructor(ciudad, pais) {
        this.ciudad = ciudad;
        this.pais = pais;
    }

    consultarAPI() {
        const appID = '383fbfeebb99e92072fd1384ab4d1dc1'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.pais}&appid=${appID}&lang=es&units=metric`;
        UI.spinner(UI.resultadoClima);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                UI.spinner(UI.resultadoClima);
                if (resultado.cod === "404") {
                    UI.limpiarChildrens(UI.mensajeclima);
                    UI.limpiarChildrens(UI.resultadoClima);
                    UI.alert('Error la ciudad ingresada no es valida o no se encuentra en la BD', 'danger', UI.mensajeclima);
                    var container = L.DomUtil.get('mapaClima');
                    if (container != null) {
                        container._leaflet_id = null;
                    }
                    UI.limpiarChildrens(UI.mapaClima);
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
                        sys: {
                            country
                        },
                        dt,
                        timezone,
                        name

                    } = resultado;
                    console.log(resultado);
                    var container = L.DomUtil.get('mapaClima');
                    if (container != null) {
                        container._leaflet_id = null;
                    }

                    //Hora Fuente => https://stackoverflow.com/questions/62376115/how-to-obtain-open-weather-api-date-time-from-city-being-fetched
                    const d = new Date()
                    const localTime = d.getTime()
                    const localOffset = d.getTimezoneOffset() * 60000
                    const utc = localTime + localOffset
                    var hora = utc + (1000 * timezone)
                    const nd = new Date(hora)
                    //Limpiamos antes de refrescar la informacion
                    UI.limpiarChildrens(UI.resultadoClima);
                    UI.limpiarChildrens(UI.mensajeclima);
                    //agregamos las clases necesarias
                    UI.resultadoClima.setAttribute('class', 'mx-auto', 'text-center');
                    const texto = document.createElement('p');
                    //Texto que dice la hora
                    texto.classList.add('hora', 'animacion');
                    texto.innerHTML = `
                        <br>
                        hora local: ${nd.getHours()}:${nd.getMinutes()}`;
                    //Card del clima
                    const climaCard = document.createElement('div');
                    climaCard.classList.add('animacion');
                    climaCard.innerHTML = `
                    <div class="col-auto text-center clima-card">
                    <h1 class="text-center my-4"> <i class="bi bi-pin-map"></i> &nbsp;${name}<sup class="pais px-2">${country}</sup></h1>
                    <div class="card-body text-center">
                        <div class="div-temperatura text-center mx-auto">
                            <img class="icon-temp" src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].main}">
                            <h1 class="temp"><b>${temp}</b><span>&#8451;</span></h1>
                        </div>
                        <h3 class="description">${weather[0].description}</h3>
                        <span>Presion: ${pressure} mb</span>
                        <span>Humedad: ${humidity}%</span>
                    </div>
                    </div>
                    `
                    UI.resultadoClima.appendChild(texto);
                    UI.resultadoClima.appendChild(climaCard);
                    //Mapa Leaflet
                    var map = L.map('mapaClima').setView([lat, lon], 10);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    }).addTo(map);
                    L.marker([lat, lon]).addTo(map)
                        .bindPopup(`Clima en ${name}: ${temp}&#8451;`)
                        .openPopup();
                    map.dragging.disable();
                }
            })
            .catch(error => console.error(error))
    }
}

export default OpenWeather;