import React from 'react'
import { TodoContext } from "./TodoContext/ContextProvider";

export default function ToDoSearch() {
  
  const {search, setSearch} = React.useContext(TodoContext); //Acá se extraen (destructuring) todas las props presentes en nuestro context, esto usando el otro hook 'useContext' al cual le decimos el context especifico que vamos a utilizar. Ahora podemos usar todas las propiedades en este nivel de la app

  const searchValueChange = (e) => {//Toma el valor del input y lo asigna a la variable de control del estado
    setSearch(e.target.value)
  }
  return (
    <div className='flex relative justify-center'>
      <input 
        onChange={searchValueChange} //En cada cambio del input se llama la funcion
        className='rounded text-black px-2 py-1 mb-8 w-full'
        placeholder='Buscar Tarea'
        value={search} //Se agrega esta propiedad para que el valor del input no sea controlado por la misma etiqueta sino por el state de React
      ></input>
      <svg className="w-7 h-7 absolute right-1" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
    </div>
  )
}
