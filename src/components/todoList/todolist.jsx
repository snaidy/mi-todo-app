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
  const [todo, setTodo] = useState(initialValue);

  const addTodo = (task) => {
    const newTodo = {
      id: todo.length + 1,
      name: task.name,
      completed: false
    }
    const listOfTasks = [...todo, newTodo]
    console.log(listOfTasks);
    setTodo(listOfTasks)
  }

  const handleToggle = (id) => {
    const mappedList = todo.map(item => item.id === id? {...item, completed: !item.completed}: item)
    setTodo(mappedList)
  }

  const deleteTodo = (id) => {
    const deleteList = todo.filter(item => item.id !== id)
    setTodo(deleteList)
  }

  const editTodo = (id, newName) => {
    const editList = todo.map(item => item.id === id? {...item, name:newName }: item)
    setTodo(editList)
  }

  return (
   <div className='todolist'>
    <FormToDo addedTodo={addTodo}/>
    <ListTodo list= {todo} toggleTodo={handleToggle} deleteTodo={deleteTodo} editTodo={editTodo}/>
   </div>
  )
}

export default Todolist