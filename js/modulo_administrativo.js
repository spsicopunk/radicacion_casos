/* ------------------- Datatable -------------------- */

$('table').dataTable({
    responsive: true,
    "pageLength": 3,
    language: {
        zeroRecords:    "No se encontraron datos",
        sSearch: "<label class='modulo-adm__label'>Buscar Cliente</label>",
        paginate: {
            next: '>',
            previous: '<'
        }
    }
});

/*Estilos para el filtro de busqueda*/

$("#DataTables_Table_0_filter input").attr("placeholder","Busca por nombre o cédula")
$("<span class='icon-search'></span>").appendTo("#DataTables_Table_0_filter > label")
$('<div class="btns_group"><a href="#" class="btns btns_primary modal-generic__agregar">Crear Usuario <span class="icon-login"></span></a><a href="/Radicacion_casos.html" target="_blank" class="btns_link modal-generic__link">Radicar casos ></a></div>').appendTo("#DataTables_Table_0_filter")


/* -------------------- Modals --------------------- */


/* Agregar Usuario */
$(".modal-generic__agregar").click(function (){
    showModal("modal-agregar", "nope","Agregar Usuario","Agrega el tipo de usuario correspondiente a la radicación");
});
/* Editar Usuario */
$(".modulo-adm__edit").click(function (){
    showModal("modal-editar", "nope","Editar Usuario","Modifica la siguiente información");
    $("#edit-correo_adm, #edit-name_client, #edit-cedula, #edit-celular_adm").focus()
});

/* Agregar Exitoso */
$(".save-add").click(function (){
    showModal("modal_mesagge", "nope","Proceso Exitoso","El usuario se ha agregado exitosamente.");
});
/* Editar Exitoso */
$(".save-edit").click(function (){
    showModal("modal_mesagge", "nope","Proceso Exitoso","Se ha editado exitosamente el usuario.");
});
