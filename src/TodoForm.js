import React from 'react'
import {TodoContext} from './TodoContext/ContextProvider';

function TodoForm({setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }
  const {
    addTodo
  } = React.useContext(TodoContext)
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if(newTodoValue) {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  }
  return (
    <form onSubmit={onSubmit} className={`bg-white flex flex-col gap-7 border-2 border-white p-10 rounded-lg`}>
      <label className='text-4xl text-black font-bold'>Añade una tarea nueva</label>
      <textarea className='border-2 p-1 text-black border-black focus:border-blue-400 focus:outline-none' value={newTodoValue} onChange={onChange} placeholder='Pon tu tarea aquí'></textarea>
      <div className='flex justify-around'>
        <button className='font-bold p-2 text-red-400 hover:bg-red-400 hover:text-white transition-all border-2 border-red-400 rounded' type='button' onClick={onCancel}>Cancelar</button>
        <button className='font-bold p-2 text-blue-400 hover:bg-blue-400 hover:text-white transition-all border-2 border-blue-400 rounded' type='submit'>Añadir</button>
      </div>
    </form>
  )
}

export default TodoForm