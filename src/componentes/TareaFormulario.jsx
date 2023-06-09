import React, { useState } from "react";
import '../estilos/formulario.css'; 
import { v4 as uuidv4 } from 'uuid';

/*creacion del componente funcional*/

function TareaFormulario(props){

  const [input,setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value); /*extraer el valor del campo de texto */
  }
 
  const manejarEnvio = e => { /* e es un evento */
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva); /* 
    onsubmit es cuando se envia el formulario
    cuando el form se intente encvvia */
  } 


  return(
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}> 
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}/* cuando ocurre un cambio */
      />
      <button className='tarea-boton'>
        Agreagar Tarea
      </button>
    </form>  
  )
}
export default TareaFormulario;