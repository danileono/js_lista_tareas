
// Traer Variables
const input = document.querySelector("#input")
const btnAgregar = document.querySelector("#btnAgregar")
const tareas = document.querySelector("#tareas")
const ckeckBoxTareas = document.querySelector("#ckeckBoxTareas")
const totalTareasCounter = document.querySelector("#totalTareasCounter")
const totalTareasRealizadas = document.querySelector("#totalTareasRealizadas")

//array Tareas
let listaTareas = [
{ id: 1, name: "Nacer", realizada: false,},
{ id: 2, name: "Comer", realizada: false,},
{ id: 3, name: "Morir", realizada: false,},
];
let tareasRealizadas = 0
totalTareasRealizadas.innerHTML = tareasRealizadas


//FUNCION PARA AGREGAR TAREAS A LA LISTA
const agregarTareas = () => {
	tareas.innerHTML = ""
    
// Agregar los li al ul
	listaTareas.forEach((tarea) => {
        totalTareasCounter.innerHTML = " " + listaTareas.length;
        const li = document.createElement('li')
		li.id = tarea.id
		li.innerHTML = `
		<p>${tarea.name}</p>
        <input id=${tarea.id} class="checkBox" type="checkbox" ${tarea.realizada?'checked':''}>
	<button class="btn">Eliminar</button> `

    tareas.appendChild(li)
}
)
    
// Eliminar tarea (li) con btn eliminar creado arriba
	const btnsEliminar = document.querySelectorAll('.btn')
	btnsEliminar.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const id = e.target.parentNode.id

        //llama funcion eliminar invitado (la funcion que esta abajo)
			eliminarTarea(id)
		})
	})

//TAREAS REALIZADAS
    document.querySelectorAll('.checkBox').forEach((check)=>{
        check.addEventListener('click', (e)=> {
            const filtered = listaTareas.filter((tarea) => tarea.id == check.id)
            if (check.checked) {
                filtered[0].realizada = true
            } else {
                filtered[0].realizada = false

            }
            contarTareasRealizadas()
        })
    })

} 

agregarTareas()  //llamar funcion para cargar Tareas iniciales





//Funcion que FILTRAR la lista de Tareas y hace que no incluya en la lista a los ID eliminados
const eliminarTarea = (id) => {
	const filtered = listaTareas.filter((tarea) => tarea.id != id)
	listaTareas = filtered //actualiza lista original
    
    agregarTareas() //recarga lista
    contarTareasRealizadas()
}



// Evento BOTON Agregar 
btnAgregar.addEventListener('click', () => {
	const nombreTarea = input.value //capturar valor del input
    const ckeckBoxTareas = input.value //capturar valor del input


    //push para enviar objeto al array de tareas, contiene id unico, nombre y checkbox
	listaTareas.push({
		id: Date.now(),
		name: nombreTarea,
        realizada: false
	})

	input.value = ""  //reset valor input

	agregarTareas()  //llamar funcion para agregar Tareas
    

})


const contarTareasRealizadas = () => {
    const tareasRealizadas = listaTareas.filter((tarea)=> 
        tarea.realizada
    ).length
    totalTareasRealizadas.innerHTML = tareasRealizadas

}

contarTareasRealizadas()       
