jQuery(document).ready(function($){

		//Editar Producto

		//Iniciando los contadores
		 $('.contador').countTo();

		
    	//Iniciando el CKeditor
    	var editor = CKEDITOR.replace('producto-descripcion');

    	 editor.setData('<ul>'+
    	 					'<li><b>MARCA:</b> RAZER</li>'+
							'<li><b>MODELO:</b> ADARO IN-EARS BLACK GREEN</li>'+
							'<li><b>COLOR:</b> Negro y Verde</li>'+
							'<li><b>TAMAÑO DE ALTAVOZ:</b> 10 mm de neodimio</li>'+
							'<li><b>CABLE:</b> 1.3 m, plano antienredos</li>'+
							'<li><b>RESPUESTA DE FRECUENCIA:</b> 20 a 20.000 Hz</li>'+
						'</ul>');

    	//Click en el botón eliminar Producto
    	$('#btnEliminarProducto').click(eliminarProducto);

    	function eliminarProducto(){

    		alert(editor.getData());
    		/*alert(editor.getData().length+' bytes');*/
    	}
    	
    	
	





});