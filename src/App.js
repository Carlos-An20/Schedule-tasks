 
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';
import freeLogo from './imagenes/logo.png';



function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
      <img 
        className='free-logo'
        src={freeLogo} /* sentencia import */
        alt='Logo de freeCodeCamp'/>  
      </div>
      <div className='tareas-lista-prin'>
        <h1> Mis Tareas </h1>
        <ListaDeTareas />
      </div>

    </div>
  );
}

export default App;
