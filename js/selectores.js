export const formularioAire = document.querySelector('#formularioAire'),
    mensajeAire = document.querySelector('#mensajeAire'),
    resultadoCalidadAire = document.querySelector('#resultadoCalidadAire'),
    mapaAire = document.querySelector('#mapaAire');

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