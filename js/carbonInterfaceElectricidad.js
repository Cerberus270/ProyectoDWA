import * as UI from './selectores.js';

class CarbonInterfaceElectricidad {
    constructor(unidad, valor, pais) {
        this.unidad = unidad;
        this.valor = valor;
        this.pais = pais;
    }

    async consultarAPI() {
        try {
            const appKey = "NzcQs8qv1XiOiwf2tWZw";
            const respuesta = await fetch('https://www.carboninterface.com/api/v1/estimates', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${appKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "electricity",
                    electricity_unit: this.unidad,
                    electricity_value: this.valor,
                    country: this.pais
                })
            });
            const resultado = await respuesta.json();
            console.log(resultado);
            const {
                data: {
                    type,
                    attributes: {
                        country,
                        electricity_unit,
                        electricity_value,
                        estimated_at,
                        carbon_kg,
                        carbon_mt
                    }
                }
            } = resultado;

            UI.limpiarChildrens(UI.mensajeCarbonEl);
            UI.limpiarChildrens(UI.resultadoCarbonEl);
            const emision = document.createElement('div');
            if (carbon_kg < 75){
                emision.classList.add('text-center','mx-auto','emisionBaja','d-flex','align-items-center','justify-content-center','animacion');
                emision.innerHTML = `
                    <p class="">Su recibo de electricidad genero:
                        <br>
                        <strong>${carbon_kg}Kg de CO2</strong>
                        <br>
                        <span>Excelente ahorro energetico &#128076;</span>
                    </p>
                `;
            } else if(carbon_kg > 75 && carbon_kg <135) {
                emision.classList.add('text-center','mx-auto','emisionMedia','d-flex','align-items-center','justify-content-center','animacion');
                emision.innerHTML = `
                    <p class="">Su recibo de electricidad genero:
                        <br>
                        <strong>${carbon_kg}Kg de CO2</strong>
                        <br>
                        <span>Falta ahorrar mas electricidad &#128077;<span>
                    </p>
                `;
            } else {
                emision.classList.add('text-center','mx-auto','emisionAlta','d-flex','align-items-center','justify-content-center','animacion');
                emision.innerHTML = `
                    <p class="">Su recibo de electricidad genero:
                        <br>
                        <strong>${carbon_kg}Kg de CO2</strong>
                        <br>
                        <span>Tienes que mejorar tu consumo electrico &#128078;</span>
                    </p>
                `;
            }
            UI.resultadoCarbonEl.appendChild(emision);
        } catch (error) {
            console.error(error);
        }

    }
}

export default CarbonInterfaceElectricidad