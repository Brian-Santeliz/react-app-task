import React from "react";

const Nav = ({nombre, tareas}) => (
  <h4 className="bg-primary text-white text-center p-4 mb-4">
    {nombre} Tareas App ({tareas.filter(t=>!t.completada).length} tareas por hacer)
  </h4>
);

export default Nav;
