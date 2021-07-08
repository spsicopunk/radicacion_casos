function showModal(classCss,state,title,text){
    $(".modal-generic").fadeOut();
    $("."+classCss+" .modal-generic__title").addClass(state);
    $("."+classCss+" .modal-generic__title").text(title);
    $("."+classCss+" .modal-generic__text").text(text);
    $("."+classCss+"").fadeIn();
}


/*Modal para RADICACIÓN MANUAL*/
$("#send_btn").click(function (){
    showModal("modal-generic", "nope","¡Gracias!","El envío de la información ha sido completado.");
});

/*Modal para CARGUE DE ARCHIVOS*/
$(".upload-file__btn").click(function (){
    showModal("modal-generic","error","No se pudo llevar a cabo la solicitud","inténtelo más tarde.");
});

$(".exit-modal").click(function (){
    $(".modal-generic").fadeOut();
    $(".modal-generic .modal-generic__title").removeClass("error");
});


/* ------------------------------ Login ------------------------------- */

/* Olvido de contraseña */
$(".login-radicacion__forgot").click(function (){
    showModal("modal-generic", "nope","¿Olvido su clave?","Comuniquese con el administrador de corresponsal para reestablecer su clave.");
});

