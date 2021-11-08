//Selectores Aire
export const formularioAire = document.querySelector('#formularioAire'),
    mensajeAire = document.querySelector('#mensajeAire'),
    resultadoCalidadAire = document.querySelector('#resultadoCalidadAire'),
    mapaAire = document.querySelector('#mapaAire');

export const modalAQI = document.getElementById('modalAQI'),
       modalCarbonEl = document.getElementById('modalCarbonEl'),
       modalCarbonEnvio = document.getElementById('modalCarbonEnvio'),
       modalWeather = document.getElementById('modalWeather')

//Selectores Clima
export const mapaClima = document.querySelector('#mapaClima'),
       cmbPaises = document.querySelector('#cmbPaises'),
       txtCiudadClima = document.querySelector('#txtCiudadClima'),
       formularioClima = document.querySelector('#formularioClima'),
       mensajeclima = document.querySelector('#mensajeClima'),
       resultadoClima = document.querySelector('#resultadoClima');

//Selectores Electricidad
export const formularioelectricidad = document.querySelector('#formularioElectricidad'),
       cmbPaisesElectricidad = document.querySelector('#cmbPaisesElectricidad'),
       cmbUnidadElectricidad = document.querySelector('#cmbUnidadElectricidad'),
       txtConsumo = document.querySelector('#txtConsumo'),
       unidadSeleccionada = document.querySelector('#unidadSeleccionada'),
       mensajeCarbonEl = document.querySelector('#mensajeCarbonEl'),
       resultadoCarbonEl = document.querySelector('#resultadoCarbonEl');

//Selectores Envio
export const formularioEnvio = document.querySelector('#formularioEnvio'),
       cmbUnidadEnvio = document.querySelector('#cmbUnidadEnvio'),
       inputPeso = document.querySelector('#inputPeso'),
       cmbUnidadDistancia = document.querySelector('#cmbUnidadDistancia'),
       inputDistancia = document.querySelector('#inputDistancia'),
       unidadSeleccionadaE = document.querySelector('#unidadSeleccionadaE'),
       cmbTipoEnvio = document.querySelector('#cmbTipoEnvio'),
       mensajeCarbonEnvio = document.querySelector('#mensajeCarbonEnvio'),
       resultadoCarbonEnvio = document.querySelector('#resultadoCarbonEnvio');

export function alert(message, type, parent) {
    var alerta = document.createElement('div');
    alerta.innerHTML = '<div class="alert alert-' + type + ' animacion" role="alert">' + message + '</div>';
    parent.append(alerta);
}

export function limpiarChildrens(parent) {
    parent.removeAttribute("class");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function spinner(parent) {
    limpiarChildrens(parent);
    parent.setAttribute('class', 'text-center');
    const spin = document.createElement('div');
    spin.classList.add('spinner-grow');
    spin.setAttribute('role', 'status');
    const accesibilidad = document.createElement('span');
    accesibilidad.textContent = 'Loading...';
    accesibilidad.setAttribute('class', 'visually-hidden');
    spin.appendChild(accesibilidad);
    parent.appendChild(spin);
}

export function llenarPaises(parent) {
    const url = 'https://restcountries.com/v2/all';
    fetch(url).then(res => {
        return res.json();
    }).then(data => {
        let paises = "";
        data.forEach(country => {
            paises += `
      <option value="${country.alpha2Code}">${country.name}</option>`;
        })

        parent.innerHTML = paises;
    }).catch(err => {
        console.log(err);
    })
}

export function emojiEnvio(tipo){
    let emoji ="";
    if(tipo === "ship"){
        emoji = "&#x1F6A2;"
    } else if(tipo === "train") {
        emoji = "&#x1F682;";
    } else if(tipo === "truck") {
        emoji = "&#x1F69A;";
    } else if(tipo === "plane") {
        emoji = "&#9992;&#65039;";
    }
    return emoji;
}