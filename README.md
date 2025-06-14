# 📦 Inventario Backend

API RESTful para gestionar productos, entradas y salidas de un sistema de inventario. Desarrollado con **Node.js, Express y MongoDB** usando una arquitectura limpia y lista para producción.

Desarrollado por **Adan Lugo (ElderL9)**  
📧 adan.lugo.barrientos@outlook.com

---

## 🚀 Funcionalidad Implementada

### 🔐 Autenticación con JWT
- Login (`POST /api/auth/login`)
- Ruta protegida `/me`
- Soporte para roles (`admin` y `user`)

### 📦 Gestión de productos
- Crear, obtener, actualizar y eliminar productos
- Buscar por nombre o categoría
- Prevención de duplicados por `name + category`
- Estado dinámico: `disponible` o `no disponible` según el stock

### 🧾 Entradas
- Registrar entrada (`POST /api/entries`)
- Aumenta el stock del producto

### 📤 Salidas
- Registrar salida (`POST /api/exits`)
- Disminuye el stock y actualiza el estado

---

## 🧱 Estructura del proyecto

inventario-backend/
│
├── api/ # Punto de entrada para Vercel
│ └── index.js
│
├── controllers/ # Lógica de rutas ↔ casos de uso
├── usecases/ # Lógica de negocio pura
├── models/ # Modelos de Mongoose
├── routes/ # Definición de rutas
├── middleware/ # JWT, roles, validaciones
├── utils/ # Conexión DB, helpers
├── scripts/ # Crear usuario admin, etc.
├── .env
├── vercel.json
└── README.md


---

## 🛠 Tecnologías

- Node.js
- Express
- MongoDB + Mongoose
- JWT
- Arquitectura limpia
- Vercel (para deploy)

---

## 🔒 Roles

| Rol    | Acciones permitidas                         |
|--------|---------------------------------------------|
| `admin` | Crear productos, usuarios, entradas, salidas |
| `user`  | Ver productos, registrar entradas/salidas   |

---

## ✅ Instalación

```bash
git clone https://github.com/tu-usuario/inventario-backend.git
cd inventario-backend
npm install

MONGODB_URI=tu_uri_de_mongo
JWT_SECRET=una_clave_secreta_segura


npm run dev


node scripts/createAdmin.js


📡 Endpoints principales


🔐 Login
POST /api/auth/login

👤 Obtener usuario actual
GET /api/auth/me
Headers: Authorization: Bearer <token>



➕ Crear producto
POST /api/products
Headers: Authorization: Bearer <admin-token>

{
  "name": "Biblias",
  "description": "Caja de 20 biblias",
  "quantity": 20,
  "category": "Libros",
  "location": "Bodega A"
}


📥 Registrar entrada
POST /api/entries
Headers: Authorization: Bearer <token>

{
  "productId": "ID_DEL_PRODUCTO",
  "quantity": 10
}


📤 Registrar salida
POST /api/exits
Headers: Authorization: Bearer <token>

{
  "productId": "ID_DEL_PRODUCTO",
  "quantity": 5
}


🔍 Buscar productos
GET /api/products/search?name=biblia

🧪 Validaciones
Campos requeridos

Prevención de duplicados por name + category

Passwords con al menos una mayúscula y un símbolo

Solo admin puede registrar usuarios o productos



📬 Contacto
Desarrollado por: Adan Lugo (ElderL9)
📧 adan.lugo.barrientos@outlook.com

