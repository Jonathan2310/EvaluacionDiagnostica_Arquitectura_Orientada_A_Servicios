# API Hexagonal

Esta es una API desarrollada con arquitectura hexagonal. A continuación, se describen los pasos necesarios para levantar los servicios y configurar la base de datos.

## Requisitos

- [Node.js]
- [MySQL]
- [MySQL Workbench]

## Configuración del Entorno

### 1. Clonar el Repositorio

Primero, clona el repositorio a tu máquina local:
git clone https://github.com/Jonathan2310/EvaluacionDiagnostica_Arquitectura_Orientada_A_Servicios


### 2. Instalar dependencias

npm install

### 3. Hacer el archivo .env como el siguiente

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=flower_shop
DB_PORT=3306

### 4. Levantar la API Hexagonal
npm run dev
