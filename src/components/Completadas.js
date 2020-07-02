import React from 'react';

const Completadas = ({checked, change, descripcion}) => {
    return ( 
        <div className="form-check">
            <input 
            type="checkbox"
             className="form-ckeck-input" 
             checked={checked}
             onChange={e=>change(e.target.checked)}
             />
             <label htmlFor="form-check-labek">
                {descripcion}
                 </label>
        </div>
     );
}
 
export default Completadas;