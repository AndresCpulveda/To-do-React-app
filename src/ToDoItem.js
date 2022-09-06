import React from 'react'

export default function ToDoItem(props) {

  return (
    <li className='p-2 mb-6 flex justify-between rounded border-2 border-cyan-700'>
      {/* Al hacer click en el icono se llama a la funcion onCompleteTodo la cual llamara otra funcion con un parametro preestablecido */}
      <span onClick={props.onCompleteTodo }
      //Las clases se asignan dinamicamente según el valor de la variable completed
        className= {` ${props.completed ? 'bg-blue-700' : 'bg-blue-400 hover:bg-blue-500'} p-1 font-bold cursor-pointer transition-all`}
      ><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>
      <p className={`text-lg ${props.completed ? 'line-through' : '' }`}>{props.text}</p>
      {/* Al hacer click en el icono se llama a la funcion onDeleteTodo la cual llamara otra funcion con un parametro preestablecido */}
      <span onClick={props.onDeleteTodo} className={`bg-red-400 p-1 font-bold cursor-pointer hover:bg-red-500 transition-all`}><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
    </li>
  )
}
