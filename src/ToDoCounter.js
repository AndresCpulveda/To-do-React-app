import React from 'react'
import { TodoContext } from "./TodoContext/ContextProvider";

export default function ToDoCounter() { //Recibe los todos completados y los todos totales

  const {completedTodos, totalTodos} = React.useContext(TodoContext);//Acá se extraen (destructuring) todas las props presentes en nuestro context, esto usando el otro hook 'useContext' al cual le decimos el context especifico que vamos a utilizar. Ahora podemos usar todas las propiedades en este nivel de la app

  return (
    <div className='text-2xl font-bold text-center my-10'>
      {/* Muestra un titulo que cambia los valores dinamicamente segun los datos procesados */}
      <h2 className='text-green-400'>Has completado {completedTodos} de {totalTodos} Tareas</h2>
    </div>
  )
}
