function showModal(state,title,text){
    $(".modal-generic .modal-generic__title").addClass(state);
    $(".modal-generic .modal-generic__title").text(title);
    $(".modal-generic .modal-generic__text").text(text);
    $(".modal-generic").fadeIn();
}


/*Modal para RADICACIÓN MANUAL*/
$("#send_btn").click(function (){
    showModal("nope","¡Gracias!","El envío de la información ha sido completado.");
});

/*Modal para CARGUE DE ARCHIVOS*/
$(".upload-file__btn").click(function (){
    showModal("error","No se pudo llevar a cabo la solicitud","inténtelo más tarde.");
});

$(".exit-modal").click(function (){
    $(".modal-generic").fadeOut();
    $(".modal-generic .modal-generic__title").removeClass("error");
});
