# Tarea: Mi componente interactivo

## Componente elegido

**Gestor de Tareas Pendientes (To-Do List)**: Un componente interactivo para organizar tareas según su prioridad, que permite agregar, validar, filtrar en tiempo real, tachar como completadas y eliminar tareas dinámicamente del DOM.

## Version 1: solo DOM

En esta primera iteración se construyó la estructura inicial inyectando elementos HTML de forma estática utilizando las APIs básicas del DOM.

js
const listaTareas = document.querySelector("#listaTareas");

const li1 = document.createElement("li");
li1.textContent = "[Media] Estudiar para el examen de JavaScript";

const li2 = document.createElement("li");
li2.textContent = "[Alta] Entregar laboratorio de DOM";

listaTareas.appendChild(li1);
listaTareas.appendChild(li2);

## Version 2: con eventos

formTarea.addEventListener("submit", (e) => {
e.preventDefault();

if (inputTitulo.value.trim() === "") {
mensajeError.textContent = "El título de la tarea no puede estar vacío.";
return;
}

mensajeError.textContent = "";

const li = document.createElement("li");
li.innerHTML = `     <span>[${selectPrioridad.value}] ${inputTitulo.value}</span>
    <button class="btn-borrar">Borrar</button>
  `;

listaTareas.appendChild(li);
formTarea.reset();
});

listaTareas.addEventListener("click", (e) => {
if (e.target.classList.contains("btn-borrar")) {
e.target.parentElement.remove();
} else if (e.target.tagName === "SPAN") {
e.target.classList.toggle("completada");
}
});

inputBuscar.addEventListener("input", () => {
const filtro = inputBuscar.value.toLowerCase();
const tareas = listaTareas.querySelectorAll("li");

tareas.forEach((li) => {
const texto = li.textContent.toLowerCase();
li.style.display = texto.includes(filtro) ? "" : "none";
});
});

## Version 3: con clases y objetos

class TareaItem {
constructor(id, titulo, prioridad) {
this.id = id;
this.titulo = titulo;
this.prioridad = prioridad;
this.completada = false;
}

obtenerFormato() {
return `[${this.prioridad}] ${this.titulo}`;
}

esUrgente() {
return this.prioridad === "Alta";
}
}

formTarea.addEventListener("submit", (e) => {
e.preventDefault();

if (inputTitulo.value.trim() === "") {
mensajeError.textContent = "El título de la tarea no puede estar vacío.";
return;
}

mensajeError.textContent = "";

const nuevaTarea = new TareaItem(
Date.now(),
inputTitulo.value.trim(),
selectPrioridad.value
);

listaDeObjetosTareas.push(nuevaTarea);

const li = document.createElement("li");
li.dataset.id = nuevaTarea.id;

if (nuevaTarea.esUrgente()) {
li.style.borderLeft = "5px solid #e74c3c";
}

li.innerHTML = `     <span>${nuevaTarea.obtenerFormato()}</span>
    <button class="btn-borrar">Borrar</button>
  `;

listaTareas.appendChild(li);
formTarea.reset();
});

## Donde uso DOM, eventos y objetos

| Pieza   | Línea de código (aprox)                   | Para qué sirve                                                                                       |
| ------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| DOM     | document.querySelector("#listaTareas")    | Selecciona elementos del documento, crea nodos con createElement() y elimina elementos con remove(). |
| Eventos | formTarea.addEventListener("submit", ...) | Escucha y responde a las interacciones del usuario, como submit, click e input.                      |
| Objetos | new TareaItem(...)                        | Crea instancias de tareas agrupando propiedades y métodos en un solo objeto.                         |

## Pruebas realizadas

| Acción                                | Resultado esperado                            | Resultado obtenido                                   | Cumple (Sí/No) |
| ------------------------------------- | --------------------------------------------- | ---------------------------------------------------- | -------------- |
| Agregar tarea válida "Estudiar JS"    | Aparece en la lista con su prioridad.         | Apareció en la lista correctamente.                  | Sí             |
| Intentar agregar tarea en blanco      | Muestra mensaje de error en rojo.             | Mostró "El título de la tarea no puede estar vacío". | Sí             |
| Hacer clic en el botón "Borrar"       | Elimina la tarea seleccionada del DOM.        | La tarea fue eliminada de la pantalla.               | Sí             |
| Escribir en el buscador de tareas     | Filtra en tiempo real los ítems coincidentes. | Ocultó las tareas que no coincidían.                 | Sí             |
| Hacer clic sobre el texto de la tarea | Tacha la tarea marcándola como completada.    | Se aplicó la clase `completada` con tachado.         | Sí             |

## Por que disene asi mi clase

Diseñé la clase `TareaItem` para representar cada tarea como un objeto independiente, agrupando en un solo lugar sus datos principales: `id`, `titulo`, `prioridad` y `completada`. Esto permite mantener el código más organizado y facilita la administración de las tareas dentro de la aplicación.

Además, implementé el método `obtenerFormato()` para generar de forma uniforme el texto que se muestra en la interfaz, evitando repetir código al momento de renderizar las tareas en el DOM.

También incluí el método `esUrgente()` para encapsular la lógica que determina si una tarea tiene prioridad alta. De esta manera, la aplicación puede aplicar automáticamente estilos visuales especiales, como un borde rojo de alerta, mejorando la identificación de tareas importantes.
