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
// Objeto 

//Definimos la constante ListaTareas para ingresar las tareas como parametros
const ListaTareas = {
    tareas: [],
  
    //agregarTarea sirve para agregar las tareas que vengan desde el formulario
    agregarTarea(tarea){
      this.tareas.push(tarea);
    },
    
    //en esta parte mandaremos a llamar las funcion AgregarTareas a una lista que visualizara todas las tareas agregadas
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
  