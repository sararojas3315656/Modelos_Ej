# Configuración del Proyecto

## Creación paso a paso

```bash
# 1. Inicializar proyecto Node.js
npm init -y

# 2. Instalar dependencias de producción
npm install express
npm install uuid cors

# 3. Instalar dependencias de desarrollo
npm install --save-dev nodemon

# 4. Crear estructura de carpetas
mkdir controllers models routes

## Estructura final

project/
├── controllers/
│   └── pqrsController.js
├── models/
│   └── pqrsModel.js
├── routes/
│   └── pqrsRoutes.js
├── app.js
├── package.json
└── SETUP.md


## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor con Node.js |
| `npm run dev` | Inicia el servidor con Nodemon (reinicio automático al editar) |

## Iniciar el servidor

- Node.js (v18 o superior)
- npm

### 1 — Instalar dependencias

```bash
npm install
```

Esto instala todo lo que está en `package.json`:

**Producción:**
- `express` — Framework web para Node.js
- `uuid` — Generación de IDs únicos
- `cors` — Habilitar peticiones de origen cruzado

**Desarrollo:**
- `nodemon` — Reinicio automático del servidor al detectar cambios

### 2 — Iniciar

Modo producción:

```bash
npm start
```

Modo desarrollo (con recarga automática):

```bash
npm run dev
```

### 3 — Verificar

El servidor se levanta en `http://localhost:3000`.
La respuesta esperada en esa ruta es:

```json
{ "message": "API de PQRS funcionando" }
```

### Endpoints disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/pqrs` | Obtener todas las PQRS |
| GET | `/api/pqrs/:id` | Obtener una PQRS por ID |
| POST | `/api/pqrs` | Crear una PQRS |
| PUT | `/api/pqrs/:id` | Actualizar una PQRS |
| DELETE | `/api/pqrs/:id` | Eliminar una PQRS |

Ejemplo de creación:

```bash
curl -X POST http://localhost:3000/api/pqrs \
  -H "Content-Type: application/json" \
  -d '{"tipo":"queja","descripcion":"Servicio lento","solicitante":"Juan"}'
```
