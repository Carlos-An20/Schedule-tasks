import React from "react";
import '../estilos/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) { /*texto esta con sintaxis de desestruracion*/
  return(
    <div className={ completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
      <div className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>


      
      <div className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)} >
          
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>

    </div>
  )

}

export default Tarea; /*exportacion por defecto */