//Selectores Aire
export const formularioAire = document.querySelector('#formularioAire'),
    mensajeAire = document.querySelector('#mensajeAire'),
    resultadoCalidadAire = document.querySelector('#resultadoCalidadAire'),
    mapaAire = document.querySelector('#mapaAire');

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
       inputEspeso = document.querySelector('#inputPeso'),
       cmbUnidadElectricidad = document.querySelector('#cmbUnidadElectricidad'),
       inputDistancia = document.querySelector('#inputDistancia'),
       cmbTipoEnvio = document.querySelector('#cmbTipoEnvio'),
       mensajeCarbonEnvio = document.querySelector('#mensajeCarbonEnvio'),
       resultadoCarbonEnvio = document.querySelector('#resultadoCarbonEnvio');

export function alert(message, type, parent) {
    var alerta = document.createElement('div')
    alerta.innerHTML = '<div class="alert alert-' + type + '" role="alert">' + message + '</div>';
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