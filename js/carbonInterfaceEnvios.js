import * as UI from './selectores.js'

class CarbonInterfaceEnvio {
    constructor(unidadMedida, valorPeso, unidadDistancia, valorDistancia, medioTransporte) {
        this.unidadMedida = unidadMedida;
        this.valorPeso = valorPeso;
        this.unidadDistancia = unidadDistancia;
        this.valorDistancia = valorDistancia;
        this.medioTransporte = medioTransporte;
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
                    type: "shipping",
                    weight_value: this.valorPeso,
                    weight_unit: this.unidadMedida,
                    distance_value: this.valorDistancia,
                    distance_unit: this.unidadDistancia,
                    transport_method: this.medioTransporte
                })
            });
            const resultado = await respuesta.json();
            console.log(resultado);
            const {
                data: {
                    type,
                    attributes: {
                        distance_value,
                        distance_unit,
                        weight_value,
                        weight_unit,
                        transport_method,
                        estimated_at,
                        carbon_g,
                        carbon_lb,
                        carbon_kg,
                        carbon_mt
                    }
                }
            } = resultado;
            // UI.limpiarChildrens(UI.mensajeCarbonEl);
            // UI.limpiarChildrens(UI.resultadoCarbonEl);
            // const emision = document.createElement('div');
            UI.limpiarChildrens(UI.mensajeCarbonEnvio);
            UI.limpiarChildrens(UI.resultadoCarbonEnvio);
            const emision = document.createElement('div');
            if (carbon_kg < 1) {
                emision.classList.add('text-center', 'mx-auto', 'emisionBaja', 'd-flex', 'align-items-center', 'justify-content-center','animacion');
                emision.innerHTML = `
                    <p class="">El envio de su &#x1F4E6;, por ${UI.emojiEnvio(transport_method)} genero:
                        <br>
                        <strong>${carbon_kg}Kg de CO2</strong>
                        <br>
                    </p>
                `;
            } else if (carbon_kg > 1 && carbon_kg < 10) {
                emision.classList.add('text-center', 'mx-auto', 'emisionMedia', 'd-flex', 'align-items-center', 'justify-content-center','animacion');
                emision.innerHTML = `
                    <p class="">El envio de su &#x1F4E6;, por ${UI.emojiEnvio(transport_method)} genero:
                        <br>
                        <strong>${carbon_kg}Kg de CO2</strong>
                        <br>
                    </p>
                `;
            } else {
                emision.classList.add('text-center', 'mx-auto', 'emisionAlta', 'd-flex', 'align-items-center', 'justify-content-center','animacion');
                emision.innerHTML = `
                    <p class="">El envio de su &#x1F4E6;, por ${UI.emojiEnvio(transport_method)} genero:
                        <br>
                        <strong>${carbon_kg}Kg de CO2</strong>
                        <br>
                    </p>
                `;
            }
            UI.resultadoCarbonEnvio.appendChild(emision);
        } catch (error) {
            console.error(error);
        }

    }
}

export default CarbonInterfaceEnvio;