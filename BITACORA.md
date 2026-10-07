# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                                                  | Se mantiene al recargar (Si/No) |
| ---------------------------- | -------------------------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | El título cambió inmediatamente a "Hola desde la consola".                 | No                              |
| textContent desde app.js     | El título se actualizó para mostrar "Hola TECSUP".                         | Si                              |
| style.color                  | El texto del título cambió su color a azul.                                | Si                              |
| classList.add                | Se le aplicó el fondo amarillo al párrafo (estilo de la clase .destacado). | Si                              |
| createElement + appendChild  | Se agregó un nuevo elemento "JavaScript" a la lista desordenada.           | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                                   | Cuanto suma por accion               |
| -------------- | ------------------------------------------------------- | ------------------------------------ |
| click          | Hacer un clic izquierdo primario sobre el botón.        | 1                                    |
| dblclick       | Hacer doble clic rápido sobre el botón.                 | 1 (por la secuencia de dobles clics) |
| mouseover      | Posicionar o pasar el puntero del mouse sobre el botón. | 1 por cada entrada del cursor        |

_Información obtenida de la consola:_

- `evento.type`: Muestra el nombre exacto del tipo de evento ejecutado (por ejemplo: `click`, `dblclick`, `mouseover`).
- `evento.target`: Retorna el elemento HTML exacto del DOM que recibió la interacción (por ejemplo: `<button id="btnSumar">Sumar 1</button>`).

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                            | Se recargo la pagina (Si/No) |
| --------------------------------------- | ------------------------------------------------------------------ | ---------------------------- |
| Escribir en el campo nombre             | El texto "Hola, ..." se actualiza automáticamente letra por letra. | No                           |
| Enviar sin preventDefault               | El mensaje de envío aparece una fracción de segundo y desaparece.  | Si                           |
| Enviar con preventDefault, correo sin @ | Se muestra el mensaje "Correo no valido: falta @" en texto rojo.   | No                           |
| Enviar con preventDefault, correo con @ | Se muestra "Enviado: correo@dominio.com" sin estilos de error.     | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875               |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90                 |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510                |

_Ventaja de usar una clase:_
Permite definir una plantilla reutilizable con lógica y atributos centralizados. Evita duplicar código HTML a mano y facilita la creación dinámica e ilimitada de instancias de productos.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina         | Correcto (Si/No) |
| --------------- | ----------------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                               | Si               |
| + Lapicero 3.20 | 15.70                               | Si               |
| + Mochila 89.90 | 105.60                              | Si               |
| Sin Number()    | No calcula / Lanza error en consola | No               |

| Pieza  | Linea de tu codigo donde aparece                             | Para que sirve                                                          |
| ------ | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| DOM    | `document.querySelector(...)`, `document.createElement(...)` | Selecciona y manipula los elementos visuales de la página web.          |
| Evento | `formProducto.addEventListener("submit", ...)`               | Escucha y responde dinámicamente a la interacción de envío del usuario. |
| Objeto | `new Producto(...)`, `new Carrito()`                         | Modela los datos de los productos y la lógica de negocio del carrito.   |

- [Bitacora de JavaScript interactivo](notas/BITACORA.md)
- [Ver la pagina en vivo](https://TU-USUARIO.github.io/lab08-dom/)
