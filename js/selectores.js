//Selectores Aire
export const formularioAire = document.querySelector('#formularioAire'),
    mensajeAire = document.querySelector('#mensajeAire'),
    resultadoCalidadAire = document.querySelector('#resultadoCalidadAire'),
    mapaAire = document.querySelector('#mapaAire');

//Selectores Clima
export const mapaClima = document.querySelector('#mapaClima');

export function alert(message, type) {
    var alerta = document.createElement('div')
    alerta.innerHTML = '<div class="alert alert-' + type + '" role="alert">' + message + '</div>';
    mensajeAire.append(alerta);
}

export function limpiarChildrens(parent) {
    parent.removeAttribute("class");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function spinner(parent){
    limpiarChildrens(parent);
    parent.setAttribute('class','text-center');
    const spin = document.createElement('div');
    spin.classList.add('spinner-grow');
    spin.setAttribute('role','status');
    const accesibilidad = document.createElement('span');
    accesibilidad.textContent = 'Loading...';
    accesibilidad.setAttribute('class','visually-hidden');
    spin.appendChild(accesibilidad);
    parent.appendChild(spin);
}