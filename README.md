
# Guía de Modelos JS Backend — Respuestas Actividades 1, 2 y 3

## Actividad 1

El flujo ordenado es: **Cliente → Ruta → Controlador → Modelo → Base de datos**
Y se regresa viceversa: **Base de datos → Modelo → Controlador → Ruta → Cliente.**

## Actividad 2

**¿Qué componente se encarga de recibir la petición HTTP y dirigirla al controlador?**
RUTA, ya que es la que detecta la URL y el método HTTP (GET, POST, etc.) y asi mismo envía la petición al controlador.

**¿Qué componente se encarga de comunicarse con la base de datos?**
Es MODELO. Contiene la lógica para consultar, insertar, actualizar o eliminar datos.

**¿Qué componente envía finalmente la respuesta HTTP al cliente?**
El CONTROLADOR es el que recibe los datos procesados y construye una respuesta que es enviada de vuelta al cliente.

## Actividad 3

Relación entre el tipo de petición y su código de respuesta HTTP esperado:

| Petición | Código esperado  |
|----------|------------------|
| GET      | 200              |
| POST     | 201              |
| DELETE   | 204              |
| PUT      | 200              |

¨**Códigos:**

> 200
Significa que la petición se ha procesado correctamente y el servidor devuelve una respuesta con contenido (formato json).
Se usa en **GET** cuando es para consultar información de manera exitosa, regresando los datos.
Y se usa en **PUT** cuando un recurso es actualizado de manera exitosa y devuelve el recurso actualizado o con mensaje de confimación.

**GET Y PUT** Usan el código 200 ya que ambos terminan devolviendo un recurso existente en su estado actual, la diferencia es que llegan por caminos distintos.

> 201
Indica que la petición ha sido procesada y que se ha creado un recurso nuevo en el servidor (usuario nuevo o producto en la base de datos).

Se usa en **POST** cuando se envía información para crear algo nuevo. La respuesta por lo general incluye el recurso recién creado.

> 204
Significa que la petición fue procesada, pero el servidor no devuelve ningún contenido en la respuesta.

Se usa en **DELETE** cuando se elimina un recurso y no hay nada que devolver pues el recurso ya es inexistente, no se envían datos.
