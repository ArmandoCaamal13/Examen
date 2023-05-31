// agregarTarea
// ListaTareas tomara la tarea ingresada como parametro
// y la agregara al arreglo tareas

// mostrarLista en el objecto ListaTareas 
// recorre el arreglo tareas y muestre cada tarea como un elemento de lista 
// (<li>) en el elemento con el id="lista-tareas

//Vincular el evento "submit" para llamar a la funcion agregarTarea
// luego, llamar a la funcion mostrar lista para actualizar la 
//lista de tareas en la vista HTML 
//
// Objeto ListaTareas
const ListaTareas = {
    tareas: [],
  
    agregarTarea(tarea){
      this.tareas.push(tarea);
    },
    
    mostrarLista() {
      const listaTareasElement = document.getElementById("listatareas");
      listaTareasElement.innerHTML = "";
  
      this.tareas.forEach((tarea) => {
        const listItem = document.createElement("li");
        listItem.textContent = tarea;
        listaTareasElement.appendChild(listItem);
      });
    }
  };
  
  const formulario = document.getElementById("formulario");
  
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const tareaInput = document.getElementById("tarea");
    const nuevaTarea = tareaInput.value.trim();
  
    if (nuevaTarea !== "") {
      ListaTareas.agregarTarea(nuevaTarea);
      ListaTareas.mostrarLista();
  
      tareaInput.value = "";
    }
  });
  