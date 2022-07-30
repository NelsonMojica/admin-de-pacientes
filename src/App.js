import React, { Fragment, useEffect, useState, } from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
//citas en local storage
let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if (!citasIniciales){
  citasIniciales= []
}
  //aqui voy a agregar el state, arreglo de citas y pasar el citasIniciales
  const [citas, guardarCitas]= useState(citasIniciales);

//use effect
useEffect(()=> {
if (citasIniciales){
  localStorage.setItem('citas', JSON.stringify(citas))
} else{
localStorage.setItem('citas', JSON.stringify([]))
}
},[citas])

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }
//eliminar cita
 const eliminarCita = id => {
  const nuevasCitas = citas.filter(cita => cita.id !== id)
  guardarCitas(nuevasCitas)
 }
 //cuando no hay citas
 const titulo = citas.length === 0?'No hay Citas':'Administra tus Citas'

  return (
    <Fragment>
      <h2>Administrador de Pacientes</h2>
       <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario 
            crearCita={crearCita}
            
            />
          </div>
          <div className='one-half column'>
              <h2>{titulo}</h2>
              {citas.map(cita=>(
                <Cita 
                key= {cita.id}
                cita={cita}  
                eliminarCita={eliminarCita}
                />
              ))
              }
          </div>          
        </div>
       </div>
    </Fragment>
  );
}

export default App;
