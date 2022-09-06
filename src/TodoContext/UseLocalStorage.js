import React from 'react'

function UseLocalStorage(itemName, defaultValue) { //Custom hook que nos permite usar el local storage para obtener cualquier item y dato

  const [error, setError] = React.useState(false) //State que controla los errores de la api (solo se simula la respuesta de una api usando local storage)

  const [loading, setLoading] = React.useState(true)//State que controla el estado de carga de la api (solo se simula la respuesta de una api usando local storage)

  const [item, setItem] = React.useState(defaultValue) //State que controla los nuevos datos que se asignan al to-do list
  
  React.useEffect( () => { //useEffect nos ayuda a que este codigo solo se renderice 1 vez al cargar la app

    setTimeout(() => { //El set time out simula el tiempo de carga que le tomaria a la api consultar la base de datos
      try { //El try catch controla si la api retorna correctamente los datos o no y segun esto se puede mostrar un mensaje de error en la UI
        let parsedItem; //Variable en la cual estara el value obtenido del local storage
        const localStorageItem = localStorage.getItem(itemName); //Se obtiene el value correspondiente al nombre del item dado (key) presente en el local storage y se guarda
        if(!localStorageItem) { //Si el local storage no tiene un value con el key dado se crea el key con un dato vacio como value
          localStorage.setItem(itemName, JSON.stringify(defaultValue));
          parsedItem = defaultValue //Se guarda en la variable el dato vacio asignado
        } else {
          parsedItem = JSON.parse(localStorageItem)//Si el local storage si tiene un value asociado al key dado este se guarda en la variable
        }
        setItem(parsedItem); //Al obtener los datos del local storage se asigna el item en el estado
        setLoading(false) //Cuando todo el proceso acabo se actualiza el estado de loading a false para actualizar la UI
      } catch (promiseError) {//Si la api no obtiene los datos y tiene un error
        setError(promiseError) //Se actualiza el estado de error enviando el mensaje a la variable de control (la variable deja de ser false y con el mensaje es true)
      }
    }, 1000);
  
  }); 

  const saveItem = (newItem) => { //Recibe el array de todos y lo agrega al estado y al local storage (esta funcion servira tambien para el estado de la app que agrega y elimina todos)
    try { //El try catch controla si la api retorna correctamente los datos o no y segun esto se puede mostrar un mensaje de error en la UI
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);//Se agrega el nuevo array al local storage como stringified JSON
      setItem(newItem) //Se agrega el nuevo array al estado
    } catch (promiseError) {
      setError(promiseError)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  } //Retorna la variable de control del custom hook, la funcion que manipulara esta variable y el estado de loading (para mas de 3 variables hay que retornar un objeto en lugar de un array)
}

export default UseLocalStorage