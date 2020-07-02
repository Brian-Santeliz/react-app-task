import React from "react";

const Filas = ({tarea, toggleState}) => (
    <tr key={tarea.nombre}>
      <td>{tarea.nombre}</td>
      <td>
        <input type="checkbox" checked={tarea.completada} onChange={()=>toggleState(tarea)}/>
      </td>
    </tr>
  );

export default Filas;
