import React from 'react'
import ToDoCounter from '../ToDoCounter'
import ToDoSearch from '../ToDoSearch'
import ToDoList from '../ToDoList'
import ToDoItem from '../ToDoItem'
import CreateToDoBtn from '../CreateToDoBtn'
import { TodoContext } from "../TodoContext/ContextProvider";
import Modal from "../modal";
import TodoForm from '../TodoForm';
import Loader from '../Loader';

function AppUi() {
const {
  error,
  loading,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal
} = React.useContext(TodoContext) //Acá se extraen (destructuring) todas las props presentes en nuestro context, esto usando el otro hook 'useContext' al cual le decimos el context especifico que vamos a utilizar. Ahora podemos usar todas las propiedades en este nivel de la app
  return (
    <React.Fragment>
    <ToDoCounter/>

    <ToDoSearch/>
    {/* Dentro del componente ToDoList se insertará otro componente ToDoItem, para esto se usara props.children dentro del componente ToDoList */}
    <ToDoList> 
      {error && <p>Hubo un error al cargar la información</p>}
      {loading && <Loader/>}
      {(!loading && !searchedTodos.length) && <p>Agrega tu primera tarea</p>}
      {searchedTodos.map( item => (//Toma los todos presentes en la variable de control searched y los muestra en la UI, por cada item se asignan props unicas para ese item
        <ToDoItem
          key={item.text} //Se asigna un prop de key para identificacion unica del item (requerido por React)
          text={item.text} //El texto unico de el item 
          completed={item.completed} //El valor unico de si el todo esta completed
          onCompleteTodo={() => {completeTodo(item.text)}} //La funcion onCompleteTodo que al llamarse, esta a su vez llamara a completeTodo enviando el text del item como parametro 
          onDeleteTodo={() => deleteTodo(item.text)}//La funcion onDeleteTodo que al llamarse, esta a su vez llamara a deleteTodo enviando el text del item como parametro 
        />
      ))}
    </ToDoList>
    {!!openModal && (
      <Modal
        setOpenModal={setOpenModal}  
      >
        <TodoForm 
          setOpenModal={setOpenModal}  
        />
      </Modal>
    )}
    <CreateToDoBtn 
      setOpenModal={setOpenModal}
    />
  </React.Fragment>
  )
}

export default AppUi