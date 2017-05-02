jQuery(document).ready(function($){


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
			    "searchPlaceholder": "Búsqueda por nombre",			     
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
			    	//bSearchable -> true en la columna que quiero buscar
			      	"targets"  : [0,3]//'no-sort' -> ths -> con clase no sort			      
					}],
		"bLengthChange": false,//quita el control de filas por página
		"bFilter": true, //Quitar la función búsqueda y la esconde
		"bInfo": false

    });

   
   //Esconder la barra de búsqueda que trae datatables por default
   $('#tabla-ListaCategorias_filter').parent().parent().hide();

   	//Búsqueda por nombre de categoría
   	$('#busquedaNombreCategoria').on( 'keyup', function () {

   		var datosBuscados = $('#busquedaNombreCategoria').val();   		
   		var table = $('#tabla-ListaCategorias').DataTable();	

		table.column(1).search(datosBuscados).draw();
		
	} );


   	//Cuando el usuario hace click al botón registrar Categoría
   	
	$('#btnRegistrarCategoria').click(registrarCategoria);


	function registrarCategoria(){
		//Capturamos los valores de los input del modal Registra Categoría
		var nombreCate = $('#txtNombre-registrarCategoria').val();
		var descCate = $('#txtDescripcion-registrarCategoria').val();
		var table = $('#tabla-ListaCategorias').DataTable();


		//Validamos que el campo nombre no esté vacio
		
		if(nombreCate == ''){
			
			//Mostramos el mensaje de error, usando sweetalert2
			swal({
				    title: 'Error',
					text: 'El nombre de categoría no puede estar vacio.',
					type: 'error',
			});


		}else{

			//Compruebo si existe el nombre de la categoría en mi BD
			if(existeNombreCategoria()){
				swal({
				    title: 'Error',
					text: 'El nombre de categoría ingresada ya se encuentra registrado.',
					type: 'error',
				});
			}else{
				//Registramos la categoría mediante ajax
				alert(nombreCate + ' - '+ descCate);


				//Enviamos un mensaje de confirmación
				swal({
						    title: 'Realizado!',
							text: 'La categoría "Laptops" fue registrada con éxito.',
							type: 'success',
						  });

				//Limpio las cajas de texto, y Luego de registrar Escondo el modal
				$('#txtNombre-registrarCategoria').val("");
				$('#txtDescripcion-registrarCategoria').val("");
				$('#modal-registrarCategorias').modal('hide');
				//Renderizamos nuevamente la tabla	
				table.draw('full-reset'); // refrescar la tabla :P
			}


		}


	}

	$('.edita-categoria').click(buscarCategoria);
	
	
	function buscarCategoria(){
		var parent = $(this).parents('tr');
		//Capturamos el id
		var idCategoria = parent.data('idcate');
		//Hacer una consulta usando el id,ajax y el controlador

		//Llenamos los input usando datos de la respuesta
		$('#txtId-editarCategoria').val(idCategoria);
		$('#txtNombre-editarCategoria').val('Laptops');
		$('#txtDescripcion-editarCategoria').val('Computadoras portátiles, netbooks, notebooks y macs.');


		
	}



	$('#btnEditarCategoria').click(editarCategoria);

	function editarCategoria(){

		//Capturamos datos de los input del modal Editar Categoria
		var id = $('#txtId-editarCategoria').val();
		var nomCate = $('#txtNombre-editarCategoria').val();
		var descCate = $('#txtDescripcion-editarCategoria').val();
		var table = $('#tabla-ListaCategorias').DataTable();

		//Validamos que el campo nombre no esté vacio
		
		if(nomCate == ''){
			
			//Mostramos el mensaje de error, usando sweetalert2
			swal({
				    title: 'Error',
					text: 'El nombre de categoría no puede estar vacio.',
					type: 'error',
			});


		}else{
			//Modal de confirmación
			swal({
			  title: '¿Estás seguro?',
			  text: 'Actualizando los datos de la categoría con id: "'+id+'"',
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Aceptar',
			  cancelButtonText: 'Cancelar'
			}).then(function () {

				//*********************************************
				//Ejecutamos la acualización mediante ajax
				alert(id+' '+ nomCate+' '+descCate);

				//Luego de editar escondo el modal
				$('#modal-editarCategorias').modal('hide');
				//Renderizamos nuevamente la tabla	
				table.draw('full-reset') // refrescar la tabla :P

				//*********************************************
				//Envio la alerta con sweetalert2
				  swal({
				    title: 'Actualizada!',
					text: 'La categoría fue actualizada con éxito.',
					type: 'success',
				  });

			});

			
		}

	}


	


	//Elimina categoría
	$('.elimina-categoria').click(eliminarCategoria);
    
    function eliminarCategoria(){
   	

    	var parent = $(this).parents('tr'); // Fila clickeada
		var table = $('#tabla-ListaCategorias').DataTable();
		//Capturamos el id
		var idCategoria = parent.data('idcate');


			swal({
			  title: '¿Estás seguro?',
			  text: 'Eliminando la categoría "'+idCategoria+'"',
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Aceptar',
			  cancelButtonText: 'Cancelar'
			}).then(function () {

				//*********************************************
				//Programo la eliminación

				//Hacemos el delete en la bd usando el id,ajax y el controlador
				//
				//
				//alert("\"DELETE FROM CATEGORIAS WHERE ID_CATE = "+idCategoria+"\"");	
				//Ocultamos la fila		
				table.row(parent).remove().draw();
				

				//*********************************************
				//Envio la alerta con sweetalert2
				  swal({
				    title: 'Eliminada!',
					text: 'La categoría fue eliminada con éxito.',
					type: 'success',
				  });

			}, function (dismiss) {
			  // dismiss can be 'cancel', 'overlay',
			  // 'close', and 'timer'
			  if (dismiss === 'cancel') {
			    swal(
			      'Cancelled',
			      'Your imaginary file is safe :)',
			      'error'
			    )
			  }
			});

		
    }


    //Comprueba si el nombre de una categoria ya existe en la bd
    function existeNombreCategoria(nombre){
    	var validacion = false;
    	//Llamar a la función que comprobará si existe una categoria con el nombre enviado(via ajax)
    	
    	return validacion;
    }

        
});


