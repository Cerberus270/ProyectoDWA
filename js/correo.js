const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', enviarCorreo);

function enviarCorreo(e) {
    e.preventDefault();
    emailjs.sendForm('service_prmtfs5', 'template_5v27qv9', '#formularioContacto')
    .then(response => {
       console.log('SUCCESS!', response.status, response.text);
       alert('Enviado Correctamente');
    }, error => {
       console.log('FAILED...', error);
    });
}