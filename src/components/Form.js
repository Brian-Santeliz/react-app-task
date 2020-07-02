import React, { useState } from "react";

const Form = ({agregarTarea}) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const enviarTarea = () => {
    agregarTarea(nuevaTarea)
    setNuevaTarea("");
  };
  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button className="btn btn-info my-2 ml-2" onClick={enviarTarea}>
        Guardar
      </button>
    </div>
  );
};

export default Form;
