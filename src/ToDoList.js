import React from 'react'

export default function ToDoList(props) {
  return (
    <section>
      <ul>
        {props.children} {/*El props.children permite que dentro de las etiquetas <ul> se agrege otro componente que en la App se incluira como componente hijo del actual componente */}
      </ul>
    </section>
  )
}
