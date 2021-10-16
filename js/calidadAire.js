import * as UI from './selectores.js';

class CalidadAire {
    constructor(ciudad) {
        this.ciudad = ciudad;
    }
    consultarAPI() {
        const url = `http://api.waqi.info/feed/${this.ciudad}/?token=2464eb8087a61b8528cc77bf2a57a34219a68a1a`;
        UI.spinner(UI.resultadoCalidadAire);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if (resultado.status === 'ok') {
                    console.log(resultado);
                    //Destructuring
                    const {
                        data: {
                            aqi,
                            city: {
                                geo
                            }
                        }
                    } = resultado;
                    console.log(aqi);
                    console.log(geo);
                    UI.limpiarChildrens(UI.resultadoCalidadAire);
                    UI.limpiarChildrens(UI.mensajeAire);
                    var container = L.DomUtil.get('mapaAire');
                    if (container != null) {

                        container._leaflet_id = null;

                    }
                    if (aqi > 0 && aqi <= 50) {
                        UI.resultadoCalidadAire.classList.add('aqiGood', 'mx-auto', 'text-center','animacion');
                        const parrafo = `<p class="fs-4 fw-bold">GREEN<br>Rango: 0-50<br>AQI: ${aqi}<br><small>La Calidad de Aire es BUENA</small></p>`;
                        UI.resultadoCalidadAire.innerHTML = parrafo;
                        //API Geolocalizacion
                        var map = L.map('mapaAire').setView(geo, 10);

                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);

                        L.marker(geo).addTo(map)
                            .bindPopup('CALIDAD BUENA')
                            .openPopup();
                        map.dragging.disable();
                    } else if (aqi >= 51 && aqi <= 100) {
                        UI.resultadoCalidadAire.classList.add('aqiModerate', 'mx-auto', 'text-center','animacion');
                        const parrafo = `<p class="fs-4 fw-bold">YELLOW<br>Rango: 51-100<br>AQI: ${aqi}<br><small>La Calidad de Aire es MODERADA</small></p>`;
                        UI.resultadoCalidadAire.innerHTML = parrafo;
                        //API Geolocalizacion
                        var map = L.map('mapaAire').setView(geo, 10);

                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);

                        L.marker(geo).addTo(map)
                            .bindPopup('CALIDAD MODERADA')
                            .openPopup();
                        map.dragging.disable();
                    } else if (aqi >= 101 && aqi <= 150) {
                        UI.resultadoCalidadAire.classList.add('aqiUnhealthySensitive', 'mx-auto', 'text-center','animacion');
                        const parrafo = `<p class="fs-4 fw-bold">ORANGE<br>Rango: 101-150<br>AQI: ${aqi}<br><small>La Calidad de Aire es POCO SALUDABLE PARA SENSIBLES</small></p>`;
                        UI.resultadoCalidadAire.innerHTML = parrafo;
                        //API Geolocalizacion
                        var map = L.map('mapaAire').setView(geo, 10);

                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);

                        L.marker(geo).addTo(map)
                            .bindPopup('POCO SALUDABLE PARA SENSIBLES')
                            .openPopup();
                        map.dragging.disable();
                    } else if (aqi >= 151 && aqi <= 200) {
                        UI.resultadoCalidadAire.classList.add('aqiUnhealthy', 'mx-auto', 'text-center','animacion');
                        const parrafo = `<p class="fs-4 fw-bold">RED<br>Rango: 151-200<br>AQI: ${aqi}<br><small>La Calidad de Aire es POCO SALUDABLE</small></p>`;
                        UI.resultadoCalidadAire.innerHTML = parrafo;
                        //API Geolocalizacion
                        var map = L.map('mapaAire').setView(geo, 10);

                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);

                        L.marker(geo).addTo(map)
                            .bindPopup('POCO SALUDABLE')
                            .openPopup();
                    } else if (aqi >= 151 && aqi <= 200) {
                        UI.resultadoCalidadAire.classList.add('aqiVeryUnhealthy', 'mx-auto', 'text-center','animacion');
                        const parrafo = `<p class="fs-4 fw-bold">PURPLE<br>Rango: 201-300<br>AQI: ${aqi}<br><small>La Calidad de Aire es MUY POCO SALUDABLE</small></p>`;
                        UI.resultadoCalidadAire.innerHTML = parrafo;
                        //API Geolocalizacion
                        var map = L.map('mapaAire').setView(geo, 10);

                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);

                        L.marker(geo).addTo(map)
                            .bindPopup('MUY POCO SALUDABLE')
                            .openPopup();
                        map.dragging.disable();
                    } else if (aqi >= 301 && aqi <= 500) {
                        UI.resultadoCalidadAire.classList.add('aqiHazardous', 'mx-auto', 'text-center','animacion');
                        const parrafo = `<p class="fs-4 fw-bold">MAROON<br>Rango: 301-500<br>AQI: ${aqi}<br><small>La Calidad de Aire es PELIGROSA</small></p>`;
                        UI.resultadoCalidadAire.innerHTML = parrafo;
                        //API Geolocalizacion
                        var map = L.map('mapaAire').setView(geo, 10);

                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);

                        L.marker(geo).addTo(map)
                            .bindPopup('PELIGROSA')
                            .openPopup();
                        map.dragging.disable();
                    } else {
                        UI.limpiarChildrens(UI.resultadoCalidadAire);
                        UI.limpiarChildrens(UI.mensajeAire);
                        var container = L.DomUtil.get('mapaAire');
                        if (container != null) {

                            container._leaflet_id = null;

                        }
                        UI.limpiarChildrens(UI.mapaAire);
                        UI.alert('La ciudad Ingresada no cuenta con un Índice AQI valido', 'danger',UI.mensajeAire);
                        return;
                    }
                } else {
                    UI.limpiarChildrens(UI.resultadoCalidadAire);
                    UI.limpiarChildrens(UI.mensajeAire);
                    var container = L.DomUtil.get('mapaAire');
                    if (container != null) {

                        container._leaflet_id = null;

                    }
                    UI.limpiarChildrens(UI.mapaAire);
                    UI.alert('Ingreso una ciudad no valida', 'danger', UI.mensajeAire);
                    return;
                }
            })
    }
}

export default CalidadAire;