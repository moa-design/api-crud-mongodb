🛒 API RESTful CRUD - Node.js + MongoDB
📌 Descripción

Este proyecto consiste en el desarrollo de una API RESTful utilizando Node.js, Express y MongoDB (Mongoose), que permite gestionar productos, categorías y usuarios.

La aplicación implementa operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y aplica una arquitectura basada en separación de responsabilidades mediante capas de Controllers y Services.

🚀 Tecnologías utilizadas
Node.js
Express.js
MongoDB
Mongoose
bcryptjs (encriptación de contraseñas)
JSON Web Token (JWT)
dotenv
cors
🗂️ Estructura del proyecto
proyecto-crud-mongodb/
│── app.js
│── package.json
│── .env
│── .env.example
└── src/
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── productModel.js
    │   ├── categoryModel.js
    │   └── userModel.js
    ├── services/
    │   ├── productService.js
    │   ├── categoryService.js
    │   └── userService.js
    ├── controllers/
    │   ├── productController.js
    │   ├── categoryController.js
    │   └── userController.js
    ├── routes/
    │   ├── productRoute.js
    │   ├── categoryRoute.js
    │   └── userRoute.js
    └── middleware/
        └── verifyToken.js
🧠 Modelo de Datos
📦 Categoría
name: String (requerido)
description: String
🛍️ Producto
name: String
description: String
price: Number
stock: Number
category: ObjectId (referencia a Categoría)
👤 Usuario
name: String
email: String (único)
password: String (encriptada)
🔐 Autenticación

El sistema implementa autenticación mediante JWT.

Registro de usuario
Login con generación de token
Middleware de verificación de token para rutas protegidas
⚙️ Instalación y ejecución
Clonar el repositorio:
git clone https://github.com/TU-USUARIO/TU-REPO.git
cd proyecto-crud-mongodb
Instalar dependencias:
npm install
Crear archivo .env:
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/proyectoCrud
JWT_SECRET=123456
Ejecutar el proyecto:
npm run dev
📡 Endpoints
👤 Usuarios
Registro

POST /api/users/register

{
  "name": "Usuario",
  "email": "usuario@mail.com",
  "password": "123456"
}
Login

POST /api/users/login

{
  "email": "usuario@mail.com",
  "password": "123456"
}
📂 Categorías
Crear

POST /api/categories

Obtener todas

GET /api/categories

Obtener por ID

GET /api/categories/

Actualizar

PUT /api/categories/

Eliminar

DELETE /api/categories/

🛒 Productos
Crear

POST /api/products

{
  "name": "Producto",
  "description": "Descripción",
  "price": 1000,
  "stock": 10,
  "category": "ID_CATEGORIA"
}
Obtener todos

GET /api/products

👉 Incluye populate de categoría

Obtener por ID

GET /api/products/

Actualizar

PUT /api/products/

Eliminar

DELETE /api/products/

🔥 Características principales
CRUD completo de productos y categorías
Relación entre entidades (Producto → Categoría)
Uso de populate para datos relacionados
Encriptación de contraseñas con bcrypt
Autenticación con JWT
Arquitectura modular (Controllers + Services)
Manejo de errores y códigos HTTP
🧪 Ejemplos de uso
Crear categoría
{
  "name": "Electrónica",
  "description": "Productos tecnológicos"
}
Crear producto
{
  "name": "Mouse Gamer",
  "description": "RGB",
  "price": 25000,
  "stock": 10,
  "category": "ID_CATEGORIA"
}
📌 Notas
No se incluye el archivo .env por seguridad.
Se proporciona .env.example como referencia.
Las rutas protegidas requieren token en headers:
Authorization: Bearer TOKEN
👨‍💻 Autor

Desarrollado por Agustín Federico Moa