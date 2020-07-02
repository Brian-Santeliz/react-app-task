import React, { Fragment, useState, useEffect } from "react";
import Fila from "./components/Filas";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Completadas from "./components/Completadas";

function App() {
  
  const [nombre, setNombre] = useState("Brian");
  const [tareas, setTareas] = useState([
    { nombre: "Practicar React", completada: false },
    { nombre: "Practicar Pug", completada: false },
    { nombre: "Practicar JS", completada: false }
  ]);
  //estado para mostrar las tareas cheked
  const [completo, setCompleto] = useState(true)

  //Obtiene los datos del localStorage
  useEffect(() => {
    let datos = localStorage.getItem('tareas')
    if(datos != null){
      setTareas(JSON.parse(datos))
    }else{
      setNombre('Brian')
      setTareas([  
    ])
    setCompleto(true)
    }
  }, [])
  //Establece los datos en localStorage y actualiza cada vez que se actualiza una tarea
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  //funcion para agregar una nueva tarea 
  const agregarTarea = (tarea)=>{
    if(!tareas.find(t=>t.nombre === tarea)){
      setTareas([...tareas, {nombre:tarea, completada:false}])
    }else if(!tarea || tarea.length < 0 || tarea === ''){
      alert('no puede ser vacio')
    }else{
      alert('Esta tarea ya existe ')

    }
  }
  //funcion para cambiar el estado de completado
  const toggleState = (tarea) => {
     return setTareas(
      tareas.map((t) =>
      //recorre las tareas y comprueba que coincidan e invierte el estado
        t.nombre === tarea.nombre ? { ...t, completada: !t.completada } : t
      )
    );
  };

  //funcion para inprimir el componente fila
  const tareasFila = (completadaEstado) =>
    tareas
    //filtra las tarea basado en su estado
    .filter(tarea=>tarea.completada===completadaEstado)
    //recorre esas tareas
    .map((tarea) => (
      <Fila tarea={tarea} key={tarea.nombre} toggleState={toggleState} />
    ));

  return (
    <Fragment>
      <Nav
        nombre={nombre}
        tareas={tareas}
      />
      <Form
        agregarTarea={agregarTarea}
      />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Completada</th>
          </tr>
        </thead>
        <tbody>{tareasFila(false)}</tbody>
      </table>
      <div className=" mt-3 bg-secondary text-white text-center p-2">
        <Completadas
          descripcion='Muestra las tareas completadas'
          checked={completo}
          change={checked=>setCompleto(checked)}
        />
      </div>
      {/* Si el input esta checked renderia esta tabla */}
      {
      completo && (
        <table className="table table-striped table-bordered">

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Completada</th>
            </tr>
          </thead>
          <tbody>
            {tareasFila(true)}
          </tbody>
        </table>
       )
      }
    </Fragment>
  );
}

export default App;
