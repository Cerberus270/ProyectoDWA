import * as UI from './selectores.js';
import CalidadAire from './calidadAire.js';
import OpenWeather from './openWeather.js';

UI.formularioAire.addEventListener('submit', buscarCalidadAire);

function buscarCalidadAire(e){
    e.preventDefault();
    //Obtener los datos del formulario
    const ciudad = document.querySelector('#txtCiudad').value;
    //Validando si el campo esta Vacio
    if(ciudad === ''){
        console.error('La ciudad es obligatoria');
        return;
    } else{
        const busquedaCalidadAire = new CalidadAire(ciudad);
        busquedaCalidadAire.consultarAPI();
    }
}

const busquedaClima = new OpenWeather('Armenia','SV');

busquedaClima.consultarAPI();