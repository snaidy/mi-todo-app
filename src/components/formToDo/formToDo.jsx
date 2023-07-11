import React from 'react'

import './formToDo.scss'
import useForm from '../hooks/useform';

const FormToDo = () => {
  const [dataForm, handleChange, resetForm] = useForm({name:''});

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('soy dataform',dataForm)
    resetForm();
  }
  return (
    <div className='input'>
        <h2>Escribe tu ToDo</h2>
        <form onSubmit={handleSubmit} className='form'>
            <input className='form__input' type="text" placeholder='Ingrese nueva tarea' name= "name" onChange={handleChange} value = {dataForm.name}/>
            <button className='form__button' type='sumbmit'>Crear ToDo</button>
        </form>
    </div>
  )
}

export default FormToDo;