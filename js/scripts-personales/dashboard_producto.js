jQuery(document).ready(function($){

		//Script Nuevo Producto
		
    	//Iniciando el CKeditor
    	CKEDITOR.replace('producto-descripcion');

    	
    	//Cuando se hace click en el botón btn-editar-imagen-1(Asignamos el evento)
    	$('#btn-editar-imagen-1').click(agregarImagen1);
    	
	
    	function agregarImagen1(){
    		 $('#input-imagen-1').click();    		 
    	}


    	//Cuando se hace click en el botón btn-editar-imagen-2(Asignamos el evento)
    	$('#btn-editar-imagen-2').click(agregarImagen2);
    	
	
    	function agregarImagen2(){
    		 $('#input-imagen-2').click();
    	}

    	//Cuando se hace click en el botón btn-editar-imagen-3(Asignamos el evento)
    	$('#btn-editar-imagen-3').click(agregarImagen3);
    	
	
    	function agregarImagen3(){
    		 $('#input-imagen-3').click();
    	}

    	//Cuando se hace click en el botón btn-editar-imagen-4(Asignamos el evento)
    	$('#btn-editar-imagen-4').click(agregarImagen4);
    	
	
    	function agregarImagen4(){
    		 $('#input-imagen-4').click();
    	}

    	//Cuando se hace click en el botón btn-editar-imagen-5(Asignamos el evento)
    	$('#btn-editar-imagen-5').click(agregarImagen5);
    	
	
    	function agregarImagen5(){
    		 $('#input-imagen-5').click();
    	}

    	//Cuando se hace click en el botón btn-editar-imagen-6(Asignamos el evento)
    	$('#btn-editar-imagen-6').click(agregarImagen6);
    	
	
    	function agregarImagen6(){
    		 $('#input-imagen-6').click();
    	}




    	//Cada vez que suben un archivo: input-imagen-1
    
   		$('#input-imagen-1').on("change",subirImagenProducto1);

   		function subirImagenProducto1(){
   			
   			 var inputFile = $('#input-imagen-1');
    		 var files = inputFile[0].files;

    		 //Cargando la imagen
    		 var reader = new FileReader();
    		 // Función que se ejecutará cuando se cargue el file
		     reader.onload = function(event) {
					$('#imagen-producto-1').attr("src",event.target.result);     
		     };

		      // Lectura del url del file
		     reader.readAsDataURL(files[0]);

   		}

   		//Cada vez que suben un archivo: input-imagen-2
    
   		$('#input-imagen-2').on("change",subirImagenProducto2);

   		function subirImagenProducto2(){
   			
   			 var inputFile = $('#input-imagen-2');
    		 var files = inputFile[0].files;

    		 //Cargando la imagen
    		 var reader = new FileReader();
    		 // Función que se ejecutará cuando se cargue el file
		     reader.onload = function(event) {
					$('#imagen-producto-2').attr("src",event.target.result);     
		     };

		      // Lectura del url del file
		     reader.readAsDataURL(files[0]);

   		}

   		//Cada vez que suben un archivo: input-imagen-3
    
   		$('#input-imagen-3').on("change",subirImagenProducto3);

   		function subirImagenProducto3(){
   			
   			 var inputFile = $('#input-imagen-3');
    		 var files = inputFile[0].files;

    		 //Cargando la imagen
    		 var reader = new FileReader();
    		 // Función que se ejecutará cuando se cargue el file
		     reader.onload = function(event) {
					$('#imagen-producto-3').attr("src",event.target.result);     
		     };

		      // Lectura del url del file
		     reader.readAsDataURL(files[0]);

   		}

   		//Cada vez que suben un archivo: input-imagen-4
    
   		$('#input-imagen-4').on("change",subirImagenProducto4);

   		function subirImagenProducto4(){
   			
   			 var inputFile = $('#input-imagen-4');
    		 var files = inputFile[0].files;

    		 //Cargando la imagen
    		 var reader = new FileReader();
    		 // Función que se ejecutará cuando se cargue el file
		     reader.onload = function(event) {
					$('#imagen-producto-4').attr("src",event.target.result);     
		     };

		      // Lectura del url del file
		     reader.readAsDataURL(files[0]);

   		}

   		//Cada vez que suben un archivo: input-imagen-5
    
   		$('#input-imagen-5').on("change",subirImagenProducto5);

   		function subirImagenProducto5(){
   			
   			 var inputFile = $('#input-imagen-5');
    		 var files = inputFile[0].files;

    		 //Cargando la imagen
    		 var reader = new FileReader();
    		 // Función que se ejecutará cuando se cargue el file
		     reader.onload = function(event) {
					$('#imagen-producto-5').attr("src",event.target.result);     
		     };

		      // Lectura del url del file
		     reader.readAsDataURL(files[0]);

   		}

   		//Cada vez que suben un archivo: input-imagen-6
    
   		$('#input-imagen-6').on("change",subirImagenProducto6);

   		function subirImagenProducto6(){
   			
   			 var inputFile = $('#input-imagen-6');
    		 var files = inputFile[0].files;

    		 //Cargando la imagen
    		 var reader = new FileReader();
    		 // Función que se ejecutará cuando se cargue el file
		     reader.onload = function(event) {
					$('#imagen-producto-6').attr("src",event.target.result);     
		     };

		      // Lectura del url del file
		     reader.readAsDataURL(files[0]);

   		}


   		//Cada vez que hacen click en el boton Borrar -> btn-borrar-imagen-1
   		$("#btn-borrar-imagen-1").click(borrarImagen1);

   		function borrarImagen1(){
   			//Limpio el input
   			$('#input-imagen-1').val("");
   			//Asigno la imagen por default
   			$('#imagen-producto-1').attr("src","Imagenes/Image.jpg");   

   		}


   		//Configuración de los modales
   		$('#btn-detalles-imagen-1').click(obtenerModal1);

   		function obtenerModal1(){
   			
   			var srcImagen = $('#imagen-producto-1').attr("src");

   			if(srcImagen != 'Imagenes/Image.jpg'){

   				$('#modal-personal').css("display","block");
	   			//Agregando la imagen al contenido del modal	   			
			    $('#modal-personal-contenido').attr("src",srcImagen);
   			}else{
   				alert('No tiene ninguna imagen seteada!');
   			}
	

   		}
   		
   		$('#cerrar-modal').click(function(){
   			$('#modal-personal').css("display","none");
   		});















});