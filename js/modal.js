function showModal(msg,icon){
    $("#modal-general #modalMensaje").text(msg);
    $("#modal-general .mensaje").find("span").attr("class",icon);
    $("#modal-general").fadeIn();
}
