jQuery(document).ready(function($){

	//Llamando a los filtros:
   
    $('#FiltroCategoria').on('change', function (e) {
    	var opcion = $(this).val();
        alert('Se está filtrando por: '+ opcion);
    });

    $('#FiltroMarca').on('change', function (e) {
    	var opcion = $(this).val();
        alert('Se está filtrando por: '+ opcion);
    });


    //Iniciando la tabla Categorías (Pluggin Datatable JQUERY)
   	
   	$('#tabla-ListaCategorias').DataTable({
    	  "language": {
             	"sProcessing":     "Procesando...",
			    "sLengthMenu":     "Mostrar &nbsp;_MENU_ &nbsp;registros",
			    "sZeroRecords":    "No se encontraron resultados",
			    "sEmptyTable":     "Ningún dato disponible en esta tabla",
			    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			    "sInfoPostFix":    "",
			    "sSearch":         "Buscar:",
			    "sUrl":            "",
			    "sInfoThousands":  ",",
			    "sLoadingRecords": "Cargando...",
			    "oPaginate": {
			        "sFirst":    "Primero",
			        "sLast":     "Último",
			        "sNext":     "Siguiente",
			        "sPrevious": "Anterior"
			    },
			    "oAria": {
			        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			    }			  
        },
        "order": [],
			    "columnDefs": [ {
			    	"orderable": false,
			      	"targets"  : [0,3]//'no-sort' -> ths -> con clase no sort
			      
		}]
    });

   	//Control de ventana Modal - Nueva Categoría
   	var modalNewCategory = document.getElementById('modal-editar-categoria');

		
	// Cuando el usuario hace click al botón editar 	

	$('.edita-categoria').click(function(){
		modalNewCategory.style.display = "block";
		var parent = $(this).parents('tr');
		//Capturamos el id
		var idCategoria = parent.data('idcate');
		//Hacer una consulta usando el id,ajax y el controlador

		//Editar usando datos de la respuesta
		$('#txtId-editarCategoria').val(idCategoria);
		$('#txtNombre-editarCategoria').val('Laptops');
		$('#txtDescripcion-editarCategoria').val('Computadoras portátiles, netbooks, notebooks y macs.');
	});
	
	

	// Get the <span> element that closes the modal
	var spanNewCategory = document.getElementsByClassName("close")[0];

	
	
	// Cuando el usuario clickea en <span> (x), cierra el modal
	$('#cerraModalCategoria').click(function(){
		modalNewCategory.style.display = "none";
	});


	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modalNewCategory) {
	        modalNewCategory.style.display = "none";
	    }
	}


	//Elimina categoría
	$('.elimina-categoria').click(function(){	
		var parent = $(this).parents('tr'); // Fila clickeada
		var table = $('#tabla-ListaCategorias').DataTable();
		//Capturamos el id
		var idCategoria = parent.data('idcate');
		//Hacemos el delete en la bd usando el id,ajax y el controlador
		alert("\"DELETE FROM CATEGORIAS WHERE ID_CATE = "+idCategoria+"\"");		


		//Ocultamos la fila		
		table.row(parent).remove().draw();
	});
    

        
});


