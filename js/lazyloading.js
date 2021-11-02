var video_wrapper = document.getElementsByClassName('play-youtube-video');
//var video_wrapper = $('.play-youtube-video');
//Fuente
//https://medium.com/@ryanlebel/speed-up-page-load-time-c6b9148d0a2
//Modificado By C3rberus

// if (video_wrapper.length) { // If user clicks on the video wrapper load the video.
//     $('.play-youtube-video').on('click', function () {
//         /* Dynamically inject the iframe on demand of the user.
//          Pull the youtube url from the data attribute on the wrapper element. */
//          console.log(video_wrapper.data('yt-url'));
//          console.log(video_wrapper.data('id'));
//         video_wrapper.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' + video_wrapper.data('yt-url') + '"></iframe>');
//     });
// }

cargarEventListeners();

function cargarEventListeners() {
    //getElementsByClassName nos devuelve un array o una coleccion de todas las coincidencias
    //Entonces agregamos un listener a cada una de esas coincidencias
    Array.from(video_wrapper).forEach(function(element) {
        element.addEventListener('click', agregarVideo);
      });
}

function agregarVideo(e){
    e.preventDefault();
    const video = e.target.parentElement;
    const data_id = video.id;
    video.innerHTML = '<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' + video.dataset.ytUrl + '"></iframe>'
}