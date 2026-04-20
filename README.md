# API RESTful CRUD - Node.js + MongoDB

## Descripción

Este proyecto consiste en el desarrollo de una API RESTful utilizando Node.js, Express y MongoDB (Mongoose), que permite gestionar productos, categorías y usuarios.

La aplicación implementa operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y aplica una arquitectura basada en separación de responsabilidades mediante capas de Controllers y Services.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs (encriptación de contraseñas)
- JSON Web Token (JWT)
- dotenv
- cors

---

## Estructura del proyecto

```
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
```

---

## Esquema de la DB

### Categoría
| Campo | Tipo | Requerido |
|---|---|---|
| name | String | Sí |
| description | String | No |

### Producto
| Campo | Tipo | Requerido |
|---|---|---|
| name | String | Sí |
| description | String | No |
| price | Number | Sí |
| stock | Number | Sí |
| category | ObjectId (ref: Category) | Sí |

### Usuario
| Campo | Tipo | Requerido |
|---|---|---|
| name | String | Sí |
| email | String (único) | Sí |
| password | String (encriptada con bcrypt) | Sí |

---

## Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd proyecto-crud-mongodb
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno. Copiar `.env.example` y renombrarlo a `.env`:
```bash
cp .env.example .env
```
Luego completar los valores en `.env` con tu URI de MongoDB y una clave secreta para JWT.

4. Ejecutar el servidor en modo desarrollo:
```bash
npm run dev
```

O en modo producción:
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

---

## Autenticación

Las rutas de creación, actualización y eliminación de productos y categorías están protegidas por JWT.

Para acceder a ellas, incluir el token en el header:
```
Authorization: Bearer <token>
```

El token se obtiene al hacer login en `POST /api/users/login`.

---

## Endpoints

### Usuarios

| Método | Ruta | Descripción | Protegida |
|---|---|---|---|
| POST | /api/users/register | Registrar usuario | No |
| POST | /api/users/login | Login y obtención de token | No |

### Categorías

| Método | Ruta | Descripción | Protegida |
|---|---|---|---|
| GET | /api/categories | Obtener todas las categorías | No |
| GET | /api/categories/:id | Obtener categoría por ID | No |
| POST | /api/categories | Crear categoría | Sí |
| PUT | /api/categories/:id | Actualizar categoría | Sí |
| DELETE | /api/categories/:id | Eliminar categoría | Sí |

### Productos

| Método | Ruta | Descripción | Protegida |
|---|---|---|---|
| GET | /api/products | Obtener todos los productos (con populate de categoría) | No |
| GET | /api/products/:id | Obtener producto por ID | No |
| POST | /api/products | Crear producto | Sí |
| PUT | /api/products/:id | Actualizar producto | Sí |
| DELETE | /api/products/:id | Eliminar producto | Sí |

---

## Ejemplos de datos Mock (POST)

### Registrar usuario
`POST /api/users/register`
```json
{
  "name": "Agustín Moa",
  "email": "agustin@mail.com",
  "password": "123456"
}
```

### Login
`POST /api/users/login`
```json
{
  "email": "agustin@mail.com",
  "password": "123456"
}
```

### Crear categoría
`POST /api/categories`
```json
{
  "name": "Electrónica",
  "description": "Dispositivos electrónicos y accesorios"
}
```

### Crear producto
`POST /api/products`
```json
{
  "name": "Auriculares Bluetooth",
  "description": "Auriculares inalámbricos con cancelación de ruido",
  "price": 15000,
  "stock": 25,
  "category": "ID_DE_CATEGORIA"
}
```

---

Desarrollado por Agustín Federico Moa
