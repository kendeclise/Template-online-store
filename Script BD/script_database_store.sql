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
	id_producto 	varchar(9) 		primary key,
	nombre 			varchar(255) 	not null,
	id_categoria 	int 			not null,
	id_marca		int				not null,
	precio_compra	float			not null,
	precio_venta	float			not null,
	stock 			int				not null default 0,
	fec_agregado	date			not null,
	publicado		bit				not null default true, -- Si nuestro producto se verá para la venta	
	foreign key(id_categoria) references categorias(id_cate),
	foreign key(id_marca) references marcas(id_marca)
);

-- Tabla galería de productos
create table galeria_productos
(
	id_foto			int				primary key auto_increment,
	id_producto		varchar(9) 		not null ,
	ubicacion_dir	varchar(300)	not null,
	foto_portada	bit				not null,
	foreign key(id_producto) references productos(id_producto)
);



create table departamentos
(
	id_depa 		int 		primary key auto_increment,
	nombre			varchar(255)	not null
	
);

create table provincias
(
	id_provi		int 			primary key auto_increment,
	id_depa			int				not null,
	nombre			varchar(255)	not null,
	foreign key(id_depa) references departamentos(id_depa)
);

create table distritos
(
	id_distri		int				primary key auto_increment,
	id_provi		int				not null ,
	nombre			varchar(255)	not null,
	foreign key(id_provi) references provincias(id_provi)
);

create table personas
(
	dni				varchar(8)		primary key,
	nombres			varchar(255)	not null,
	ape_pat			varchar(255)	not null,
	ape_mat			varchar(255)	not null,
	id_usua			varchar(255)	null,
	passw			varchar(255)		null
);

create table clientes
(
	dni				varchar(8)		primary key,
	direccion		varchar(255)	not null,
	id_distri		int				not null,
	telefono		varchar(255)	null,
	email			varchar(255)	null,
	notas			text			null, -- Las notas, las puede editar un empleado, para tener algo sobre el cliente, esto nunca podrá verlo un cliente
	foreign key(dni)  references personas(dni),
	foreign key(id_distri) references distritos(id_distri)
);

-- Tabla direcciones, direcciones de envio de productos adicionales que cada cliente puede añadir a su cuenta

create table direcciones
(
	id					int 				primary key auto_increment,
	dni				varchar(8)		not null,
	direccion 		varchar(300)	not null,
	distrito			int				not null,
	telf				varchar(255)	null,
	foreign key(dni) references clientes(dni),
	foreign key(distrito) references distritos(id_distri)
	
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
	dni				varchar(8)		not null,
	num_tarjeta		varchar(255)	not null,
	id_tipo			int				not null,
	fecha_exp		varchar(255)	not null,
	foreign key(dni) references clientes(dni),
	foreign key(id_tipo) references tipo_tarjetas(id_tipo)
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
	dni				varchar(8)		primary key,
	id_cargo			int				not null,
	foreign key(dni) references personas(dni),
	foreign key(id_cargo) references cargos(id_cargo)
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
	id_cate			int				not null,
	id_estado		int				not null,
	foreign key(id_cate) references cate_tickets(id),
	foreign key(id_estado) references estados_tickets(id)
	
		
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
	id_orden		varchar(9)		primary key,
	dni_cliente		varchar(8)		not null,
	nombre_cliente	varchar(300)	not null,
	direcc_envio	varchar(300)	not null,
	distr_envio		int				not null,
	fecha_creada	datetime		not null default CURRENT_TIMESTAMP,
	fec_entrega		date			null,
	num_tarjeta		varchar(255)	not null, -- Tarjeta que fue usada para hacer esta orden
    dni_empleado	varchar(8)		null, -- Cuando la orden es atendida , se registra que empleado la atendió
	foreign key(dni_cliente) references clientes(dni),
	foreign key(distr_envio) references distritos(id_distri),
    foreign key(dni_empleado) references empleados(dni)
);


-- Tabla detalles_ordenes
create table detalle_ordenes
(
	id_orden_pago		varchar(9)	not null,
	id_producto			varchar(9)	not null,
	cantidad				int			not null,
	precio_compra		float			not null, -- Para saber en que precio fue comprado en esa época este producto, ya que podría comprarse otro stock más caro y se hubiese actualizado el pc
	precio_venta		float			not null,
	primary key(id_orden_pago,id_producto),
	foreign key(id_orden_pago) references ordenes_pago(id_orden),
	foreign key(id_producto) references productos(id_producto)
);

-- Tabla de deseos del cliente
create table wishlist
(
	dni_cliente		varchar(8)		not null,
	id_producto		varchar(9)		not null,
	primary key ( dni_cliente, id_producto),
	foreign key(dni_cliente) references clientes(dni),
	foreign key(id_producto) references productos(id_producto)
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
insert into productos(id_producto,nombre,id_categoria,id_marca,precio_compra,precio_venta,fec_agregado) values (id_producto(),'Memoria ram 4gb',8,4,85.0,120.0,curdate());


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

-- Ubigeo
-- Datos Distritos, Provincias y Departamentos del Perú , Fuente : http://www.strategy.org.pe/articulos/cbdf11_strategy_76382231-UBIGEO-PERU-MYSQL.pdf
														
-- DEPARTAMENTOS
insert into departamentos(id_depa,nombre) values (1, 'Amazonas'), (2, 'Ancash'), (3, 'Apurimac'), (4, 'Arequipa'), (5, 'Ayacucho'), (6, 'Cajamarca'), (7, 'Callao'), (8, 'Cusco'), (9, 'Huancavelica'), (10, 'Huanuco'), (11, 'Ica'), (12, 'Junin'), (13, 'La Libertad'), (14, 'Lambayeque'), (15, 'Lima'), (16, 'Loreto'), (17, 'Madre De Dios'), (18, 'Moquegua'), (19, 'Pasco'), (20, 'Piura'), (21, 'Puno'), (22, 'San Martin'), (23, 'Tacna'), (24, 'Tumbes'), (25, 'Ucayali');

-- PROVINCIAS
insert into provincias(id_provi,nombre,id_depa) values (1, 'Chachapoyas ', 1), (2, 'Bagua', 1), (3, 'Bongara', 1), (4, 'Condorcanqui', 1), (5, 'Luya', 1), (6, 'Rodriguez De Mendoza', 1), (7, 'Utcubamba', 1), (8, 'Huaraz', 2), (9, 'Aija', 2), (10, 'Antonio Raymondi', 2), (11, 'Asuncion', 2), (12, 'Bolognesi', 2), (13, 'Carhuaz', 2), (14, 'Carlos Fermin Fitzcarrald', 2), (15, 'Casma', 2), (16, 'Corongo', 2), (17, 'Huari', 2), (18, 'Huarmey', 2), (19, 'Huaylas', 2), (20, 'Mariscal Luzuriaga', 2), (21, 'Ocros', 2), (22, 'Pallasca', 2), (23, 'Pomabamba', 2), (24, 'Recuay', 2), (25, 'Santa', 2), (26, 'Sihuas', 2), (27, 'Yungay', 2), (28, 'Abancay', 3), (29, 'Andahuaylas', 3), (30, 'Antabamba', 3), (31, 'Aymaraes', 3), (32, 'Cotabambas', 3), (33, 'Chincheros', 3), (34, 'Grau', 3), (35, 'Arequipa', 4), (36, 'Camana', 4), (37, 'Caraveli', 4), (38, 'Castilla', 4), (39, 'Caylloma', 4), (40, 'Condesuyos', 4), (41, 'Islay', 4), (42, 'La Union', 4), (43, 'Huamanga', 5), (44, 'Cangallo', 5), (45, 'Huanca Sancos', 5), (46, 'Huanta', 5), (47, 'La Mar', 5), (48, 'Lucanas', 5), (49, 'Parinacochas', 5), (50, 'Paucar Del Sara Sara', 5), (51, 'Sucre', 5), (52, 'Victor Fajardo', 5), (53, 'Vilcas Huaman', 5), (54, 'Cajamarca', 6), (55, 'Cajabamba', 6), (56, 'Celendin', 6), (57, 'Chota ', 6), (58, 'Contumaza', 6), (59, 'Cutervo', 6), (60, 'Hualgayoc', 6), (61, 'Jaen', 6), (62, 'San Ignacio', 6), (63, 'San Marcos', 6), (64, 'San Pablo', 6), (65, 'Santa Cruz', 6), (66, 'Callao', 7), (67, 'Cusco', 8), (68, 'Acomayo', 8), (69, 'Anta', 8), (70, 'Calca', 8), (71, 'Canas', 8), (72, 'Canchis', 8), (73, 'Chumbivilcas', 8), (74, 'Espinar', 8), (75, 'La Convencion', 8), (76, 'Paruro', 8), (77, 'Paucartambo', 8), (78, 'Quispicanchi', 8), (79, 'Urubamba', 8), (80, 'Huancavelica', 9), (81, 'Acobamba', 9), (82, 'Angaraes', 9), (83, 'Castrovirreyna', 9), (84, 'Churcampa', 9), (85, 'Huaytara', 9), (86, 'Tayacaja', 9), (87, 'Huanuco', 10), (88, 'Ambo', 10), (89, 'Dos De Mayo', 10), (90, 'Huacaybamba', 10), (91, 'Huamalies', 10), (92, 'Leoncio Prado', 10), (93, 'Marañon', 10), (94, 'Pachitea', 10), (95, 'Puerto Inca', 10), (96, 'Lauricocha', 10), (97, 'Yarowilca', 10), (98, 'Ica', 11), (99, 'Chincha', 11), (100, 'Nazca', 11), (101, 'Palpa', 11), (102, 'Pisco', 11), (103, 'Huancayo', 12), (104, 'Concepcion', 12), (105, 'Chanchamayo', 12), (106, 'Jauja', 12), (107, 'Junin', 12), (108, 'Satipo', 12), (109, 'Tarma', 12), (110, 'Yauli', 12), (111, 'Chupaca', 12), (112, 'Trujillo', 13), (113, 'Ascope', 13), (114, 'Bolivar', 13), (115, 'Chepen', 13), (116, 'Julcan', 13), (117, 'Otuzco', 13), (118, 'Pacasmayo', 13), (119, 'Pataz', 13), (120, 'Sanchez Carrion', 13), (121, 'Santiago De Chuco', 13), (122, 'Gran Chimu', 13), (123, 'Viru', 13), (124, 'Chiclayo', 14), (125, 'Ferreñafe', 14), (126, 'Lambayeque', 14), (127, 'Lima', 15), (128, 'Barranca', 15), (129, 'Cajatambo', 15), (130, 'Canta', 15), (131, 'Cañete', 15), (132, 'Huaral', 15), (133, 'Huarochiri', 15), (134, 'Huaura', 15), (135, 'Oyon', 15), (136, 'Yauyos', 15), (137, 'Maynas', 16), (138, 'Alto Amazonas', 16), (139, 'Loreto', 16), (140, 'Mariscal Ramon Castilla', 16), (141, 'Requena', 16), (142, 'Ucayali', 16), (143, 'Tambopata', 17), (144, 'Manu', 17), (145, 'Tahuamanu', 17), (146, 'Mariscal Nieto', 18), (147, 'General Sanchez Cerro', 18), (148, 'Ilo', 18), (149, 'Pasco', 19), (150, 'Daniel Alcides Carrion', 19), (151, 'Oxapampa', 19), (152, 'Piura', 20), (153, 'Ayabaca', 20), (154, 'Huancabamba', 20), (155, 'Morropon', 20), (156, 'Paita', 20), (157, 'Sullana', 20), (158, 'Talara', 20), (159, 'Sechura', 20), (160, 'Puno', 21), (161, 'Azangaro', 21), (162, 'Carabaya', 21), (163, 'Chucuito', 21), (164, 'El Collao', 21), (165, 'Huancane', 21), (166, 'Lampa', 21), (167, 'Melgar', 21), (168, 'Moho', 21), (169, 'San Antonio De Putina', 21), (170, 'San Roman', 21), (171, 'Sandia', 21), (172, 'Yunguyo', 21), (173, 'Moyobamba', 22), (174, 'Bellavista', 22), (175, 'El Dorado', 22), (176, 'Huallaga', 22), (177, 'Lamas', 22), (178, 'Mariscal Caceres', 22), (179, 'Picota', 22), (180, 'Rioja', 22), (181, 'San Martin', 22), (182, 'Tocache', 22), (183, 'Tacna', 23), (184, 'Candarave', 23), (185, 'Jorge Basadre', 23), (186, 'Tarata', 23), (187, 'Tumbes', 24), (188, 'Contralmirante Villar', 24), (189, 'Zarumilla', 24), (190, 'Coronel Portillo', 25), (191, 'Atalaya', 25), (192, 'Padre Abad', 25), (193, 'Purus', 25);

-- DISTRITOS
insert into distritos(id_distri,nombre,id_provi) values (1, 'Chachapoyas', 1), (2, 'Asuncion', 1), (3, 'Balsas', 1), (4, 'Cheto', 1), (5, 'Chiliquin', 1), (6, 'Chuquibamba', 1), (7, 'Granada', 1), (8, 'Huancas', 1), (9, 'La Jalca', 1), (10, 'Leimebamba', 1), (11, 'Levanto', 1), (12, 'Magdalena', 1), (13, 'Mariscal Castilla', 1), (14, 'Molinopampa', 1), (15, 'Montevideo', 1), (16, 'Olleros', 1), (17, 'Quinjalca', 1), (18, 'San Francisco De Daguas', 1), (19, 'San Isidro De Maino', 1), (20, 'Soloco', 1), (21, 'Sonche', 1), (22, 'La Peca', 2), (23, 'Aramango', 2), (24, 'Copallin', 2), (25, 'El Parco', 2), (26, 'Imaza', 2), (27, 'Jumbilla', 3), (28, 'Chisquilla', 3), (29, 'Churuja', 3), (30, 'Corosha', 3), (31, 'Cuispes', 3), (32, 'Florida', 3), (33, 'Jazan', 3), (34, 'Recta', 3), (35, 'San Carlos', 3), (36, 'Shipasbamba', 3), (37, 'Valera', 3), (38, 'Yambrasbamba', 3), (39, 'Nieva', 4), (40, 'El Cenepa', 4), (41, 'Rio Santiago', 4), (42, 'Lamud', 5), (43, 'Camporredondo', 5), (44, 'Cocabamba', 5), (45, 'Colcamar', 5), (46, 'Conila', 5), (47, 'Inguilpata', 5), (48, 'Longuita', 5), (49, 'Lonya Chico', 5), (50, 'Luya', 5), (51, 'Luya Viejo', 5), (52, 'Maria', 5), (53, 'Ocalli', 5), (54, 'Ocumal', 5), (55, 'Pisuquia', 5), (56, 'Providencia', 5), (57, 'San Cristobal', 5), (58, 'San Francisco Del Yeso', 5), (59, 'San Jeronimo', 5), (60, 'San Juan De Lopecancha', 5), (61, 'Santa Catalina', 5), (62, 'Santo Tomas', 5), (63, 'Tingo', 5), (64, 'Trita', 5), (65, 'San Nicolas', 6), (66, 'Chirimoto', 6), (67, 'Cochamal', 6), (68, 'Huambo', 6), (69, 'Limabamba', 6), (70, 'Longar', 6), (71, 'Mariscal Benavides', 6), (72, 'Milpuc', 6), (73, 'Omia', 6), (74, 'Santa Rosa', 6), (75, 'Totora', 6), (76, 'Vista Alegre', 6), (77, 'Bagua Grande', 7), (78, 'Cajaruro', 7), (79, 'Cumba', 7), (80, 'El Milagro', 7), (81, 'Jamalca', 7), (82, 'Lonya Grande', 7), (83, 'Yamon', 7), (84, 'Huaraz', 8), (85, 'Cochabamba', 8), (86, 'Colcabamba', 8), (87, 'Huanchay', 8), (88, 'Independencia', 8), (89, 'Jangas', 8), (90, 'La Libertad', 8), (91, 'Olleros', 8), (92, 'Pampas', 8), (93, 'Pariacoto', 8), (94, 'Pira', 8), (95, 'Tarica', 8), (96, 'Aija', 9), (97, 'Coris', 9), (98, 'Huacllan', 9), (99, 'La Merced', 9), (100, 'Succha', 9), (101, 'Llamellin', 10), (102, 'Aczo', 10), (103, 'Chaccho', 10), (104, 'Chingas', 10), (105, 'Mirgas', 10), (106, 'San Juan De Rontoy', 10), (107, 'Chacas', 11), (108, 'Acochaca', 11), (109, 'Chiquian', 12), (110, 'Abelardo Pardo Lezameta', 12), (111, 'Antonio Raymondi', 12), (112, 'Aquia', 12), (113, 'Cajacay', 12), (114, 'Canis', 12), (115, 'Colquioc', 12), (116, 'Huallanca', 12), (117, 'Huasta', 12), (118, 'Huayllacayan', 12), (119, 'La Primavera', 12), (120, 'Mangas', 12), (121, 'Pacllon', 12), (122, 'San Miguel De Corpanqui', 12), (123, 'Ticllos', 12), (124, 'Carhuaz', 13), (125, 'Acopampa', 13), (126, 'Amashca', 13), (127, 'Anta', 13), (128, 'Ataquero', 13), (129, 'Marcara', 13), (130, 'Pariahuanca', 13), (131, 'San Miguel De Aco', 13), (132, 'Shilla', 13), (133, 'Tinco', 13), (134, 'Yungar', 13), (135, 'San Luis', 14), (136, 'San Nicolas', 14), (137, 'Yauya', 14), (138, 'Casma', 15), (139, 'Buena Vista Alta', 15), (140, 'Comandante Noel', 15), (141, 'Yautan', 15), (142, 'Corongo', 16), (143, 'Aco', 16), (144, 'Bambas', 16), (145, 'Cusca', 16), (146, 'La Pampa', 16), (147, 'Yanac', 16), (148, 'Yupan', 16), (149, 'Huari', 17), (150, 'Anra', 17), (151, 'Cajay', 17), (152, 'Chavin De Huantar', 17), (153, 'Huacachi', 17), (154, 'Huacchis', 17), (155, 'Huachis', 17), (156, 'Huantar', 17), (157, 'Masin', 17), (158, 'Paucas', 17), (159, 'Ponto', 17), (160, 'Rahuapampa', 17), (161, 'Rapayan', 17), (162, 'San Marcos', 17), (163, 'San Pedro De Chana', 17), (164, 'Uco', 17), (165, 'Huarmey', 18), (166, 'Cochapeti', 18), (167, 'Culebras', 18), (168, 'Huayan', 18), (169, 'Malvas', 18), (170, 'Caraz', 26), (171, 'Huallanca', 26), (172, 'Huata', 26), (173, 'Huaylas', 26), (174, 'Mato', 26), (175, 'Pamparomas', 26), (176, 'Pueblo Libre', 26), (177, 'Santa Cruz', 26), (178, 'Santo Toribio', 26), (179, 'Yuracmarca', 26), (180, 'Piscobamba', 27), (181, 'Casca', 27), (182, 'Eleazar Guzman Barron', 27), (183, 'Fidel Olivas Escudero', 27), (184, 'Llama', 27), (185, 'Llumpa', 27), (186, 'Lucma', 27), (187, 'Musga', 27), (188, 'Ocros', 21), (189, 'Acas', 21), (190, 'Cajamarquilla', 21), (191, 'Carhuapampa', 21), (192, 'Cochas', 21), (193, 'Congas', 21), (194, 'Llipa', 21), (195, 'San Cristobal De Rajan', 21), (196, 'San Pedro', 21), (197, 'Santiago De Chilcas', 21), (198, 'Cabana', 22), (199, 'Bolognesi', 22), (200, 'Conchucos', 22), (201, 'Huacaschuque', 22), (202, 'Huandoval', 22), (203, 'Lacabamba', 22), (204, 'Llapo', 22), (205, 'Pallasca', 22), (206, 'Pampas', 22), (207, 'Santa Rosa', 22), (208, 'Tauca', 22), (209, 'Pomabamba', 23), (210, 'Huayllan', 23), (211, 'Parobamba', 23), (212, 'Quinuabamba', 23), (213, 'Recuay', 24), (214, 'Catac', 24), (215, 'Cotaparaco', 24), (216, 'Huayllapampa', 24), (217, 'Llacllin', 24), (218, 'Marca', 24), (219, 'Pampas Chico', 24), (220, 'Pararin', 24), (221, 'Tapacocha', 24), (222, 'Ticapampa', 24), (223, 'Chimbote', 25), (224, 'Caceres Del Peru', 25), (225, 'Coishco', 25), (226, 'Macate', 25), (227, 'Moro', 25), (228, 'Nepeña', 25), (229, 'Samanco', 25), (230, 'Santa', 25), (231, 'Nuevo Chimbote', 25), (232, 'Sihuas', 26), (233, 'Acobamba', 26), (234, 'Alfonso Ugarte', 26), (235, 'Cashapampa', 26), (236, 'Chingalpo', 26), (237, 'Huayllabamba', 26), (238, 'Quiches', 26), (239, 'Ragash', 26), (240, 'San Juan', 26), (241, 'Sicsibamba', 26), (242, 'Yungay', 27), (243, 'Cascapara', 27), (244, 'Mancos', 27), (245, 'Matacoto', 27), (246, 'Quillo', 27), (247, 'Ranrahirca', 27), (248, 'Shupluy', 27), (249, 'Yanama', 27), (250, 'Abancay', 28), (251, 'Chacoche', 28), (252, 'Circa', 28), (253, 'Curahuasi', 28), (254, 'Huanipaca', 28), (255, 'Lambrama', 28), (256, 'Pichirhua', 28), (257, 'San Pedro De Cachora', 28), (258, 'Tamburco', 28), (259, 'Andahuaylas', 29), (260, 'Andarapa', 29), (261, 'Chiara', 29), (262, 'Huancarama', 29), (263, 'Huancaray', 29), (264, 'Huayana', 29), (265, 'Kishuara', 29), (266, 'Pacobamba', 29), (267, 'Pacucha', 29), (268, 'Pampachiri', 29), (269, 'Pomacocha', 29), (270, 'San Antonio De Cachi', 29), (271, 'San Jeronimo', 29), (272, 'San Miguel De Chaccrampa', 29), (273, 'Santa Maria De Chicmo', 29), (274, 'Talavera', 29), (275, 'Tumay Huaraca', 29), (276, 'Turpo', 29), (277, 'Kaquiabamba', 29), (278, 'Antabamba', 30), (279, 'El Oro', 30), (280, 'Huaquirca', 30), (281, 'Juan Espinoza Medrano', 30), (282, 'Oropesa', 30), (283, 'Pachaconas', 30), (284, 'Sabaino', 30), (285, 'Chalhuanca', 31), (286, 'Capaya', 31), (287, 'Caraybamba', 31), (288, 'Chapimarca', 31), (289, 'Colcabamba', 31), (290, 'Cotaruse', 31), (291, 'Huayllo', 31), (292, 'Justo Apu Sahuaraura', 31), (293, 'Lucre', 31), (294, 'Pocohuanca', 31), (295, 'San Juan De Chacña', 31), (296, 'Sañayca', 31), (297, 'Soraya', 31), (298, 'Tapairihua', 31), (299, 'Tintay', 31), (300, 'Toraya', 31), (301, 'Yanaca', 31), (302, 'Tambobamba', 32), (303, 'Cotabambas', 32), (304, 'Coyllurqui', 32), (305, 'Haquira', 32), (306, 'Mara', 32), (307, 'Challhuahuacho', 32), (308, 'Chincheros', 33), (309, 'Anco-Huallo', 33), (310, 'Cocharcas', 33), (311, 'Huaccana', 33), (312, 'Ocobamba', 33), (313, 'Ongoy', 33), (314, 'Uranmarca', 33), (315, 'Ranracancha', 33), (316, 'Chuquibambilla', 34), (317, 'Curpahuasi', 34), (318, 'Gamarra', 34), (319, 'Huayllati', 34), (320, 'Mamara', 34), (321, 'Micaela Bastidas', 34), (322, 'Pataypampa', 34), (323, 'Progreso', 34), (324, 'San Antonio', 34), (325, 'Santa Rosa', 34), (326, 'Turpay', 34), (327, 'Vilcabamba', 34), (328, 'Virundo', 34), (329, 'Curasco', 34), (330, 'Arequipa', 35), (331, 'Alto Selva Alegre', 35), (332, 'Cayma', 35), (333, 'Cerro Colorado', 35), (334, 'Characato', 35), (335, 'Chiguata', 35), (336, 'Jacobo Hunter', 35), (337, 'La Joya', 35), (338, 'Mariano Melgar', 35), (339, 'Miraflores', 35), (340, 'Mollebaya', 35), (341, 'Paucarpata', 35), (342, 'Pocsi', 35), (343, 'Polobaya', 35), (344, 'Quequeña', 35), (345, 'Sabandia', 35), (346, 'Sachaca', 35), (347, 'San Juan De Siguas', 35), (348, 'San Juan De Tarucani', 35), (349, 'Santa Isabel De Siguas', 35), (350, 'Santa Rita De Siguas', 35), (351, 'Socabaya', 35), (352, 'Tiabaya', 35), (353, 'Uchumayo', 35), (354, 'Vitor', 35), (355, 'Yanahuara', 35), (356, 'Yarabamba', 35), (357, 'Yura', 35), (358, 'Jose Luis Bustamante Y Rivero', 35), (359, 'Camana', 36), (360, 'Jose Maria Quimper', 36), (361, 'Mariano Nicolas Valcarcel', 36), (362, 'Mariscal Caceres', 36), (363, 'Nicolas De Pierola', 36), (364, 'Ocoña', 36), (365, 'Quilca', 36), (366, 'Samuel Pastor', 36), (367, 'Caraveli', 37), (368, 'Acari', 37), (369, 'Atico', 37), (370, 'Atiquipa', 37), (371, 'Bella Union', 37), (372, 'Cahuacho', 37), (373, 'Chala', 37), (374, 'Chaparra', 37), (375, 'Huanuhuanu', 37), (376, 'Jaqui', 37), (377, 'Lomas', 37), (378, 'Quicacha', 37), (379, 'Yauca', 37), (380, 'Aplao', 38), (381, 'Andagua', 38), (382, 'Ayo', 38), (383, 'Chachas', 38), (384, 'Chilcaymarca', 38), (385, 'Choco', 38), (386, 'Huancarqui', 38), (387, 'Machaguay', 38), (388, 'Orcopampa', 38), (389, 'Pampacolca', 38), (390, 'Tipan', 38), (391, 'Uñon', 38), (392, 'Uraca', 38), (393, 'Viraco', 38), (394, 'Chivay', 39), (395, 'Achoma', 39), (396, 'Cabanaconde', 39), (397, 'Callalli', 39), (398, 'Caylloma', 39), (399, 'Coporaque', 39), (400, 'Huambo', 39), (401, 'Huanca', 39), (402, 'Ichupampa', 39), (403, 'Lari', 39), (404, 'Lluta', 39), (405, 'Maca', 39), (406, 'Madrigal', 39), (407, 'San Antonio De Chuca', 39), (408, 'Sibayo', 39), (409, 'Tapay', 39), (410, 'Tisco', 39), (411, 'Tuti', 39), (412, 'Yanque', 39), (413, 'Majes', 39), (414, 'Chuquibamba', 40), (415, 'Andaray', 40), (416, 'Cayarani', 40), (417, 'Chichas', 40), (418, 'Iray', 40), (419, 'Rio Grande', 40), (420, 'Salamanca', 40), (421, 'Yanaquihua', 40), (422, 'Mollendo', 41), (423, 'Cocachacra', 41), (424, 'Dean Valdivia', 41), (425, 'Islay', 41), (426, 'Mejia', 41), (427, 'Punta De Bombon', 41), (428, 'Cotahuasi', 42), (429, 'Alca', 42), (430, 'Charcana', 42), (431, 'Huaynacotas', 42), (432, 'Pampamarca', 42), (433, 'Puyca', 42), (434, 'Quechualla', 42), (435, 'Sayla', 42), (436, 'Tauria', 42), (437, 'Tomepampa', 42), (438, 'Toro', 42), (439, 'Ayacucho', 43), (440, 'Acocro', 43), (441, 'Acos Vinchos', 43), (442, 'Carmen Alto', 43), (443, 'Chiara', 43), (444, 'Ocros', 43), (445, 'Pacaycasa', 43), (446, 'Quinua', 43), (447, 'San Jose De Ticllas', 43), (448, 'San Juan Bautista', 43), (449, 'Santiago De Pischa', 43), (450, 'Socos', 43), (451, 'Tambillo', 43), (452, 'Vinchos', 43), (453, 'Jesus Nazareno', 43), (454, 'Cangallo', 44), (455, 'Chuschi', 44), (456, 'Los Morochucos', 44), (457, 'Maria Parado De Bellido', 44), (458, 'Paras', 44), (459, 'Totos', 44), (460, 'Sancos', 45), (461, 'Carapo', 45), (462, 'Sacsamarca', 45), (463, 'Santiago De Lucanamarca', 45), (464, 'Huanta', 46), (465, 'Ayahuanco', 46), (466, 'Huamanguilla', 46), (467, 'Iguain', 46), (468, 'Luricocha', 46), (469, 'Santillana', 46), (470, 'Sivia', 46), (471, 'Llochegua', 46), (472, 'San Miguel', 47), (473, 'Anco', 47), (474, 'Ayna', 47), (475, 'Chilcas', 47), (476, 'Chungui', 47), (477, 'Luis Carranza', 47), (478, 'Santa Rosa', 47), (479, 'Tambo', 47), (480, 'Puquio', 48), (481, 'Aucara', 48), (482, 'Cabana', 48), (483, 'Carmen Salcedo', 48), (484, 'Chaviña', 48), (485, 'Chipao', 48), (486, 'Huac-Huas', 48), (487, 'Laramate', 48), (488, 'Leoncio Prado', 48), (489, 'Llauta', 48), (490, 'Lucanas', 48), (491, 'Ocaña', 48), (492, 'Otoca', 48), (493, 'Saisa', 48), (494, 'San Cristobal', 48), (495, 'San Juan', 48), (496, 'San Pedro', 48), (497, 'San Pedro De Palco', 48), (498, 'Sancos', 48), (499, 'Santa Ana De Huaycahuacho', 48), (500, 'Santa Lucia', 48), (501, 'Coracora', 49), (502, 'Chumpi', 49), (503, 'Coronel Castañeda', 49), (504, 'Pacapausa', 49), (505, 'Pullo', 49), (506, 'Puyusca', 49), (507, 'San Francisco De Ravacayco', 49), (508, 'Upahuacho', 49), (509, 'Pausa', 50), (510, 'Colta', 50), (511, 'Corculla', 50), (512, 'Lampa', 50), (513, 'Marcabamba', 50), (514, 'Oyolo', 50), (515, 'Pararca', 50), (516, 'San Javier De Alpabamba', 50), (517, 'San Jose De Ushua', 50), (518, 'Sara Sara', 50), (519, 'Querobamba', 51), (520, 'Belen', 51), (521, 'Chalcos', 51), (522, 'Chilcayoc', 51), (523, 'Huacaña', 51), (524, 'Morcolla', 51), (525, 'Paico', 51), (526, 'San Pedro De Larcay', 51), (527, 'San Salvador De Quije', 51), (528, 'Santiago De Paucaray', 51), (529, 'Soras', 51), (530, 'Huancapi', 52), (531, 'Alcamenca', 52), (532, 'Apongo', 52), (533, 'Asquipata', 52), (534, 'Canaria', 52), (535, 'Cayara', 52), (536, 'Colca', 52), (537, 'Huamanquiquia', 52), (538, 'Huancaraylla', 52), (539, 'Huaya', 52), (540, 'Sarhua', 52), (541, 'Vilcanchos', 52), (542, 'Vilcas Huaman', 53), (543, 'Accomarca', 53), (544, 'Carhuanca', 53), (545, 'Concepcion', 53), (546, 'Huambalpa', 53), (547, 'Independencia', 53), (548, 'Saurama', 53), (549, 'Vischongo', 53), (550, 'Cajamarca', 54), (551, 'Cajamarca', 54), (552, 'Asuncion', 54), (553, 'Chetilla', 54), (554, 'Cospan', 54), (555, 'Encañada', 54), (556, 'Jesus', 54), (557, 'Llacanora', 54), (558, 'Los Baños Del Inca', 54), (559, 'Magdalena', 54), (560, 'Matara', 54), (561, 'Namora', 54), (562, 'San Juan', 54), (563, 'Cajabamba', 55), (564, 'Cachachi', 55), (565, 'Condebamba', 55), (566, 'Sitacocha', 55), (567, 'Celendin', 56), (568, 'Chumuch', 56), (569, 'Cortegana', 56), (570, 'Huasmin', 56), (571, 'Jorge Chavez', 56), (572, 'Jose Galvez', 56), (573, 'Miguel Iglesias', 56), (574, 'Oxamarca', 56), (575, 'Sorochuco', 56), (576, 'Sucre', 56), (577, 'Utco', 56), (578, 'La Libertad De Pallan', 56), (579, 'Chota', 57), (580, 'Anguia', 57), (581, 'Chadin', 57), (582, 'Chiguirip', 57), (583, 'Chimban', 57), (584, 'Choropampa', 57), (585, 'Cochabamba', 57), (586, 'Conchan', 57), (587, 'Huambos', 57), (588, 'Lajas', 57), (589, 'Llama', 57), (590, 'Miracosta', 57), (591, 'Paccha', 57), (592, 'Pion', 57), (593, 'Querocoto', 57), (594, 'San Juan De Licupis', 57), (595, 'Tacabamba', 57), (596, 'Tocmoche', 57), (597, 'Chalamarca', 57), (598, 'Contumaza', 58), (599, 'Chilete', 58), (600, 'Cupisnique', 58), (601, 'Guzmango', 58), (602, 'San Benito', 58), (603, 'Santa Cruz De Toled', 58), (604, 'Tantarica', 58), (605, 'Yonan', 58), (606, 'Cutervo', 59), (607, 'Callayuc', 59), (608, 'Choros', 59), (609, 'Cujillo', 59), (610, 'La Ramada', 59), (611, 'Pimpingos', 59), (612, 'Querocotillo', 59), (613, 'San Andres De Cutervo', 59), (614, 'San Juan De Cutervo', 59), (615, 'San Luis De Lucma', 59), (616, 'Santa Cruz', 59), (617, 'Santo Domingo De La Capilla', 59), (618, 'Santo Tomas', 59), (619, 'Socota', 59), (620, 'Toribio Casanova', 59), (621, 'Bambamarca', 60), (622, 'Chugur', 60), (623, 'Hualgayoc', 60), (624, 'Jaen', 61), (625, 'Bellavista', 61), (626, 'Chontali', 61), (627, 'Colasay', 61), (628, 'Huabal', 61), (629, 'Las Pirias', 61), (630, 'Pomahuaca', 61), (631, 'Pucara', 61), (632, 'Sallique', 61), (633, 'San Felipe', 61), (634, 'San Jose Del Alto', 61), (635, 'Santa Rosa', 61), (636, 'San Ignacio', 62), (637, 'Chirinos', 62), (638, 'Huarango', 62), (639, 'La Coipa', 62), (640, 'Namballe', 62), (641, 'San Jose De Lourdes', 62), (642, 'Tabaconas', 62), (643, 'Pedro Galvez', 63), (644, 'Chancay', 63), (645, 'Eduardo Villanueva', 63), (646, 'Gregorio Pita', 63), (647, 'Ichocan', 63), (648, 'Jose Manuel Quiroz', 63), (649, 'Jose Sabogal', 63), (650, 'San Miguel', 64), (651, 'San Miguel', 64), (652, 'Bolivar', 64), (653, 'Calquis', 64), (654, 'Catilluc', 64), (655, 'El Prado', 64), (656, 'La Florida', 64), (657, 'Llapa', 64), (658, 'Nanchoc', 64), (659, 'Niepos', 64), (660, 'San Gregorio', 64), (661, 'San Silvestre De Cochan', 64), (662, 'Tongod', 64), (663, 'Union Agua Blanca', 64), (664, 'San Pablo', 65), (665, 'San Bernardino', 65), (666, 'San Luis', 65), (667, 'Tumbaden', 65), (668, 'Santa Cruz', 65), (669, 'Andabamba', 65), (670, 'Catache', 65), (671, 'Chancaybaños', 65), (672, 'La Esperanza', 65), (673, 'Ninabamba', 65), (674, 'Pulan', 65), (675, 'Saucepampa', 65), (676, 'Sexi', 65), (677, 'Uticyacu', 65), (678, 'Yauyucan', 65), (679, 'Callao', 66), (680, 'Bellavista', 66), (681, 'Carmen De La Legua Reynoso', 66), (682, 'La Perla', 66), (683, 'La Punta', 66), (684, 'Ventanilla', 66), (685, 'Cusco', 67), (686, 'Ccorca', 67), (687, 'Poroy', 67), (688, 'San Jeronimo', 67), (689, 'San Sebastian', 67), (690, 'Santiago', 67), (691, 'Saylla', 67), (692, 'Wanchaq', 67), (693, 'Acomayo', 68), (694, 'Acopia', 68), (695, 'Acos', 68), (696, 'Mosoc Llacta', 68), (697, 'Pomacanchi', 68), (698, 'Rondocan', 68), (699, 'Sangarara', 68), (700, 'Anta', 69), (701, 'Ancahuasi', 69), (702, 'Cachimayo', 69), (703, 'Chinchaypujio', 69), (704, 'Huarocondo', 69), (705, 'Limatambo', 69), (706, 'Mollepata', 69), (707, 'Pucyura', 69), (708, 'Zurite', 69), (709, 'Calca', 70), (710, 'Coya', 70), (711, 'Lamay', 70), (712, 'Lares', 70), (713, 'Pisac', 70), (714, 'San Salvador', 70), (715, 'Taray', 70), (716, 'Yanatile', 70), (717, 'Yanaoca', 71), (718, 'Checca', 71), (719, 'Kunturkanki', 71), (720, 'Langui', 71), (721, 'Layo', 71), (722, 'Pampamarca', 71), (723, 'Quehue', 71), (724, 'Tupac Amaru', 71), (725, 'Sicuani', 72), (726, 'Checacupe', 72), (727, 'Combapata', 72), (728, 'Marangani', 72), (729, 'Pitumarca', 72), (730, 'San Pablo', 72), (731, 'San Pedro', 72), (732, 'Tinta', 72), (733, 'Santo Tomas', 73), (734, 'Capacmarca', 73), (735, 'Chamaca', 73), (736, 'Colquemarca', 73), (737, 'Livitaca', 73), (738, 'Llusco', 73), (739, 'Quiñota', 73), (740, 'Velille', 73), (741, 'Espinar', 74), (742, 'Condoroma', 74), (743, 'Coporaque', 74), (744, 'Ocoruro', 74), (745, 'Pallpata', 74), (746, 'Pichigua', 74), (747, 'Suyckutambo', 74), (748, 'Alto Pichigua', 74), (749, 'Santa Ana', 75), (750, 'Echarate', 75), (751, 'Huayopata', 75), (752, 'Maranura', 75), (753, 'Ocobamba', 75), (754, 'Quellouno', 75), (755, 'Kimbiri', 75), (756, 'Santa Teresa', 75), (757, 'Vilcabamba', 75), (758, 'Pichari', 75), (759, 'Paruro', 76), (760, 'Accha', 76), (761, 'Ccapi', 76), (762, 'Colcha', 76), (763, 'Huanoquite', 76), (764, 'Omacha', 76), (765, 'Paccaritambo', 76), (766, 'Pillpinto', 76), (767, 'Yaurisque', 76), (768, 'Paucartambo', 77), (769, 'Caicay', 77), (770, 'Challabamba', 77), (771, 'Colquepata', 77), (772, 'Huancarani', 77), (773, 'Kosñipata', 77), (774, 'Urcos', 78), (775, 'Andahuaylillas', 78), (776, 'Camanti', 78), (777, 'Ccarhuayo', 78), (778, 'Ccatca', 78), (779, 'Cusipata', 78), (780, 'Huaro', 78), (781, 'Lucre', 78), (782, 'Marcapata', 78), (783, 'Ocongate', 78), (784, 'Oropesa', 78), (785, 'Quiquijana', 78), (786, 'Urubamba', 79), (787, 'Chinchero', 79), (788, 'Huayllabamba', 79), (789, 'Machupicchu', 79), (790, 'Maras', 79), (791, 'Ollantaytambo', 79), (792, 'Yucay', 79), (793, 'Huancavelica', 80), (794, 'Acobambilla', 80), (795, 'Acoria', 80), (796, 'Conayca', 80), (797, 'Cuenca', 80), (798, 'Huachocolpa', 80), (799, 'Huayllahuara', 80), (800, 'Izcuchaca', 80), (801, 'Laria', 80), (802, 'Manta', 80), (803, 'Mariscal Caceres', 80), (804, 'Moya', 80), (805, 'Nuevo Occoro', 80), (806, 'Palca', 80), (807, 'Pilchaca', 80), (808, 'Vilca', 80), (809, 'Yauli', 80), (810, 'Ascension', 80), (811, 'Huando', 80), (812, 'Acobamba', 81), (813, 'Andabamba', 81), (814, 'Anta', 81), (815, 'Caja', 81), (816, 'Marcas', 81), (817, 'Paucara', 81), (818, 'Pomacocha', 81), (819, 'Rosario', 81), (820, 'Lircay', 82), (821, 'Anchonga', 82), (822, 'Callanmarca', 82), (823, 'Ccochaccasa', 82), (824, 'Chincho', 82), (825, 'Congalla', 82), (826, 'Huanca-Huanca', 82), (827, 'Huayllay Grande', 82), (828, 'Julcamarca', 82), (829, 'San Antonio De Antaparco', 82), (830, 'Santo Tomas De Pata', 82), (831, 'Secclla', 82), (832, 'Castrovirreyna', 83), (833, 'Arma', 83), (834, 'Aurahua', 83), (835, 'Capillas', 83), (836, 'Chupamarca', 83), (837, 'Cocas', 83), (838, 'Huachos', 83), (839, 'Huamatambo', 83), (840, 'Mollepampa', 83), (841, 'San Juan', 83), (842, 'Santa Ana', 83), (843, 'Tantara', 83), (844, 'Ticrapo', 83), (845, 'Churcampa', 84), (846, 'Anco', 84), (847, 'Chinchihuasi', 84), (848, 'El Carmen', 84), (849, 'La Merced', 84), (850, 'Locroja', 84), (851, 'Paucarbamba', 84), (852, 'San Miguel De Mayocc', 84), (853, 'San Pedro De Coris', 84), (854, 'Pachamarca', 84), (855, 'Huaytara', 85), (856, 'Ayavi', 85), (857, 'Cordova', 85), (858, 'Huayacundo Arma', 85), (859, 'Laramarca', 85), (860, 'Ocoyo', 85), (861, 'Pilpichaca', 85), (862, 'Querco', 85), (863, 'Quito-Arma', 85), (864, 'San Antonio De Cusicancha', 85), (865, 'San Francisco De Sangayaico', 85), (866, 'San Isidro', 85), (867, 'Santiago De Chocorvos', 85), (868, 'Santiago De Quirahuara', 85), (869, 'Santo Domingo De Capillas', 85), (870, 'Tambo', 85), (871, 'Pampas', 86), (872, 'Acostambo', 86), (873, 'Acraquia', 86), (874, 'Ahuaycha', 86), (875, 'Colcabamba', 86), (876, 'Daniel Hernandez', 86), (877, 'Huachocolpa', 86), (878, 'Huaribamba', 86), (879, 'Ñahuimpuquio', 86), (880, 'Pazos', 86), (881, 'Quishuar', 86), (882, 'Salcabamba', 86), (883, 'Salcahuasi', 86), (884, 'San Marcos De Rocchac', 86), (885, 'Surcubamba', 86), (886, 'Tintay Puncu', 86), (887, 'Huanuco', 87), (888, 'Amarilis', 87), (889, 'Chinchao', 87), (890, 'Churubamba', 87), (891, 'Margos', 87), (892, 'Quisqui', 87), (893, 'San Francisco De Cayran', 87), (894, 'San Pedro De Chaulan', 87), (895, 'Santa Maria Del Valle', 87), (896, 'Yarumayo', 87), (897, 'Pillco Marca', 87), (898, 'Ambo', 88), (899, 'Cayna', 88), (900, 'Colpas', 88), (901, 'Conchamarca', 88), (902, 'Huacar', 88), (903, 'San Francisco', 88), (904, 'San Rafael', 88), (905, 'Tomay Kichwa', 88), (906, 'La Union', 89), (907, 'Chuquis', 89), (908, 'Marias', 89), (909, 'Pachas', 89), (910, 'Quivilla', 89), (911, 'Ripan', 89), (912, 'Shunqui', 89), (913, 'Sillapata', 89), (914, 'Yanas', 89), (915, 'Huacaybamba', 90), (916, 'Canchabamba', 90), (917, 'Cochabamba', 90), (918, 'Pinra', 90), (919, 'Llata', 91), (920, 'Arancay', 91), (921, 'Chavin De Pariarca', 91), (922, 'Jacas Grande', 91), (923, 'Jircan', 91), (924, 'Miraflores', 91), (925, 'Monzon', 91), (926, 'Punchao', 91), (927, 'Puños', 91), (928, 'Singa', 91), (929, 'Tantamayo', 91), (930, 'Rupa-Rupa', 92), (931, 'Daniel Alomia Robles', 92), (932, 'Hermilio Valdizan', 92), (933, 'Jose Crespo Y Castillo', 92), (934, 'Luyando', 92), (935, 'Mariano Damaso Beraun', 92), (936, 'Huacrachuco', 93), (937, 'Cholon', 93), (938, 'San Buenaventura', 93), (939, 'Panao', 94), (940, 'Chaglla', 94), (941, 'Molino', 94), (942, 'Umari', 94), (943, 'Puerto Inca', 95), (944, 'Codo Del Pozuzo', 95), (945, 'Honoria', 95), (946, 'Tournavista', 95), (947, 'Yuyapichis', 95), (948, 'Jesus', 96), (949, 'Baños', 96), (950, 'Jivia', 96), (951, 'Queropalca', 96), (952, 'Rondos', 96), (953, 'San Francisco De Asis', 96), (954, 'San Miguel De Cauri', 96), (955, 'Chavinillo', 97), (956, 'Cahuac', 97), (957, 'Chacabamba', 97), (958, 'Aparicio Pomares', 97), (959, 'Jacas Chico', 97), (960, 'Obas', 97), (961, 'Pampamarca', 97), (962, 'Choras', 97), (963, 'Ica', 98), (964, 'La Tinguiña', 98), (965, 'Los Aquijes', 98), (966, 'Ocucaje', 98), (967, 'Pachacutec', 98), (968, 'Parcona', 98), (969, 'Pueblo Nuevo', 98), (970, 'Salas', 98), (971, 'San Jose De Los Molinos', 98), (972, 'San Juan Bautista', 98), (973, 'Santiago', 98), (974, 'Subtanjalla', 98), (975, 'Tate', 98), (976, 'Yauca Del Rosario', 98), (977, 'Chincha Alta', 99), (978, 'Alto Laran', 99), (979, 'Chavin', 99), (980, 'Chincha Baja', 99), (981, 'El Carmen', 99), (982, 'Grocio Prado', 99), (983, 'Pueblo Nuevo', 99), (984, 'San Juan De Yanac', 99), (985, 'San Pedro De Huacarpana', 99), (986, 'Sunampe', 99), (987, 'Tambo De Mora', 99), (988, 'Nazca', 100), (989, 'Changuillo', 100), (990, 'El Ingenio', 100), (991, 'Marcona', 100), (992, 'Vista Alegre', 100), (993, 'Palpa', 101), (994, 'Llipata', 101), (995, 'Rio Grande', 101), (996, 'Santa Cruz', 101), (997, 'Tibillo', 101), (998, 'Pisco', 102), (999, 'Huancano', 102), (1000, 'Humay', 102), (1001, 'Independencia', 102), (1002, 'Paracas', 102), (1003, 'San Andres', 102), (1004, 'San Clemente', 102), (1005, 'Tupac Amaru Inca', 102), (1006, 'Huancayo', 103), (1007, 'Carhuacallanga', 103), (1008, 'Chacapampa', 103), (1009, 'Chicche', 103), (1010, 'Chilca', 103), (1011, 'Chongos Alto', 103), (1012, 'Chupuro', 103), (1013, 'Colca', 103), (1014, 'Cullhuas', 103), (1015, 'El Tambo', 103), (1016, 'Huacrapuquio', 103), (1017, 'Hualhuas', 103), (1018, 'Huancan', 103), (1019, 'Huasicancha', 103), (1020, 'Huayucachi', 103), (1021, 'Ingenio', 103), (1022, 'Pariahuanca', 103), (1023, 'Pilcomayo', 103), (1024, 'Pucara', 103), (1025, 'Quichuay', 103), (1026, 'Quilcas', 103), (1027, 'San Agustin', 103), (1028, 'San Jeronimo De Tunan', 103), (1029, 'Saño', 103), (1030, 'Sapallanga', 103), (1031, 'Sicaya', 103), (1032, 'Santo Domingo De Acobamba', 103), (1033, 'Viques', 103), (1034, 'Concepcion', 104), (1035, 'Aco', 104), (1036, 'Andamarca', 104), (1037, 'Chambara', 104), (1038, 'Cochas', 104), (1039, 'Comas', 104), (1040, 'Heroinas Toledo', 104), (1041, 'Manzanares', 104), (1042, 'Mariscal Castilla', 104), (1043, 'Matahuasi', 104), (1044, 'Mito', 104), (1045, 'Nueve De Julio', 104), (1046, 'Orcotuna', 104), (1047, 'San Jose De Quero', 104), (1048, 'Santa Rosa De Ocopa', 104), (1049, 'Chanchamayo', 105), (1050, 'Perene', 105), (1051, 'Pichanaqui', 105), (1052, 'San Luis De Shuaro', 105), (1053, 'San Ramon', 105), (1054, 'Vitoc', 105), (1055, 'Jauja', 106), (1056, 'Acolla', 106), (1057, 'Apata', 106), (1058, 'Ataura', 106), (1059, 'Canchayllo', 106), (1060, 'Curicaca', 106), (1061, 'El Mantaro', 106), (1062, 'Huamali', 106), (1063, 'Huaripampa', 106), (1064, 'Huertas', 106), (1065, 'Janjaillo', 106), (1066, 'Julcan', 106), (1067, 'Leonor Ordoñez', 106), (1068, 'Llocllapampa', 106), (1069, 'Marco', 106), (1070, 'Masma', 106), (1071, 'Masma Chicche', 106), (1072, 'Molinos', 106), (1073, 'Monobamba', 106), (1074, 'Muqui', 106), (1075, 'Muquiyauyo', 106), (1076, 'Paca', 106), (1077, 'Paccha', 106), (1078, 'Pancan', 106), (1079, 'Parco', 106), (1080, 'Pomacancha', 106), (1081, 'Ricran', 106), (1082, 'San Lorenzo', 106), (1083, 'San Pedro De Chunan', 106), (1084, 'Sausa', 106), (1085, 'Sincos', 106), (1086, 'Tunan Marca', 106), (1087, 'Yauli', 106), (1088, 'Yauyos', 106), (1089, 'Junin', 107), (1090, 'Carhuamayo', 107), (1091, 'Ondores', 107), (1092, 'Ulcumayo', 107), (1093, 'Satipo', 108), (1094, 'Coviriali', 108), (1095, 'Llaylla', 108), (1096, 'Mazamari', 108), (1097, 'Pampa Hermosa', 108), (1098, 'Pangoa', 108), (1099, 'Rio Negro', 108), (1100, 'Rio Tambo', 108), (1101, 'Tarma', 109), (1102, 'Acobamba', 109), (1103, 'Huaricolca', 109), (1104, 'Huasahuasi', 109), (1105, 'La Union', 109), (1106, 'Palca', 109), (1107, 'Palcamayo', 109), (1108, 'San Pedro De Cajas', 109), (1109, 'Tapo', 109), (1110, 'La Oroya', 110), (1111, 'Chacapalpa', 110), (1112, 'Huay-Huay', 110), (1113, 'Marcapomacocha', 110), (1114, 'Morococha', 110), (1115, 'Paccha', 110), (1116, 'Santa Barbara De Carhuacayan', 110), (1117, 'Santa Rosa De Sacco', 110), (1118, 'Suitucancha', 110), (1119, 'Yauli', 110), (1120, 'Chupaca', 111), (1121, 'Ahuac', 111), (1122, 'Chongos Bajo', 111), (1123, 'Huachac', 111), (1124, 'Huamancaca Chico', 111), (1125, 'San Juan De Iscos', 111), (1126, 'San Juan De Jarpa', 111), (1127, 'Tres De Diciembre', 111), (1128, 'Yanacancha', 111), (1129, 'Trujillo', 112), (1130, 'El Porvenir', 112), (1131, 'Florencia De Mora', 112), (1132, 'Huanchaco', 112), (1133, 'La Esperanza', 112), (1134, 'Laredo', 112), (1135, 'Moche', 112), (1136, 'Poroto', 112), (1137, 'Salaverry', 112), (1138, 'Simbal', 112), (1139, 'Victor Larco Herrera', 112), (1140, 'Ascope', 113), (1141, 'Chicama', 113), (1142, 'Chocope', 113), (1143, 'Magdalena De Cao', 113), (1144, 'Paijan', 113), (1145, 'Razuri', 113), (1146, 'Santiago De Cao', 113), (1147, 'Casa Grande', 113), (1148, 'Bolivar', 114), (1149, 'Bambamarca', 114), (1150, 'Condormarca', 114), (1151, 'Longotea', 114), (1152, 'Uchumarca', 114), (1153, 'Ucuncha', 114), (1154, 'Chepen', 115), (1155, 'Pacanga', 115), (1156, 'Pueblo Nuevo', 115), (1157, 'Julcan', 116), (1158, 'Calamarca', 116), (1159, 'Carabamba', 116), (1160, 'Huaso', 116), (1161, 'Otuzco', 117), (1162, 'Agallpampa', 117), (1163, 'Charat', 117), (1164, 'Huaranchal', 117), (1165, 'La Cuesta', 117), (1166, 'Mache', 117), (1167, 'Paranday', 117), (1168, 'Salpo', 117), (1169, 'Sinsicap', 117), (1170, 'Usquil', 117), (1171, 'San Pedro De Lloc', 118), (1172, 'Guadalupe', 118), (1173, 'Jequetepeque', 118), (1174, 'Pacasmayo', 118), (1175, 'San Jose', 118), (1176, 'Tayabamba', 119), (1177, 'Buldibuyo', 119), (1178, 'Chillia', 119), (1179, 'Huancaspata', 119), (1180, 'Huaylillas', 119), (1181, 'Huayo', 119), (1182, 'Ongon', 119), (1183, 'Parcoy', 119), (1184, 'Pataz', 119), (1185, 'Pias', 119), (1186, 'Santiago De Challas', 119), (1187, 'Taurija', 119), (1188, 'Urpay', 119), (1189, 'Huamachuco', 120), (1190, 'Chugay', 120), (1191, 'Cochorco', 120), (1192, 'Curgos', 120), (1193, 'Marcabal', 120), (1194, 'Sanagoran', 120), (1195, 'Sarin', 120), (1196, 'Sartimbamba', 120), (1197, 'Santiago De Chuco', 121), (1198, 'Angasmarca', 121), (1199, 'Cachicadan', 121), (1200, 'Mollebamba', 121), (1201, 'Mollepata', 121), (1202, 'Quiruvilca', 121), (1203, 'Santa Cruz De Chuca', 121), (1204, 'Sitabamba', 121), (1205, 'Gran Chimu', 122), (1206, 'Cascas', 122), (1207, 'Lucma', 122), (1208, 'Marmot', 122), (1209, 'Sayapullo', 122), (1210, 'Viru', 123), (1211, 'Chao', 123), (1212, 'Guadalupito', 123), (1213, 'Chiclayo', 124), (1214, 'Chongoyape', 124), (1215, 'Eten', 124), (1216, 'Eten Puerto', 124), (1217, 'Jose Leonardo Ortiz', 124), (1218, 'La Victoria', 124), (1219, 'Lagunas', 124), (1220, 'Monsefu', 124), (1221, 'Nueva Arica', 124), (1222, 'Oyotun', 124), (1223, 'Picsi', 124), (1224, 'Pimentel', 124), (1225, 'Reque', 124), (1226, 'Santa Rosa', 124), (1227, 'Saña', 124), (1228, 'Cayalti', 124), (1229, 'Patapo', 124), (1230, 'Pomalca', 124), (1231, 'Pucala', 124), (1232, 'Tuman', 124), (1233, 'Ferreñafe', 125), (1234, 'Cañaris', 125), (1235, 'Incahuasi', 125), (1236, 'Manuel Antonio Mesones Muro', 125), (1237, 'Pitipo', 125), (1238, 'Pueblo Nuevo', 125), (1239, 'Lambayeque', 126), (1240, 'Chochope', 126), (1241, 'Illimo', 126), (1242, 'Jayanca', 126), (1243, 'Mochumi', 126), (1244, 'Morrope', 126), (1245, 'Motupe', 126), (1246, 'Olmos', 126), (1247, 'Pacora', 126), (1248, 'Salas', 126), (1249, 'San Jose', 126), (1250, 'Tucume', 126), (1251, 'Lima', 127), (1252, 'Ancon', 127), (1253, 'Ate', 127), (1254, 'Barranco', 127), (1255, 'Breña', 127), (1256, 'Carabayllo', 127), (1257, 'Chaclacayo', 127), (1258, 'Chorrillos', 127), (1259, 'Cieneguilla', 127), (1260, 'Comas', 127), (1261, 'El Agustino', 127), (1262, 'Independencia', 127), (1263, 'Jesus Maria', 127), (1264, 'La Molina', 127), (1265, 'La Victoria', 127), (1266, 'Lince', 127), (1267, 'Los Olivos', 127), (1268, 'Lurigancho', 127), (1269, 'Lurin', 127), (1270, 'Magdalena Del Mar', 127), (1271, 'Magdalena Vieja', 127), (1272, 'Miraflores', 127), (1273, 'Pachacamac', 127), (1274, 'Pucusana', 127), (1275, 'Puente Piedra', 127), (1276, 'Punta Hermosa', 127), (1277, 'Punta Negra', 127), (1278, 'Rimac', 127), (1279, 'San Bartolo', 127), (1280, 'San Borja', 127), (1281, 'San Isidro', 127), (1282, 'San Juan De Lurigancho', 127), (1283, 'San Juan De Miraflores', 127), (1284, 'San Luis', 127), (1285, 'San Martin De Porres', 127), (1286, 'San Miguel', 127), (1287, 'Santa Anita', 127), (1288, 'Santa Maria Del Mar', 127), (1289, 'Santa Rosa', 127), (1290, 'Santiago De Surco', 127), (1291, 'Surquillo', 127), (1292, 'Villa El Salvador', 127), (1293, 'Villa Maria Del Triunfo', 127), (1294, 'Barranca', 128), (1295, 'Paramonga', 128), (1296, 'Pativilca', 128), (1297, 'Supe', 128), (1298, 'Supe Puerto', 128), (1299, 'Cajatambo', 129), (1300, 'Copa', 129), (1301, 'Gorgor', 129), (1302, 'Huancapon', 129), (1303, 'Manas', 129), (1304, 'Canta', 130), (1305, 'Arahuay', 130), (1306, 'Huamantanga', 130), (1307, 'Huaros', 130), (1308, 'Lachaqui', 130), (1309, 'San Buenaventura', 130), (1310, 'Santa Rosa De Quives', 130), (1311, 'San Vicente De Cañete', 131), (1312, 'Asia', 131), (1313, 'Calango', 131), (1314, 'Cerro Azul', 131), (1315, 'Chilca', 131), (1316, 'Coayllo', 131), (1317, 'Imperial', 131), (1318, 'Lunahuana', 131), (1319, 'Mala', 131), (1320, 'Nuevo Imperial', 131), (1321, 'Pacaran', 131), (1322, 'Quilmana', 131), (1323, 'San Antonio', 131), (1324, 'San Luis', 131), (1325, 'Santa Cruz De Flores', 131), (1326, 'Zuñiga', 131), (1327, 'Huaral', 132), (1328, 'Atavillos Alto', 132), (1329, 'Atavillos Bajo', 132), (1330, 'Aucallama', 132), (1331, 'Chancay', 132), (1332, 'Ihuari', 132), (1333, 'Lampian', 132), (1334, 'Pacaraos', 132), (1335, 'San Miguel De Acos', 132), (1336, 'Santa Cruz De Andamarca', 132), (1337, 'Sumbilca', 132), (1338, 'Veintisiete De Noviembre', 132), (1339, 'Matucana', 133), (1340, 'Antioquia', 133), (1341, 'Callahuanca', 133), (1342, 'Carampoma', 133), (1343, 'Chicla', 133), (1344, 'Cuenca', 133), (1345, 'Huachupampa', 133), (1346, 'Huanza', 133), (1347, 'Huarochiri', 133), (1348, 'Lahuaytambo', 133), (1349, 'Langa', 133), (1350, 'Laraos', 133), (1351, 'Mariatana', 133), (1352, 'Ricardo Palma', 133), (1353, 'San Andres De Tupicocha', 133), (1354, 'San Antonio', 133), (1355, 'San Bartolome', 133), (1356, 'San Damian', 133), (1357, 'San Juan De Iris', 133), (1358, 'San Juan De Tantaranche', 133), (1359, 'San Lorenzo De Quinti', 133), (1360, 'San Mateo', 133), (1361, 'San Mateo De Otao', 133), (1362, 'San Pedro De Casta', 133), (1363, 'San Pedro De Huancayre', 133), (1364, 'Sangallaya', 133), (1365, 'Santa Cruz De Cocachacra', 133), (1366, 'Santa Eulalia', 133), (1367, 'Santiago De Anchucaya', 133), (1368, 'Santiago De Tuna', 133), (1369, 'Santo Domingo De Los Olleros', 133), (1370, 'Surco', 133), (1371, 'Huacho', 134), (1372, 'Ambar', 134), (1373, 'Caleta De Carquin', 134), (1374, 'Checras', 134), (1375, 'Hualmay', 134), (1376, 'Huaura', 134), (1377, 'Leoncio Prado', 134), (1378, 'Paccho', 134), (1379, 'Santa Leonor', 134), (1380, 'Santa Maria', 134), (1381, 'Sayan', 134), (1382, 'Vegueta', 134), (1383, 'Oyon', 135), (1384, 'Andajes', 135), (1385, 'Caujul', 135), (1386, 'Cochamarca', 135), (1387, 'Navan', 135), (1388, 'Pachangara', 135), (1389, 'Yauyos', 136), (1390, 'Alis', 136), (1391, 'Ayauca', 136), (1392, 'Ayaviri', 136), (1393, 'Azangaro', 136), (1394, 'Cacra', 136), (1395, 'Carania', 136), (1396, 'Catahuasi', 136), (1397, 'Chocos', 136), (1398, 'Cochas', 136), (1399, 'Colonia', 136), (1400, 'Hongos', 136), (1401, 'Huampara', 136), (1402, 'Huancaya', 136), (1403, 'Huangascar', 136), (1404, 'Huantan', 136), (1405, 'Huañec', 136), (1406, 'Laraos', 136), (1407, 'Lincha', 136), (1408, 'Madean', 136), (1409, 'Miraflores', 136), (1410, 'Omas', 136), (1411, 'Putinza', 136), (1412, 'Quinches', 136), (1413, 'Quinocay', 136), (1414, 'San Joaquin', 136), (1415, 'San Pedro De Pilas', 136), (1416, 'Tanta', 136), (1417, 'Tauripampa', 136), (1418, 'Tomas', 136), (1419, 'Tupe', 136), (1420, 'Viñac', 136), (1421, 'Vitis', 136), (1422, 'Iquitos', 137), (1423, 'Alto Nanay', 137), (1424, 'Fernando Lores', 137), (1425, 'Indiana', 137), (1426, 'Las Amazonas', 137), (1427, 'Mazan', 137), (1428, 'Napo', 137), (1429, 'Punchana', 137), (1430, 'Putumayo', 137), (1431, 'Torres Causana', 137), (1432, 'Belen', 137), (1433, 'San Juan Bautista', 137), (1434, 'Yurimaguas', 138), (1435, 'Balsapuerto', 138), (1436, 'Barranca', 138), (1437, 'Cahuapanas', 138), (1438, 'Jeberos', 138), (1439, 'Lagunas', 138), (1440, 'Manseriche', 138), (1441, 'Morona', 138), (1442, 'Pastaza', 138), (1443, 'Santa Cruz', 138), (1444, 'Teniente Cesar Lopez Rojas', 138), (1445, 'Nauta', 139), (1446, 'Parinari', 139), (1447, 'Tigre', 139), (1448, 'Trompeteros', 139), (1449, 'Urarinas', 139), (1450, 'Ramon Castilla', 140), (1451, 'Pebas', 140), (1452, 'Yavari', 140), (1453, 'San Pablo', 140), (1454, 'Requena', 141), (1455, 'Alto Tapiche', 141), (1456, 'Capelo', 141), (1457, 'Emilio San Martin', 141), (1458, 'Maquia', 141), (1459, 'Puinahua', 141), (1460, 'Saquena', 141), (1461, 'Soplin', 141), (1462, 'Tapiche', 141), (1463, 'Jenaro Herrera', 141), (1464, 'Yaquerana', 141), (1465, 'Contamana', 142), (1466, 'Inahuaya', 142), (1467, 'Padre Marquez', 142), (1468, 'Pampa Hermosa', 142), (1469, 'Sarayacu', 142), (1470, 'Vargas Guerra', 142), (1471, 'Tambopata', 143), (1472, 'Inambari', 143), (1473, 'Las Piedras', 143), (1474, 'Laberinto', 143), (1475, 'Manu', 144), (1476, 'Fitzcarrald', 144), (1477, 'Madre De Dios', 144), (1478, 'Huepetuhe', 144), (1479, 'Iñapari', 145), (1480, 'Iberia', 145), (1481, 'Tahuamanu', 145), (1482, 'Moquegua', 146), (1483, 'Carumas', 146), (1484, 'Cuchumbaya', 146), (1485, 'Samegua', 146), (1486, 'San Cristobal', 146), (1487, 'Torata', 146), (1488, 'Omate', 147), (1489, 'Chojata', 147), (1490, 'Coalaque', 147), (1491, 'Ichuña', 147), (1492, 'La Capilla', 147), (1493, 'Lloque', 147), (1494, 'Matalaque', 147), (1495, 'Puquina', 147), (1496, 'Quinistaquillas', 147), (1497, 'Ubinas', 147), (1498, 'Yunga', 147), (1499, 'Ilo', 148), (1500, 'El Algarrobal', 148), (1501, 'Pacocha', 148), (1502, 'Chaupimarca', 149), (1503, 'Huachon', 149), (1504, 'Huariaca', 149), (1505, 'Huayllay', 149), (1506, 'Ninacaca', 149), (1507, 'Pallanchacra', 149), (1508, 'Paucartambo', 149), (1509, 'San Fco.De Asis De Yarusyacan', 149), (1510, 'Simon Bolivar', 149), (1511, 'Ticlacayan', 149), (1512, 'Tinyahuarco', 149), (1513, 'Vicco', 149), (1514, 'Yanacancha', 149), (1515, 'Yanahuanca', 150), (1516, 'Chacayan', 150), (1517, 'Goyllarisquizga', 150), (1518, 'Paucar', 150), (1519, 'San Pedro De Pillao', 150), (1520, 'Santa Ana De Tusi', 150), (1521, 'Tapuc', 150), (1522, 'Vilcabamba', 150), (1523, 'Oxapampa', 151), (1524, 'Chontabamba', 151), (1525, 'Huancabamba', 151), (1526, 'Palcazu', 151), (1527, 'Pozuzo', 151), (1528, 'Puerto Bermudez', 151), (1529, 'Villa Rica', 151), (1530, 'Piura', 152), (1531, 'Castilla', 152), (1532, 'Catacaos', 152), (1533, 'Cura Mori', 152), (1534, 'El Tallan', 152), (1535, 'La Arena', 152), (1536, 'La Union', 152), (1537, 'Las Lomas', 152), (1538, 'Tambo Grande', 152), (1539, 'Ayabaca', 153), (1540, 'Frias', 153), (1541, 'Jilili', 153), (1542, 'Lagunas', 153), (1543, 'Montero', 153), (1544, 'Pacaipampa', 153), (1545, 'Paimas', 153), (1546, 'Sapillica', 153), (1547, 'Sicchez', 153), (1548, 'Suyo', 153), (1549, 'Huancabamba', 154), (1550, 'Canchaque', 154), (1551, 'El Carmen De La Frontera', 154), (1552, 'Huarmaca', 154), (1553, 'Lalaquiz', 154), (1554, 'San Miguel De El Faique', 154), (1555, 'Sondor', 154), (1556, 'Sondorillo', 154), (1557, 'Chulucanas', 155), (1558, 'Buenos Aires', 155), (1559, 'Chalaco', 155), (1560, 'La Matanza', 155), (1561, 'Morropon', 155), (1562, 'Salitral', 155), (1563, 'San Juan De Bigote', 155), (1564, 'Santa Catalina De Mossa', 155), (1565, 'Santo Domingo', 155), (1566, 'Yamango', 155), (1567, 'Paita', 156), (1568, 'Amotape', 156), (1569, 'Arenal', 156), (1570, 'Colan', 156), (1571, 'La Huaca', 156), (1572, 'Tamarindo', 156), (1573, 'Vichayal', 156), (1574, 'Sullana', 157), (1575, 'Bellavista', 157), (1576, 'Ignacio Escudero', 157), (1577, 'Lancones', 157), (1578, 'Marcavelica', 157), (1579, 'Miguel Checa', 157), (1580, 'Querecotillo', 157), (1581, 'Salitral', 157), (1582, 'Pariñas', 158), (1583, 'El Alto', 158), (1584, 'La Brea', 158), (1585, 'Lobitos', 158), (1586, 'Los Organos', 158), (1587, 'Mancora', 158), (1588, 'Sechura', 159), (1589, 'Bellavista De La Union', 159), (1590, 'Bernal', 159), (1591, 'Cristo Nos Valga', 159), (1592, 'Vice', 159), (1593, 'Rinconada Llicuar', 159), (1594, 'Puno', 160), (1595, 'Acora', 160), (1596, 'Amantani', 160), (1597, 'Atuncolla', 160), (1598, 'Capachica', 160), (1599, 'Chucuito', 160), (1600, 'Coata', 160), (1601, 'Huata', 160), (1602, 'Mañazo', 160), (1603, 'Paucarcolla', 160), (1604, 'Pichacani', 160), (1605, 'Plateria', 160), (1606, 'San Antonio', 160), (1607, 'Tiquillaca', 160), (1608, 'Vilque', 160), (1609, 'Azangaro', 161), (1610, 'Achaya', 161), (1611, 'Arapa', 161), (1612, 'Asillo', 161), (1613, 'Caminaca', 161), (1614, 'Chupa', 161), (1615, 'Jose Domingo Choquehuanca', 161), (1616, 'Muñani', 161), (1617, 'Potoni', 161), (1618, 'Saman', 161), (1619, 'San Anton', 161), (1620, 'San Jose', 161), (1621, 'San Juan De Salinas', 161), (1622, 'Santiago De Pupuja', 161), (1623, 'Tirapata', 161), (1624, 'Macusani', 162), (1625, 'Ajoyani', 162), (1626, 'Ayapata', 162), (1627, 'Coasa', 162), (1628, 'Corani', 162), (1629, 'Crucero', 162), (1630, 'Ituata', 162), (1631, 'Ollachea', 162), (1632, 'San Gaban', 162), (1633, 'Usicayos', 162), (1634, 'Juli', 163), (1635, 'Desaguadero', 163), (1636, 'Huacullani', 163), (1637, 'Kelluyo', 163), (1638, 'Pisacoma', 163), (1639, 'Pomata', 163), (1640, 'Zepita', 163), (1641, 'Ilave', 164), (1642, 'Capazo', 164), (1643, 'Pilcuyo', 164), (1644, 'Santa Rosa', 164), (1645, 'Conduriri', 164), (1646, 'Huancane', 165), (1647, 'Cojata', 165), (1648, 'Huatasani', 165), (1649, 'Inchupalla', 165), (1650, 'Pusi', 165), (1651, 'Rosaspata', 165), (1652, 'Taraco', 165), (1653, 'Vilque Chico', 165), (1654, 'Lampa', 166), (1655, 'Cabanilla', 166), (1656, 'Calapuja', 166), (1657, 'Nicasio', 166), (1658, 'Ocuviri', 166), (1659, 'Palca', 166), (1660, 'Paratia', 166), (1661, 'Pucara', 166), (1662, 'Santa Lucia', 166), (1663, 'Vilavila', 166), (1664, 'Ayaviri', 167), (1665, 'Antauta', 167), (1666, 'Cupi', 167), (1667, 'Llalli', 167), (1668, 'Macari', 167), (1669, 'Nuñoa', 167), (1670, 'Orurillo', 167), (1671, 'Santa Rosa', 167), (1672, 'Umachiri', 167), (1673, 'Moho', 168), (1674, 'Conima', 168), (1675, 'Huayrapata', 168), (1676, 'Tilali', 168), (1677, 'Putina', 169), (1678, 'Ananea', 169), (1679, 'Pedro Vilca Apaza', 169), (1680, 'Quilcapuncu', 169), (1681, 'Sina', 169), (1682, 'Juliaca', 170), (1683, 'Cabana', 170), (1684, 'Cabanillas', 170), (1685, 'Caracoto', 170), (1686, 'Sandia', 171), (1687, 'Cuyocuyo', 171), (1688, 'Limbani', 171), (1689, 'Patambuco', 171), (1690, 'Phara', 171), (1691, 'Quiaca', 171), (1692, 'San Juan Del Oro', 171), (1693, 'Yanahuaya', 171), (1694, 'Alto Inambari', 171), (1695, 'Yunguyo', 172), (1696, 'Anapia', 172), (1697, 'Copani', 172), (1698, 'Cuturapi', 172), (1699, 'Ollaraya', 172), (1700, 'Tinicachi', 172), (1701, 'Unicachi', 172), (1702, 'Moyobamba', 173), (1703, 'Calzada', 173), (1704, 'Habana', 173), (1705, 'Jepelacio', 173), (1706, 'Soritor', 173), (1707, 'Yantalo', 173), (1708, 'Bellavista', 174), (1709, 'Alto Biavo', 174), (1710, 'Bajo Biavo', 174), (1711, 'Huallaga', 174), (1712, 'San Pablo', 174), (1713, 'San Rafael', 174), (1714, 'San Jose De Sisa', 175), (1715, 'Agua Blanca', 175), (1716, 'San Martin', 175), (1717, 'Santa Rosa', 175), (1718, 'Shatoja', 175), (1719, 'Saposoa', 176), (1720, 'Alto Saposoa', 176), (1721, 'El Eslabon', 176), (1722, 'Piscoyacu', 176), (1723, 'Sacanche', 176), (1724, 'Tingo De Saposoa', 176), (1725, 'Lamas', 177), (1726, 'Alonso De Alvarado', 177), (1727, 'Barranquita', 177), (1728, 'Caynarachi', 177), (1729, 'Cuñumbuqui', 177), (1730, 'Pinto Recodo', 177), (1731, 'Rumisapa', 177), (1732, 'San Roque De Cumbaza', 177), (1733, 'Shanao', 177), (1734, 'Tabalosos', 177), (1735, 'Zapatero', 177), (1736, 'Juanjui', 178), (1737, 'Campanilla', 178), (1738, 'Huicungo', 178), (1739, 'Pachiza', 178), (1740, 'Pajarillo', 178), (1741, 'Picota', 179), (1742, 'Buenos Aires', 179), (1743, 'Caspisapa', 179), (1744, 'Pilluana', 179), (1745, 'Pucacaca', 179), (1746, 'San Cristobal', 179), (1747, 'San Hilarion', 179), (1748, 'Shamboyacu', 179), (1749, 'Tingo De Ponasa', 179), (1750, 'Tres Unidos', 179), (1751, 'Rioja', 180), (1752, 'Awajun', 180), (1753, 'Elias Soplin Vargas', 180), (1754, 'Nueva Cajamarca', 180), (1755, 'Pardo Miguel', 180), (1756, 'Posic', 180), (1757, 'San Fernando', 180), (1758, 'Yorongos', 180), (1759, 'Yuracyacu', 180), (1760, 'Tarapoto', 181), (1761, 'Alberto Leveau', 181), (1762, 'Cacatachi', 181), (1763, 'Chazuta', 181), (1764, 'Chipurana', 181), (1765, 'El Porvenir', 181), (1766, 'Huimbayoc', 181), (1767, 'Juan Guerra', 181), (1768, 'La Banda De Shilcayo', 181), (1769, 'Morales', 181), (1770, 'Papaplaya', 181), (1771, 'San Antonio', 181), (1772, 'Sauce', 181), (1773, 'Shapaja', 181), (1774, 'Tocache', 182), (1775, 'Nuevo Progreso', 182), (1776, 'Polvora', 182), (1777, 'Shunte', 182), (1778, 'Uchiza', 182), (1779, 'Tacna', 183), (1780, 'Alto De La Alianza', 183), (1781, 'Calana', 183), (1782, 'Ciudad Nueva', 183), (1783, 'Inclan', 183), (1784, 'Pachia', 183), (1785, 'Palca', 183), (1786, 'Pocollay', 183), (1787, 'Sama', 183), (1788, 'Coronel Gregorio Albarracin Lanchipa', 183), (1789, 'Candarave', 184), (1790, 'Cairani', 184), (1791, 'Camilaca', 184), (1792, 'Curibaya', 184), (1793, 'Huanuara', 184), (1794, 'Quilahuani', 184), (1795, 'Locumba', 185), (1796, 'Ilabaya', 185), (1797, 'Ite', 185), (1798, 'Tarata', 186), (1799, 'Chucatamani', 186), (1800, 'Estique', 186), (1801, 'Estique-Pampa', 186), (1802, 'Sitajara', 186), (1803, 'Susapaya', 186), (1804, 'Tarucachi', 186), (1805, 'Ticaco', 186), (1806, 'Tumbes', 187), (1807, 'Corrales', 187), (1808, 'La Cruz', 187), (1809, 'Pampas De Hospital', 187), (1810, 'San Jacinto', 187), (1811, 'San Juan De La Virgen', 187), (1812, 'Zorritos', 188), (1813, 'Casitas', 188), (1814, 'Zarumilla', 189), (1815, 'Aguas Verdes', 189), (1816, 'Matapalo', 189), (1817, 'Papayal', 189), (1818, 'Calleria', 190), (1819, 'Campoverde', 190), (1820, 'Iparia', 190), (1821, 'Masisea', 190), (1822, 'Yarinacocha', 190), (1823, 'Nueva Requena', 190), (1824, 'Raymondi', 191), (1825, 'Sepahua', 191), (1826, 'Tahuania', 191), (1827, 'Yurua', 191), (1828, 'Padre Abad', 192), (1829, 'Irazola', 192), (1830, 'Curimana', 192), (1831, 'Purus', 193);






