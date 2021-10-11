import * as UI from './selectores.js';

class OpenWeather {
    constructor(ciudad, pais) {
        this.ciudad = ciudad;
        this.pais = pais;
    }

    consultarAPI() {
        const appID = '383fbfeebb99e92072fd1384ab4d1dc1'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.pais}&appid=${appID}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if (resultado.cod === "404") {
                    UI.alert('Error la ciudad ingresada no es valida o no se encuentra en la BD', 'danger', UI.mensajeclima);
                    return;
                } else {
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
                        }

                    } = resultado;

                    console.log(resultado);
                    UI.limpiarChildrens(UI.resultadoClima);
                    UI.limpiarChildrens(UI.mensajeclima);
                }
            })
    }
}

export default OpenWeather;