// -------------- Validar el tipo de radicación -------------------

$(".radica-boxes__radio").click(function(){
    if($(this).prop("checked") == true && $(this)[0].id == "itemUpload"){
        $(".upload-file").removeAttr("hidden")
        $(".rad-manual").attr("hidden","hidden")
    }else{
        $(".rad-manual").removeAttr("hidden")
        $(".upload-file").attr("hidden","hidden")
    }
})

// -------------- Recaptcha -------------------

function onRecaptchaLoadCallback() {
    var clientId = grecaptcha.render('captchav4', {
        'sitekey': '6LdvEmobAAAAAIH5HUTOt3ThiKgzI4zDE78spEpR',
        'badge': 'inline',
        'size': 'invisible'
    });

    grecaptcha.ready(function() {
        grecaptcha.execute(clientId, {
            action: 'action_name'
        })
            .then(function(token) {
                // Verify the token on the server.
            });
    });
}

// -------------- Validar canal de radicación "ATH" -------------------

$("#canal_radicacion").change(function () {

    /* Variables de campo reclamante*/

    let valReclamanteOcc = "bank_occidente";
    let textReclamanteOcc = "Banco de Occidente";
    let valReclamanteBog = "bank_bogota";
    let textReclamanteBog = "Banco de Bogotá";
    let valReclamanteVill = "bank_villas";
    let textReclamanteVill = "Banco AV Villas";
    let valReclamantePop = "bank_popular";
    let textReclamantePop = "Banco Popular";


    if ($(this).val() == "ath"){
        /*campo reclamante*/

        $('#reclamante').append(
            $('<option>').val([valReclamanteOcc]).text(textReclamanteOcc),
            $('<option>').val(valReclamanteBog).text(textReclamanteBog),
            $('<option>').val(valReclamanteVill).text(textReclamanteVill),
            $('<option>').val(valReclamantePop).text(textReclamantePop)
        )

        /*campo Datos de abono*/

        $('#datos_abono').append(
            $('<option>').val("descuento_compensa").text("Descuento por compensación")
        )

        /*campo Tipo de solicitud*/

        $('#tipo_solicitud').append(
            $('<option>').val("ajuste").text("Ajuste")
        )
    }else{
        /*Quitar campo reclamante*/

        $.each([ valReclamanteOcc, valReclamanteBog, valReclamanteVill, valReclamantePop ], function( index, value ) {
            $("#reclamante option[value='"+ value +"']").remove();
        });
        /*Quitar datos de abono*/

        $("#datos_abono option[value='descuento_compensa']").remove();

        /*Quitar Tipo solicitud*/

        $("#tipo_solicitud option[value='ajuste']").remove();
    }
});

$("#datos_abono").change(function () {
    if ($(this).val() == "pago_terceros"){
        $(".pago_terceros").fadeIn();
    }else{
        $(".pago_terceros").hide();
    }

    if ($(this).val() == "reintegro_occ"){
        $(".reintegro_cuenta").fadeIn();
    }else{
        $(".reintegro_cuenta").hide();
    }
});

$("#tipologia").change(function () {
    if ($(this).val() == "tipo_otros"){
        $(".tipologia_otros").fadeIn();
    }else{
        $(".tipologia_otros").hide();
    }
});

$("#corresp_trans").change(function () {
    if ($(this).val() == "otros"){
        $(".corresponsal_trans").fadeIn();
    }else{
        $(".corresponsal_trans").hide();
    }
});

// -------------- Validar Maxlenght -------------------

var maxLength = 400;
$(".textarea__look").keyup(function() {
    var textlen = maxLength - $(this).val().length;
    $(this).parents(".form-group_item").find(".val_comm").text(textlen);
});

