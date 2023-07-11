import React, { useState } from 'react'
import FormToDo from '../formToDo/formToDo.jsx'
import ListTodo from '../listOfTodo/listTodo.jsx'
import './todolist.scss'

const Todolist = () => {
  const initialValue = [
    {
      id: 1,
      name: "Ver grabación de la clase",
      completed: false
    },
    {
      id: 2,
      name: "Hacer el workshop",
      completed: false
    },
    {
      id: 3,
      name: "Enviar tarea de empleabilidad",
      completed: true
    },
  ]
  const [todo, stateTodo] = useState(initialValue);


  return (
   <div className='todolist'>
    <FormToDo />
    <ListTodo list= {todo}/>
   </div>
  )
}

export default Todolist