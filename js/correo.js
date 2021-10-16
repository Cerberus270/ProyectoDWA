const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', enviarCorreo);

function enviarCorreo(e) {
   e.preventDefault();
   emailjs.sendForm('service_prmtfs5', 'template_ry0eoo9', '#formularioContacto')
   .then(response => {
       console.log('SUCCESS!', response.status, response.text);
      //Sweet Alert
      Swal.fire({
         title: 'Excelente',
         text: 'Datos Enviados Correctamente',
         icon: 'success',
      });
      //Reset formulario
      //formulario.reset()
   }, error => {
       console.log('FAILED...', error);
   });
}