import * as UI from './selectores.js';
import CalidadAire from './calidadAire.js';
import OpenWeather from './openWeather.js';
import CarbonInterfaceElectricidad from './carbonInterfaceElectricidad.js';

UI.formularioAire.addEventListener('submit', buscarCalidadAire);
UI.formularioClima.addEventListener('submit', buscarClima);
UI.formularioelectricidad.addEventListener('submit', buscarEmisiones);

document.addEventListener('DOMContentLoaded', UI.llenarPaises(UI.cmbPaises));

UI.cmbUnidadElectricidad.addEventListener('change', (e) => {
    UI.unidadSeleccionada.textContent = e.target.value;
})

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

function buscarClima(e){
    e.preventDefault();
    const ciudad= UI.txtCiudadClima.value;
    const pais = UI.cmbPaises.value;
    if (ciudad === '') {
        console.error('La ciudad es obligatoria');
        return;
    } else {
        console.log(ciudad);
        console.log(pais);
        const busquedaClima = new OpenWeather(ciudad,pais);
        busquedaClima.consultarAPI();
    }
}

function buscarEmisiones(e){
    e.preventDefault();
    const pais = UI.cmbPaisesElectricidad.value;
    const unidad = UI.cmbUnidadElectricidad.value;
    const consumo = UI.txtConsumo.value;
    const emisiones = new CarbonInterfaceElectricidad(unidad,consumo,pais);
    emisiones.consultarAPI();
}