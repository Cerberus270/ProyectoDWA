class CalidadAire {
    constructor(ciudad){
        this.ciudad = ciudad;
    }
    consultarAPI(){
        const url = `http://api.waqi.info/feed/${this.ciudad}/?token=2464eb8087a61b8528cc77bf2a57a34219a68a1a`;

        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            if(resultado.status === 'ok'){
                console.log(resultado);
                const {
                    data: {
                        aqi
                    }   
                } = resultado;
                console.log(aqi);
            } else {
                console.error('Se ha ingresado una ciudad no valida');
            }
        })
    }
}

export default CalidadAire;