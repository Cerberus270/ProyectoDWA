$(window).on('load',function () {
    // Animaton when load is complete
    $(".loader").fadeOut("slow");
    let tl = gsap.timeline({

    })
    tl.fromTo("#apiFondo", {
        opacity: 0,
        y: -200,
    }, {
        delay: 0.5,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'bounce',
    });
});