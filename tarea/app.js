// Tarea - Versión 3: Clases, Objetos, DOM y Eventos juntos

// 1. Clase propia (distinta de Producto y Carrito)
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

// 2. Elementos del DOM
const formTarea = document.querySelector("#formTarea");
const inputTitulo = document.querySelector("#inputTitulo");
const selectPrioridad = document.querySelector("#selectPrioridad");
const mensajeError = document.querySelector("#mensajeError");
const listaTareas = document.querySelector("#listaTareas");
const inputBuscar = document.querySelector("#inputBuscar");

let listaDeObjetosTareas = [];

// 3. Evento Submit (Validación + Objetos + DOM)
formTarea.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputTitulo.value.trim() === "") {
    mensajeError.textContent = "El título de la tarea no puede estar vacío.";
    return;
  }

  mensajeError.textContent = "";

  // Instanciar objeto con new
  const nuevaTarea = new TareaItem(
    Date.now(),
    inputTitulo.value.trim(),
    selectPrioridad.value,
  );

  listaDeObjetosTareas.push(nuevaTarea);

  // Crear elemento en el DOM con createElement
  const li = document.createElement("li");
  li.dataset.id = nuevaTarea.id;

  if (nuevaTarea.esUrgente()) {
    li.style.borderLeft = "5px solid #e74c3c";
  }

  li.innerHTML = `
    <span>${nuevaTarea.obtenerFormato()}</span>
    <button class="btn-borrar">Borrar</button>
  `;

  listaTareas.appendChild(li);
  formTarea.reset();
});

// 4. Evento Click (Borrar elemento con remove / Marcar completada)
listaTareas.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-borrar")) {
    const li = e.target.parentElement;
    const id = Number(li.dataset.id);
    listaDeObjetosTareas = listaDeObjetosTareas.filter((t) => t.id !== id);
    li.remove();
  } else if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("completada");
  }
});

// 5. Evento Input (Búsqueda/filtro en tiempo real)
inputBuscar.addEventListener("input", () => {
  const filtro = inputBuscar.value.toLowerCase();
  const elementosLi = listaTareas.querySelectorAll("li");

  elementosLi.forEach((li) => {
    const texto = li.textContent.toLowerCase();
    li.style.display = texto.includes(filtro) ? "" : "none";
  });
});
