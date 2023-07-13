import React, { useState } from "react";
import './listTodo.scss'
const ListTodo = ({ list, toggleTodo, deleteTodo, editTodo }) => {

  const [toggleEdit, setToggleEdit] = useState({});
  const [name, setName] = useState('');
  const handleEdit = (event, id) => {
    const nameTask = event.target.value;
    setName(nameTask);
    editTodo(id, nameTask)
  }
  const handleClickEdit = (id, nameTask) => {
    setToggleEdit({ ...toggleEdit, [id]: !toggleEdit[id] });
    setName(nameTask);
  }

  return (
    <div className="lista">
      <ol className="lista__ol">
        {list.map((tarea) => (
          <li className="lista__ol-li" key={tarea.id}>

            <input className="lista__ol-input" type="checkbox" checked={tarea.completed} onChange={() => toggleTodo(tarea.id)} /> {
              toggleEdit[tarea.id] ? (<input type='text' value={name} onChange={(event) => handleEdit(event, tarea.id)} />) : (<label className="lista__ol-label">{tarea.name}</label>)
            }
            <span className="material-symbols-outlined" onClick={() => deleteTodo(tarea.id)}>close</span>
            <span className="material-symbols-outlined" onClick={() => handleClickEdit(tarea.id, tarea.name)}>edit</span>
          </li>
        ))}

      </ol>
    </div>
  );
};

export default ListTodo;
