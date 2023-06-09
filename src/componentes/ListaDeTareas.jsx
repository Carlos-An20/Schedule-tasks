import React, { useState } from "react";
import TareaFormulario from './TareaFormulario';
import Tarea from './tarea';
import '../estilos/ListaDeTareas.css';

function ListaDeTareas(){

  /*USO de un Hook de estado */
  const[tareas, setTareas] = useState([]); /*tareas es un arreglo vacio*/

  const agregarTarea = tarea =>{
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim(); //permite quitar los espacios a una cadena de caracteres
      
      const tareasActualizadas = [tarea, ...tareas]; //... de un arreglo a tareas individuyales 
      setTareas(tareasActualizadas); //actualizamos el estado
    }
  }

  const eliminarTarea = id =>{
    const tareasActualizadas= tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas); 
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tarea-lista-contenedor'>
        {
          /*mostrar una lista de componentes
            renderizar una lista de componentes
            map es un metodo que toma cada una de las tareas 
            y pasa lo que se especifique

          */
          tareas.map((tarea)=>
            <Tarea
              key={tarea.id} //identificar el elemento de la lista
              id={tarea.id}
              texto={ tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )

        }
      </div> 
    </>
  );
}
export default ListaDeTareas;