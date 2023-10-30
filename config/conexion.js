import { createPool } from "mysql2/promise";

export const conexion=createPool({
    host: 'localhost',
    port: 3306,
    socketPath: '/var/run/mysqld/mysqld.sock',
    user: 'tony',
    password: 'T0n1h4ll4n1472',
    database: 'tablero'
});