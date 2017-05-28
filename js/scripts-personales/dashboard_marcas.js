jQuery(document).ready(function($){

    //Iniciando la tabla Marcas (Pluggin Datatable JQUERY)
   	
   	$('#tabla-ListaMarcas').DataTable({
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
   $('#tabla-ListaMarcas_filter').parent().parent().hide();

   	//Búsqueda por nombre de marca
   	$('#busquedaNombreMarca').on( 'keyup', function () {

   		var datosBuscados = $('#busquedaNombreMarca').val();   		
   		var table = $('#tabla-ListaMarcas').DataTable();	

		table.column(1).search(datosBuscados).draw();
		
	} );

	//Cuando clickeo el boton que abre el modal registrar Marca:
	$('#registra-marca').click(function(){
		//Resetamos algunos campos
		$('#img-registrar-marca-logotipo').attr("src","Imagenes/Image.jpg");     
		$('.input-texto-registrar').css("background","#CFCECE");
		$('#input-textoRegistrarMarca').text("subir logotipo");
		$('#inputLogo-registrarMarca').val("");

	});


   	//Cuando el usuario hace click al botón registrar Marca
   	
	$('#btnRegistrarMarca').click(registrarMarca);


	function registrarMarca(){
		//Capturamos los valores de los input del modal Registra Marca
		var nombreMar = $('#txtNombre-registrarMarca').val();
		var descMar = $('#txtDescripcion-registrarMarca').val();
		var table = $('#tabla-ListaMarca').DataTable();
		var inputLogoTipo = $('#inputLogo-registrarMarca')[0].files;
		var formulario = $('#form-RegistrarMarca');


		//Validamos que el campo nombre no esté vacio
		
		if(nombreMar == ''){
			
			//Mostramos el mensaje de error, usando sweetalert2
			swal({
				    title: 'Error',
					text: 'El nombre de la marca no puede estar vacio.',
					type: 'error',
			});


		}else if(inputLogoTipo.length  == 0){

			//Mostramos el mensaje de error, usando sweetalert2
			swal({
				    title: 'Error',
					text: 'Debe subir un imagen de un Logotipo de la marca.',
					type: 'error',
			});

		}else{

			//Compruebo si existe el nombre de la marca en mi BD
			if(existeNombreMarca()){
				swal({
				    title: 'Error',
					text: 'El nombre de la marca ingresada ya se encuentra registrado.',
					type: 'error',
				});
			}else{
				//Registramos la marca mediante ajax
				alert(nombreMar + ' - '+ descMar);
				var formData = new FormData(formulario);//Puedo enviar mi formulario o agregar 1 x 1 los datos
				//formData.append("variable","valor");


				//Enviamos un mensaje de confirmación
				swal({
						    title: 'Realizado!',
							text: 'La marca "Razer" fue registrada con éxito.',
							type: 'success',
						  });

				//Limpio las cajas de texto, y Luego de registrar Escondo el modal
				$('#txtNombre-registrarMarca').val("");
				$('#txtDescripcion-registrarMarca').val("");
				$('#modal-registrarMarcas').modal('hide');
				//Renderizamos nuevamente la tabla	
				table.draw('full-reset'); // refrescar la tabla :P
			}


		}


	}

	$('.edita-marca').click(buscarMarca);
	
	
	function buscarMarca(){		

		//Resetamos algunos campos
		$('.input-texto-editar').css("background","#CFCECE");
		$('#input-textoEditarMarca').text("subir logotipo");


		var parent = $(this).parents('tr');
		//Capturamos el id
		var idMarca = parent.data('idmar');
		var validacionLogo = false; //Si sigue en false es que no editaron la foto

		//Capturo la ruta de la imagen, y la cargo al input
		//value="C:\\WebServers\\Gazeta\\images\\29\\Banner.gif" <-
		//$('.input-texto-editar').val('Marca_1.jpg');
		$('.input-texto-editar').css("background","#1abc9c");
		$('#input-textoEditarMarca').text("Marca_1.jpg");
		$('#img-editar-marca-logotipo').attr("src","Imagenes/Marcas/Marca_1.jpg");   

		//Hacer una consulta usando el id,ajax y el controlador

		//Llenamos los input usando datos de la respuesta
		$('#txtId-editarMarca').val(idMarca);
		$('#txtNombre-editarMarca').val('Razer');
		$('#txtDescripcion-editarMarca').val('Marca de perifericos y laptop gamers.');

		
	}



	$('#btnEditarMarca').click(editarMarca);

	function editarMarca(){

		//Capturamos datos de los input del modal Editar Marca
		var id = $('#txtId-editarMarca').val();
		var nomMar = $('#txtNombre-editarMarca').val();
		var descMar = $('#txtDescripcion-editarMarca').val();
		var table = $('#tabla-ListaMarcas').DataTable();

		

		//Validamos que el campo nombre no esté vacio
		
		if(nomMar == ''){
			
			//Mostramos el mensaje de error, usando sweetalert2
			swal({
				    title: 'Error',
					text: 'El nombre de la marca no puede estar vacio.',
					type: 'error',
			});


		}else{
			//Modal de confirmación
			swal({
			  title: '¿Estás seguro?',
			  text: 'Actualizando los datos de la marca con id: "'+id+'"',
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Aceptar',
			  cancelButtonText: 'Cancelar'
			}).then(function () {

				//*********************************************
				//Ejecutamos la acualización mediante ajax
				alert(id+' '+ nomMar+' '+descMar);

				//Luego de editar escondo el modal
				$('#modal-editarMarcas').modal('hide');
				//Renderizamos nuevamente la tabla	
				table.draw('full-reset') // refrescar la tabla :P

				//*********************************************
				//Envio la alerta con sweetalert2
				  swal({
				    title: 'Actualizada!',
					text: 'La marca fue actualizada con éxito.',
					type: 'success',
				  });

			});

			
		}

	}


	


	//Elimina marca
	$('.elimina-marca').click(eliminarMarca);
    
    function eliminarMarca(){
   	

    	var parent = $(this).parents('tr'); // Fila clickeada
		var table = $('#tabla-ListaMarcas').DataTable();
		//Capturamos el id
		var idMarca = parent.data('idmar');


			swal({
			  title: '¿Estás seguro?',
			  text: 'Eliminando la marca con id: "'+idMarca+'"',
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
				//alert("\"DELETE FROM MARCAS WHERE ID_MAR = "+idMarca+"\"");	
				//Ocultamos la fila		
				table.row(parent).remove().draw();
				

				//*********************************************
				//Envio la alerta con sweetalert2
				  swal({
				    title: 'Eliminada!',
					text: 'La marca fue eliminada con éxito.',
					type: 'success',
				  });

			});

		
    }


    //Comprueba si el nombre de una marca ya existe en la bd
    function existeNombreMarca(nombre){
    	var validacion = false;
    	//Llamar a la función que comprobará si existe una marca con el nombre enviado(via ajax)
    	
    	return validacion;
    }


    //Cada vez que suben un archivo: (Logotipo Registrar Marca)
    
    $('#inputLogo-registrarMarca').on("change",subirLogotipoMarca_Registrar);

    function subirLogotipoMarca_Registrar(e){
    	
    	var inputFile = $('#inputLogo-registrarMarca');
    	var files = inputFile[0].files;

    	//Función para un input file multiple
    	if(files.length>=2){
    		//Si fuera un input multiple aquí haría programación
    	}else if(files.length==1){
    		var filename = e.target.value.split('\\').pop();
    		$('#input-textoRegistrarMarca').text(filename);
    		$('.input-texto-registrar').css("background","#1abc9c");


    		//Cargando la imagen
    		var reader = new FileReader();

		      // Función que se ejecutará cuando se cargue el file
		      reader.onload = function(event) {
					$('#img-registrar-marca-logotipo').attr("src",event.target.result);     
		      };

		      // Lectura del url del file
		      reader.readAsDataURL(files[0]);


    		//$('.input-texto').css("border-bottom","4px solid #d99221");
    	}else{

    	}

    }


    //Cada vez que suben un archivo: (Logotipo Editar Marca)
    
    $('#inputLogo-editarMarca').on("change",subirLogotipoMarca_Editar);

    function subirLogotipoMarca_Editar(e){
    	

    	var inputFile = $('#inputLogo-editarMarca');
    	var files = inputFile[0].files;

    	//Función para un input file multiple
    	if(files.length>=2){
    		//Si fuera un input multiple aquí haría programación
    	}else if(files.length==1){
    		var filename = e.target.value.split('\\').pop();
    		$('#input-textoEditarMarca').text(filename);
    		$('.input-texto-editar').css("background","#1abc9c");
    		//$('.input-texto').css("border-bottom","4px solid #d99221");
    		
    		//Cargando la imagen
    		var reader = new FileReader();

		      // Función que se ejecutará cuando se cargue el file
		      reader.onload = function(event) {
					$('#img-editar-marca-logotipo').attr("src",event.target.result);     
		      };

		      // Lectura del url del file
		      reader.readAsDataURL(files[0]);


    	}else{

    	}

    }
        
});


