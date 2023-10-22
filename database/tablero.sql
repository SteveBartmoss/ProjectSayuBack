create database tablero;

create table usuarios(
    idusuario int auto_increment primary key,
    usuario varchar(30) not null,
    pass varchar(30) not null,
    rol int not null
);

create table listas(
    idlista int auto_increment primary key,
    titulo varchar(30) not null
);

create table tarea(
    idtarea int auto_increment primary key,
    titulo varchar(30) not null,
    descripcion varchar(256) not null,
    asignado int not null,
    lista int not null,
    estatus int not null,
    incio varchar(10),
    fin varchar(10)
    constraint asignado 
    foreign key (asignado) references usuarios (idusuario),
    constraint lista 
    foreign key (lista) references listas (idlista)
);



