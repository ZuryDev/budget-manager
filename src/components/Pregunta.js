import React, { Fragment, useState } from 'react'

const Pregunta = () => {

// definir el state
const [ cantidad, guardarCantidad ] = useState(0);

//funcion que lee presupuesto 
const definirPresupuesto = e => {
  guardarCantidad( parseInt(e.target.value, 10))
}

//sumit para definir el presupuesto
const agregarPresupuesto = e => {
  e.preventDefault(); 

  //validar

  //si se pasa la validacion
}

  return (
    <Fragment>
        <h2> Coloca tu presupuesto</h2>

        <form
          onSubmit={agregarPresupuesto}
        >
            <input
            type="number"
            className="u-full-width"
            placeholder="coloca tu presupuesto"
            onChange={definirPresupuesto}
            />

        <input 
        type="submit"
        className="button-primary u-full-width"
        value="definir presupuesto"
        />
        </form>
    </Fragment>
  )
}

export default Pregunta;
