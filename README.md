
# Guía de Modelos JS Backend — Actividades 1, 2, 3 y Apropiación.

## Sistema PQRS — API REST con Node.js y Express

Proyecto que implementa un sistema de Peticiones, Quejas, Reclamos y Sugerencias (PQRS) siguiendo una arquitectura por capas: Ruta → Controlador → Modelo → Respuesta HTTP.

### Actividad 1

Flujo ordenado :

Cliente → Ruta → Controlador → Modelo → Base de datos

De regreso:

Base de datos → Modelo → Controlador → Ruta → Cliente


### Actividad 2

¿Qué componente se encarga de recibir la petición HTTP y dirigirla al controlador?
La Ruta, ya que detecta la URL y el método HTTP (GET, POST, etc.) y envía la petición al controlador correspondiente.

¿Qué componente se encarga de comunicarse con la base de datos?
El Modelo. Contiene la lógica para consultar, insertar, actualizar o eliminar datos.

¿Qué componente envía finalmente la respuesta HTTP al cliente?
El Controlador, que recibe los datos procesados y construye la respuesta enviada de vuelta al cliente.


### Actividad 3

Operación - Método HTTP - Código esperado - Obtener información - GET200 - Crear una PQRSPOST201 - Actualizar informaciónPUT200 - Eliminar una PQRS - DELETE 200 Error en el servidor—500


 Proyecto práctico — API de PQRS

Estructura del proyecto

pqrs-api/
├── controllers/
│   └── pqrsController.js
├── models/
│   └── pqrsModel.js
├── routes/
│   └── pqrsRoutes.js
├── app.js
├── package.json
└── README.md

Responsabilidad de cada capa

ArchivoFunciónapp.jsInicializa Express, configura middlewares y conecta las rutaspqrsRoutes.jsDefine las URLs y métodos HTTP, y los dirige al controladorpqrsController.jsRecibe la petición, llama al modelo y envía la respuesta HTTPpqrsModel.jsSimula la base de datos en memoria y gestiona los datos (sin enviar respuestas HTTP)


 Instalación

bash# Clonar el repositorio
git clone https://github.com/sararojas3315656/<nombre-del-repo>.git

# Entrar a la carpeta del proyecto
cd pqrs-api

# Instalar dependencias
npm install

 Ejecución

bash# Modo desarrollo (con recarga automática)
npm run dev

# Modo producción
npm start

El servidor corre por defecto en:

http://localhost:3000


 Endpoints disponibles

Todas las rutas tienen como prefijo /api/pqrs.

MétodoEndpointDescripciónCódigo de éxitoGET/api/pqrsObtener todas las PQRS200GET/api/pqrs/:idObtener una PQRS específica200POST/api/pqrsCrear una nueva PQRS201PUT/api/pqrs/:idActualizar una PQRS existente200DELETE/api/pqrs/:idEliminar una PQRS200

 Estructura de una PQRS

json{
  "id": "uuid-generado-automaticamente",
  "tipo": "Petición | Queja | Reclamo | Sugerencia",
  "descripcion": "Texto descriptivo de la solicitud",
  "solicitante": "Nombre del solicitante",
  "estado": "pendiente",
  "fechaCreacion": "2026-06-30T00:00:00.000Z",
  "fechaActualizacion": "2026-06-30T00:00:00.000Z"
}

 Ejemplo de body para crear una PQRS (POST)

json{
  "tipo": "Queja",
  "descripcion": "El servicio tardó más de lo esperado",
  "solicitante": "Sara Rojas"
}


 Tecnologías utilizadas


Node.js
Express — framework para construir la API
uuid — generación de identificadores únicos
cors — habilitar peticiones desde otros orígenes
nodemon (desarrollo) — recarga automática del servidor



 Pruebas de funcionamiento

Las pruebas de cada endpoint se realizaron utilizando Postman, verificando:


Respuestas correctas según el método HTTP utilizado
Códigos de estado adecuados (200, 201, 404, 500)
Validación de campos obligatorios al crear una PQRS
Comportamiento esperado al actualizar y eliminar registros existentes



 Trabajo por:

Sara Rojas - sararojas3315656 - saresro04@gmail.com
