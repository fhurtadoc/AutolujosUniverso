/*
Solo para distribuciones linux es necesario crear usuario 

CREATE USER 'auto_lujos'@'localhost' IDENTIFIED BY '1234';

GRANT ALL PRIVILEGES ON * . * TO 'auto_lujos'@'localhost';

//ALTER USER 'auto_lujos'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

FLUSH PRIVILEGES;

SHOW GRANTS FOR 'auto_lujos'@'localhost';

sudo mysql -u auto_lujos -p

*/


CREATE DATABASE autolujos_universo;
USE autolujos_universo;

CREATE TABLE usuarios (
    id_usuario INT NOT NULL auto_increment PRIMARY KEY,
    nom_usuario VARCHAR (100), 
    contrasena VARCHAR(100),
    permisos INt,
    correo VARCHAR(100),
    estado INT 
);


CREATE TABLE permisos (
    id_permisos INT NOT NULL auto_increment PRIMARY KEY, 
    nombre_permisos VARCHAR(100),
    detalle VARCHAR(100),
    UNIQUE KEY permisos_UN (nombre_permisos)
);

CREATE TABLE articulos(
    id_articulo INT  NOT NULL auto_increment PRIMARY KEY,
    id_categoria INT, 
    codigo VARCHAR(100),
    nombre VARCHAR(100),
    precio_venta BOOLEAN,
    stock INT, 
    descripcion VARCHAR(100),
    imagen VARCHAR(100),
    estado INT
);
CREATE TABLE categoria (
    id_categoria INT NOT NULL  auto_increment PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(100),
    estado INT     
);
CREATE TABLE detalle_venta(
    id_detalle_venta INT NOT NULL auto_increment PRIMARY KEY, 
    id_venta INT, 
    id_articulo INT, 
    cantidad INT, 
    precio  BOOLEAN,
    descuento BOOLEAN
); 
CREATE TABLE venta (
    id_venta INT  NOT NULL auto_increment PRIMARY KEY,
    id_ciente INT, 
    id_usuario INT, 
    fecha DATE,
    total  BOOLEAN,
    estado INT
);
CREATE TABLE detalle_ingreso (
    id_detalle_ingreso INT NOT NULL auto_increment PRIMARY KEY, 
    id_articulo INT, 
    cantidad INT, 
    precio BOOLEAN
);

CREATE TABLE ingreso (
    id_ingreso INT NOT NULL auto_increment PRIMARY KEY, 
    id_provedor INT, 
    id_user INT, 
    fecha DATE,
    impuesto BOOLEAN,
    total BOOLEAN,
    estado INT
);

CREATE TABLE provedor(
    id_prov INT NOT NULL auto_increment PRIMARY KEY,
    nom_prov VARCHAR(100),
    nit VARCHAR(100), 
    esatdo INT, 
    telefono VARCHAR(100),
    correo VARCHAR(100)
);

--creacion de usuario adminsitrador
INSERT
	INTO
	usuarios set
	nom_usuario = 'ADMON',
	contrasena = '$2a$10$KkvROJYbalmpXTTbBJkoGukmw0HtH/YrzIbPKcQvkrWpZg1VGjOVK', --PASS 12345
	perfil = 1,
	correo = 'admon@admon.com'


INSERT INTO autolujos_universo.permisos (nombre_permisos, detalle)  
VALUES('ADMON', 'administrador del sistema servicios ilimitados');

INSERT INTO autolujos_universo.permisos (nombre_permisos, detalle)  
VALUES('GERENTE', 'gestion de inventario - registro de ventas -ingreso de productos -solicitud de informes')

INSERT INTO autolujos_universo.permisos (nombre_permisos, detalle)  
VALUES('ADMINISTRADOR', 'gestion de inventario - registro de ventas -ingreso de productos');

INSERT INTO autolujos_universo.permisos (nombre_permisos, detalle)  
VALUES('TRABAJADOR', 'registro de ventas');
