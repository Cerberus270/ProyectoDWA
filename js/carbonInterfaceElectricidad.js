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
                    electricity_unit: "mwh",
                    electricity_value: 42,
                    country: "us",
                    state: "fl"
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
                        carbon_mt
                    }
                }
            } = resultado;

            UI.limpiarChildrens(UI.mensajeCarbonEl);
            UI.limpiarChildrens(UI.resultadoCarbonEl);
            UI.resultadoCarbonEl.textContent = carbon_mt;
        } catch (error) {
            console.error(error);
        }

    }
}

export default CarbonInterfaceElectricidad