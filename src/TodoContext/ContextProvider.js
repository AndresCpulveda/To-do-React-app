import React from 'react'
import UseLocalStorage from './UseLocalStorage';

const TodoContext = React.createContext() //Se crea el context mediante el React hook (acá se guardará toda la info que necesita el provider y consumer)
function ContextProvider(props) { //En esta funcion vive toda la logica de la app y desde aqui se crean la mayoria de variables, funciones y estados que se usaran en la App
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = UseLocalStorage('todos_v1', []) //Llamado del custom hook que agregara tareas a nuestra todo list usando local storage (el valor por defecto sera un array vacio pasado como segundo parametro) 


  const [openModal, setOpenModal] = React.useState(false)
  const [search, setSearch] = React.useState('') //React state que controlara lo que se escriba en el input de busqueda

  const completedTodos = todos.filter( cur => !!cur.completed ).length; //Usa filter para obtener un array con los todos que han sido completados y luego devuelve la length de ese array
  const totalTodos = todos.length; //Guarda el total de todos

  let searchedTodos = []; //Variable que contendrá los todos que cumplan con la condicion de contener el string de busqueda digitado en el input

  if(!search.length >= 1) {//Si la variable (string) de busqueda no tiene ningun caracter (length <= 0) entonces todos los todos cumplen la condicion y todos se mostraran
    searchedTodos = todos;
  }else { //Si existe un string en la variable de busqueda se filtran los todos para obtener los que cumplen la condicion
    searchedTodos = todos.filter( cur => { //Se filtra los objetos
      const toCompare = cur.text.toLowerCase();//Guardamos en lowercase el valor de 'text' en el objeto para revisar si coincide con el parametro de busqueda
      const toSearch = search.toLowerCase();//Tambien guardamos en lowercase el parametro de la busqueda para que la comparacion se haga correctamente
      return toCompare.includes(toSearch) //Retorna al filter los textos que incluyan el string de busqueda
  })}

  const addTodo = (newItem) => {
    const newTodos = [...todos]; //Guarda una copia de los todos actuales guardados en la variable del state, para poder modificarla y re-asignarla
    newTodos.push({
      completed: false,
      text: newItem,
    })
    console.log('adding');
    console.log(newItem);
    saveTodos(newTodos) //Asigna la copia del array como el nuevo array (nueva variable de control del estado)
  }

  const completeTodo = (text) => { //Asigna el valor de completed true, al objeto cuyo texto coincida con el dado como parametro
    const todoIndex = todos.findIndex(cur => cur.text === text); //Encuentra dentro del array, el index del objeto al cual vamos a hacerle la modificacion
    const newTodos = [...todos]; //Guarda una copia de los todos actuales guardados en la variable del state, para poder modificarla y re-asignarla
    newTodos[todoIndex].completed = true; //Modifica la variable 'completed' en la copia del array
    saveTodos(newTodos) //Asigna la copia del array como el nuevo array (nueva variable de control del estado)
  }

  const deleteTodo = (text) => {//Elimina el todo seleccionado del array
    if(window.confirm('¿Deseas eliminar esta tare?')) { //Primero muestra una ventana de confirm para verificacion
      const newTodos = todos.filter( cur => cur.text !== text );// Si la ventana retorna true se filtran todos los objetos excluyendo el que tiene el texto que coincide con el parametro dado
      saveTodos(newTodos) //El nuevo array filtrado se asigna a la variable de control del estado
    }
  }
  return ( 
    //Nuestra funcion provider debe retornar un context.provider en este caso nuestro context es la primera variable que creamos 'TodoContext'. Y en este componente se pasan todas las props que se usaran a lo largo de la aplicacion (este componente contendrá todos los demas de la aplicacion, por eso el {props.children})
    <TodoContext.Provider value={{ 
      error,
      loading,
      search,
      setSearch,
      completedTodos,
      totalTodos,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {ContextProvider, TodoContext} //Exportamos nuestra funcion y nuestro variable del context