create database projectSayu;

create table users(
    id int auto_increment primary key,
    userName varchar(30) not null,
    password varchar(120) not null,
);

create table userProfile(
    id int auto_increment primary key,
    idUser int,
    userName varchar(60),
    firstLastName varchar(60),
    secondLastName varchar(60),
    email varchar(60),
    cellphone varchar(15),

    constraint userProfileIdUser
        foreign key (idUser) references users (id)
        on delete set null
        on update cascade
);

create table permissions(
    id int auto_increment primary key,
    idUser int,
    privilege varchar(60),

    constraint permissionsIdUser
        foreign key (idUser) references users (id)
        on delete set null
        on update cascade
);

create table task{
    id int auto_increment primary key,
    title varchar(60),
    stateTask varchar(30),
    descriptionTask varchar(250),
}
