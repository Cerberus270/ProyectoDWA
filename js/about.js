import * as UI from './selectores.js';
import CalidadAire from './calidadAire.js';

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
        const busqueda = new CalidadAire(ciudad);
        busqueda.consultarAPI();
        console.log(busqueda);
    }
}