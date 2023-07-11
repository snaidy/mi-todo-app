import React from "react";
import './listTodo.scss'
const ListTodo = ({ list, toggleTodo }) => {
  return (
    <div className="lista">
      <ol className="lista__ol">
        {list.map((tarea)=>(
            <li className="lista__ol-li" key={tarea.id}>
            
          <input className="lista__ol-input" type="checkbox" checked={tarea.completed} onChange={() => toggleTodo(tarea.id)}/>
          <label className="lista__ol-label">{tarea.name}</label>
        </li>
        ))}
        
      </ol>
    </div>
  );
};

export default ListTodo;
