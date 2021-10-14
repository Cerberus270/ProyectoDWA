import * as UI from './selectores.js';
import CalidadAire from './calidadAire.js';
import OpenWeather from './openWeather.js';
import CarbonInterfaceElectricidad from './carbonInterfaceElectricidad.js';
import CarbonInterfaceEnvio from './carbonInterfaceEnvios.js'

UI.formularioAire.addEventListener('submit', buscarCalidadAire);
UI.formularioClima.addEventListener('submit', buscarClima);
UI.formularioelectricidad.addEventListener('submit', buscarEmisiones);
UI.formularioEnvio.addEventListener('submit', buscarEmisionesEnvio);

document.addEventListener('DOMContentLoaded', UI.llenarPaises(UI.cmbPaises));

UI.cmbUnidadElectricidad.addEventListener('change', (e) => {
    UI.unidadSeleccionada.textContent = e.target.value;
})

UI.cmbUnidadEnvio.addEventListener('change', (e) => {
    UI.unidadSeleccionadaE.textContent = e.target.value;
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

function buscarEmisionesEnvio(e){
    e.preventDefault();
    const unidadPeso = UI.cmbUnidadEnvio.value;
    const pesoPaquete = UI.inputPeso.value;
    const unidadDistancia = UI.cmbUnidadDistancia.value;
    const distanciaRecorrida = UI.inputDistancia.value;
    const tipoEnvio= UI.cmbTipoEnvio.value;
    const emisionesEnvio = new CarbonInterfaceEnvio(unidadPeso,pesoPaquete,unidadDistancia,distanciaRecorrida,tipoEnvio);
    emisionesEnvio.consultarAPI();
}