/*
* Creación de La base de datos Store website, sistema creado en java JEE

*/
drop database if exists store;

create database if not exists store character set utf8 collate utf8_general_ci;

use store;


/*
* Creación de las tablas
*/

create table categorias
( 
	id_cate			int 				primary key auto_increment,
	nom_cate			varchar(100)  	not null unique,
	descr_cate		text  			null 
);


create table marcas
( 
	id_marca			int 				primary key auto_increment,
	nom_marca		varchar(100)  	not null unique,
	descr_marca		text  			null,
	ubicacion_dir	varchar(300)	not null 
);



-- Tabla productos
create table productos
(
	id_producto 	varchar(9) 		     primary key,
	nombre 			varchar(255) 	   not null,
	descripcion		text				not null,
	id_categoria 	int 				not null references categorias,
	id_marca		int				  not null references marcas,
	precio_venta	float				not null,
    check_oferta    bit                 not null default false,
	precio_oferta	float				null,
	fec_agregado	date				not null,
	publicado		bit				     not null default true, -- Si nuestro producto se verá para la venta
	puntuacion		int				    not null default 0 -- puntuación que tendrá nuestro productos de 0 - 5 , será en estrellas en la vista web
);


-- Tabla producto Lote
create table productos_lote
(
	id					int				primary key auto_increment,
	id_producto		varchar(9)		not null references productos,
	precio_compra	float				not null,
	stock				int				not null,
	fec_ag			datetime			not null default CURRENT_TIMESTAMP

);

-- Tabla galería de productos
create table galeria_productos
(
	id_foto			int				primary key auto_increment,
	id_producto		varchar(9) 		not null references productos,
	ubicacion_dir	varchar(300)	not null,
	foto_portada	bit				not null
);



create table departamentos
(
	id_depa 			int 				primary key auto_increment,
	nombre			varchar(255)	not null
	
);

create table provincias
(
	id_provi			int 				primary key auto_increment,
	id_depa			int				not null references departamentos,
	nombre			varchar(255)	not null
);

create table personas
(
	dni				varchar(8)		primary key,
	nombres			varchar(255)	not null,
	ape_pat			varchar(255)	not null,
	ape_mat			varchar(255)	not null,
	id_usua			varchar(255)	not null,
	passw				varchar(255)	not null
);

create table clientes
(
	dni				varchar(8)		primary key references personas,
	direccion		varchar(255)	not null,
	id_provi			int				not null references provincias,
	telefono			varchar(255)	null,
	email				varchar(255)	null,
	notas				text				null -- Las notas, las puede editar un empleado, para tener algo sobre el cliente, esto nunca podrá verlo un cliente
);

-- Tabla direcciones, direcciones de envio de productos adicionales que cada cliente puede añadir a su cuenta

create table direcciones
(
	id					int 				primary key auto_increment,
	dni				varchar(8)		not null references clientes,
	direccion 		varchar(300)	not null,
	provincia		int				not null references provincias,
	telf				varchar(255)	null
	
);


-- Visa, Mastercard, american express son los tipos de tarjetas de crédito que aceptamos en nuestra tienda online
create table tipo_tarjetas
(
	id_tipo			int 				primary key auto_increment,
	nom				varchar(255)	not null
);


-- Tabla tarjetas, la tarjeta que posee un cliente nuestro
create table tarjetas
(
	id_tarjeta		int				primary key auto_increment,
	dni				varchar(8)		not null references clientes,
	num_tarjeta		varchar(255)	not null,
	id_tipo			int				not null references tipo_tarjetas,
	fecha_exp		varchar(255)	not null
);


-- Cargos que hay en nuestra empresa, para los empleados -> sysadmin : administrador con acceso total al sistema, mod: moderador, empleado con permisos de ventas, gerente(puede ver el tema de reportes)

create table cargos
(
	id_cargo			int				primary key auto_increment,
	nom_cargo		varchar(255)	not null,
	descr_cargo		text				null
);


-- Tabla empleados

create table empleados
(
	dni				varchar(8)		primary key references personas,
	id_cargo			int				not null references cargos
);


-- Tabla estados_tickets -> estados (1 -> urgente , 2 -> open(sin leer), 3 -> closed(leído) ).
create table estados_tickets
(
	id					int				primary key auto_increment,
	nombre			varchar(100)	not null,
	descr				varchar(255)	null
);

-- Tabla cate_tickets -> categoría de los tickets (generalmente de donde fue enviado) -> contact form, foros,etc
create table cate_tickets
(
	id					int				primary key auto_increment,
	nombre			varchar(100)	not null,
	descr				varchar(255)	null		
);

-- Tabla tickets (Mensajes enviados por clientes (no registrados o registrados) principalmente contact form
create table tickets
(
	id					varchar(9)		primary key,
	fecha				date				not null,
	cliente			varchar(300)	not null,
	email_cli		varchar(300)	not null,
	titulo			varchar(100)	not null,
	contenido		text				not null,
	id_cate			int				not null references cate_tickets,
	id_estado		int				not null references estados_tickets
	
		
);

-- Tabla estado orden de pago -> 1 : Procesando, 2: finalizado, 3: Enviado, 4: cancelado
create table estado_orden_pago
(
	id					int				primary key auto_increment,
	nombre			varchar(100)	not null,
	descr				varchar(300)	null
);



-- Tabla orden de pago (esta almacena la compra, y el estado de esta orden indica si ya fue entregada,etc, si el cliente no está registrado, solo se llena el nombre_cliente
create table ordenes_pago
(
	id_orden			varchar(9)		primary key,
	dni_cliente		varchar(8)		null references cliente,
	nombre_cliente	varchar(300)	not null,
	direcc_envio	varchar(300)	not null,
	prov_envio		int				not null references provincias,
	fecha_creada	datetime			not null default CURRENT_TIMESTAMP,
	fec_entrega		date				null,
	num_tarjeta		varchar(255)	not null -- Tarjeta que fue usada para hacer esta orden
);


-- Tabla detalles_ordenes
create table detalle_ordenes
(
	id_orden_pago		varchar(9)	not null references ordenes_pago,
	id_producto			varchar(9)	not null references productos,
	cantidad				int			not null,
	precio_compra		float			not null, -- Para saber en que precio fue comprado en esa época este producto, ya que podría comprarse otro stock más caro y se hubiese actualizado el pc
	precio_venta		float			not null
);

-- Tabla de deseos del cliente
create table wishlist
(
	dni_cliente		varchar(8)		not null references clientes,
	id_producto		int				not null references productos,
	primary key ( dni_cliente, id_producto)
);

/*********************************************************************************************
** FUNCIONES Y PROCEDIMIENTOS
*********************************************************************************************/

-- Falta las tablas compra compra_descr

DELIMITER //
	CREATE PROCEDURE selectProductos()
	BEGIN
		SELECT * FROM productos;
	END	
//

DELIMITER //
	CREATE PROCEDURE selectProducto(
		IN _id_producto int
	)
	BEGIN
		SELECT * FROM productos WHERE id_producto = _id_producto;
	END	
//

-- Función que crea un idAutomático para Producto
delimiter //
CREATE FUNCTION id_producto()
RETURNS varchar(9) 
BEGIN
	declare codigo_retornado varchar(9);
	
	select max(productos.id_producto) into codigo_retornado from productos;
	
	set codigo_retornado = concat('PID.' , lpad ( ifnull( right( codigo_retornado , 5) , 0) + 1 , 5 , '0' ) );
	
	return codigo_retornado;
	
END
//

-- Función que crea un idAutomático para Tickets
delimiter //
CREATE FUNCTION id_ticket()
RETURNS varchar(9) 
BEGIN
	declare codigo_retornado varchar(9);
	
	select max(tickets.id) into codigo_retornado from tickets;
	
	set codigo_retornado = concat('#TCK' , lpad ( ifnull( right( codigo_retornado , 5) , 0) + 1 , 5 , '0' ) );
	
	return codigo_retornado;
	
END
//

-- Función que crea un idAutomático para las Ordenes - Pago
delimiter //
CREATE FUNCTION id_orden_pago()
RETURNS varchar(9) 
BEGIN
	declare codigo_retornado varchar(9);
	
	select max(ordenes_pago.id_orden) into codigo_retornado from ordenes_pago;
	
	set codigo_retornado = concat('ORD.' , lpad ( ifnull( right( codigo_retornado , 5) , 0) + 1 , 5 , '0' ) );
	
	return codigo_retornado;
	
END
//

/*********************************************************************************************
** INSERTS
*********************************************************************************************/

-- Tabla Categorías
insert into categorias (nom_cate) values ('Antivirus');
insert into categorias (nom_cate) values ('Case');
insert into categorias (nom_cate) values ('Disco Duros');
insert into categorias (nom_cate) values ('Fuentes');
insert into categorias (nom_cate) values ('GamePad');
insert into categorias (nom_cate) values ('Laptop');
insert into categorias (nom_cate) values ('Mainboard');
insert into categorias (nom_cate) values ('Memorias');
insert into categorias (nom_cate) values ('Monitores');
insert into categorias (nom_cate) values ('Multigrabadores');
insert into categorias (nom_cate) values ('Procesadores');
insert into categorias (nom_cate) values ('Tarjeta De Video');


-- Tabla Marcas
insert into marcas (nom_marca,descr_marca,ubicacion_dir) values ('Asus','	Marca fabricante de computadoras, laptops, y accesorios para laptops.','Marcas/Marca_1.jpg');
insert into marcas (nom_marca,descr_marca,ubicacion_dir) values ('Intel','Marca fabricante de procesadores para pcs.','Marcas/Marca_2.jpg');
insert into marcas (nom_marca,descr_marca,ubicacion_dir) values ('Cooler Master','Marca fabricante de Cases,fuentes de poder y accesorios derivados.','Marcas/Marca_3.jpg');
insert into marcas (nom_marca,descr_marca,ubicacion_dir) values ('Corsair','Marca fabricante de Laptops, dispositivos para pcs y fuentes de poder.','Marcas/Marca_4.jpg');
insert into marcas (nom_marca,descr_marca,ubicacion_dir) values ('Razer','Marca fabricante de periféricos y laptop gamers.','Marcas/Marca_5.jpg');


-- Tabla tipo tarjetas 
insert into tipo_tarjetas (nom) values ('visa');
insert into tipo_tarjetas (nom) values ('mastercard');
insert into tipo_tarjetas (nom) values ('americanexpress');


-- Tabla Cargos de empleado
insert into cargos(nom_cargo,descr_cargo) values ('sysadmin','Administrador con acceso total al sistema.');
insert into cargos(nom_cargo,descr_cargo) values ('mod','Empleado con permisos para realizar los despachos de pedidos, asi como ver los mensajes enviados por usuarios.');
insert into cargos(nom_cargo,descr_cargo) values ('gerente','Empleado con permisos de vista a los reportes de ventas y ganancias.');


-- Tabla Productos
insert into productos(id_producto,nombre,descripcion,id_categoria,id_marca,precio_venta,fec_agregado) values (id_producto(),'Memoria ram 4gb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.

Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.'
																																					,8,4,120.0,curdate());


-- Tabla estados Tickets estados (1 -> urgente , 2 -> open(sin leer), 3 -> closed(leído) ).
insert into estados_tickets(nombre,descr) values ('urgente','Estado que indica que el mensaje es de suma importancia.');
insert into estados_tickets(nombre,descr) values ('abierto','Estado que indica que el mensaje aún no fue leído por un empleado');
insert into estados_tickets(nombre,descr) values ('cerrado','Estado que indica que el mensaje ya fue leído y respondido por un empleado');

-- Tabla categoría de tickets -> categoría de los tickets (generalmente de donde fue enviado) -> contact form, foros,etc
insert into cate_tickets(nombre,descr) values ('Contact Form','Indica que el mensaje proviene a un formulario de contacto');
insert into cate_tickets(nombre,descr) values ('Forum','Indica que el mensaje proviene del foro');
insert into cate_tickets(nombre,descr) values ('Email','Indica que el mensaje proviene del correo');


-- Tabla estados de orden de pago
insert into estado_orden_pago(nombre,descr) values ('Procesando','Indica que la orden recién fue realizada y aún no fue revisada por un empleado.');
insert into estado_orden_pago(nombre,descr) values ('Finalizado','Indica que la orden de compra fue entregada al cliente.');
insert into estado_orden_pago(nombre,descr) values ('Enviado','Indica que la orden fue enviada por un servicio de delivery al cliente, pero aún no nos confirma la entrega');
insert into estado_orden_pago(nombre,descr) values ('Cancelado','Indica que la orden fue cancelada');







