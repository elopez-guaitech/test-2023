# Test-guaitech (To-Do App)
## Descripción

Aplicación web con el objetivo de tener registro de las tareas del día a día de una persona.
Ejemplo de aplicación en su versión mínima: [Click-Aqui](https://www.youtube.com/watch?v=nsGIq6eaJy0)
## Especificaciones

1. Se debe contemplar el espacio adecuado para ingresar la descripción de la tarea
2. Una tarea debe tener las opciones para eliminar, "Finalizar", o Activar nuevamente
3. Las tareas deben permanecer visibles en todo momento, a menos que estas sean eliminadas. Tomar en cuenta que cuando la tarea esté "Finalizada", debe aparecer con un indicativo.
4. Se pueden crear tantas tareas como el usuario necesite.
5. Todas las tareas deben estar almacenadas en la base de datos, para ser consultadas en cualquier momento.
6. Se puede usar cualquiera de las bases de datos proporcionadas (Mysql o MongoDB).
7. El proyecto debe estar conformado por dos partes, Back-End y Front-End.

## Extras

- Considerar la implementación de "Sub Tareas", es decir que cada una de las tareas especificadas, pueda tener un conjunto de subtareas asociadas.
  De esta forma, la tarea padre Finalizará en automático cuando todas sus subtareas sean finalizadas.


## Recursos de apoyo

- Docker compose con bases de datos:
  1. `Mysql`
       - Puerto: `3306`
       - Usuario: `root`
       - Password: `guest`


  2. `MongoDB` 
       - Puerto: `27017`
       - Usuario: `guest`
       - Password: `guest`
   
## Detalles de Entrega

- Hacer una rama a partir de main, con el nombre test/nombre-apellido
- Hacer push del proyecto desarrollado hacia la rama correspondiente
- Excluir directorios de librerias (Ej. node_modules)
- Incluir dump o esquema de la base de datos si aplica
- Se aceptan entregas hasta media hora antes de la finalización del meeting.
