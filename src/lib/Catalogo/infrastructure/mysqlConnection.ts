import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

if (!DB_HOST || !DB_USER || !DB_NAME || !DB_PORT) {
    throw new Error('Faltan variables de entorno para la conexión a MySQL');
}

export const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD || '',
    database: DB_NAME,
    port: Number(DB_PORT),
});
