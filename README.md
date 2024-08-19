# CRUD-task

Esta es una lista de "quehaceres" que tiene la capacidad de visualizar, agregar, editar y borrar tareas para hacer.
Emite mensajes de error en caso que el "titulo" sea muy extenso y la "descripcion" esté vacía.

###Instruccion de instalacion

**Clonar el Repositorio**

`git clone https://github.com/tu-usuario/crud-task-backend.git`

**Instalar dependencias**

`npm i express sequelize mysql2 dotenv`

**Crear un archivo ".env" y agresgar**
PORT= 5000
DB_NAME= "tasks_db"
DB_HOST = "localhost"
DB_USER= "root"
DB_PASSWORD = ""

**Base de datos**
Crear una base de datos que tenga el nombre "tasks_db"

**Iniciar el servidor**

`npm run dev`
