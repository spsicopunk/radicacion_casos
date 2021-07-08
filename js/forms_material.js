// -------------- Validación de los input material ---------------

$('.input_outline').focusin(function() {
    $('#'+ $(this)[0].id + ' ~ label').animate({
        'fontSize': '14px',
        'top': '-0.7rem',
        'padding': '0px 4px'
    }, 80);
});
$('.input_outline').focusout(function() {
    if ($(this).val() === '') {
        $('#'+ $(this)[0].id + ' ~ label').animate({
            'fontSize': '16px',
            'top': '10px',
            'padding': 0
        }, 80);
        $(this).removeClass("fill_active");
    }else{
        $(this).addClass("fill_active");
    }
});

// --------------- validación de select material ---------------

$(".select-text").change(function(e){
    $(this).addClass("fill_active");
});

// --------------- Datepicker --------------------

//Obtener dia presente

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;

function datepickerPow(classId){
    $( classId ).datepicker({
        showButtonPanel: false,
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        maxDate: today,
        yearRange: "c-100:c+10",
        dayNamesMin : [ "D", "L", "M", "M", "J", "V", "S" ],
        defaultDate: +7,
        onClose:function(){$(this).addClass("fill_active").focusin()},
        buttonImageOnly: true
    });
}


//Configuración de idioma jquery datepicker

$.datepicker.regional['ES'] = {
    clearText: 'Effacer', clearStatus: '',currentText: 'Fecha Actual',
    currentStatus: 'Voir le mois courant',
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
        'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthStatus: 'Voir un autre mois', yearStatus: 'Voir un autre année',
    weekHeader: 'Sm', weekStatus: '',
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    dayNamesMin: ['Dom','Lu','Ma','Mie','Jue','Vie','Sab'],
    dayStatus: 'Utiliser DD comme premier jour de la semaine', dateStatus: 'Choisir le DD, MM d',
    dateFormat: 'dd/mm/yy', firstDay: 0,
    initStatus: 'Choisir la date', isRTL: false};
$.datepicker.setDefaults($.datepicker.regional['ES']);

//invocación de datepicker dinamico

datepickerPow(".datepicker-input")
datepickerPow(".datepicker-input2")

// ------------------ Input file funcionalidad ------------------------

/*input file function*/

document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");

button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
button.addEventListener( "click", function( event ) {
    fileInput.focus();
    return false;
});
fileInput.addEventListener( "change", function( event ) {
    the_return.innerHTML = this.value;
});

