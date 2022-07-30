import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//uuid import

const Formulario =({crearCita}) =>{
    //crear state de citas
    const[cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    })
    const [error, actualizarError] = useState (false)
/*     funcion que se ejecuta cuando el usuario escribe en el Input */
    const actualizarState = e => {
        actualizarCita({
            ...cita,
        [e.target.name]: e.target.value
        })
    }
    const {mascota,propietario,fecha,hora,sintomas} = cita
     

const submitCita = e => {
    e.preventDefault();

    //validacion de datos
    if(mascota.trim()==='' || propietario.trim()==='' ||fecha.trim()==='' ||hora.trim()==='' ||sintomas.trim()===''){
      //parte de la validacion
        actualizarError(true)
        return
    }
    actualizarError(false)
    //asignar ID
    // define id
    cita.id = uuidv4(); 
    
    //Crear la cita
    crearCita(cita)
    //reiniciar el formulatio
    actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    })

}
   
   
    return(
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error'>Rellene todos los campos</p>:null }
            <form
            onSubmit={submitCita}
            >
                <label>Nombre de la Mascota</label>
                <input 
                type='text'
                name='mascota'
                className='u-full-width'
                placeholder='Nombre Mascota'
                onChange={actualizarState}
                value={mascota}
                />
                <label>Propietario</label>
                <input 
                type='text'
                name='propietario'
                className='u-full-width'
                placeholder='Nombre dueño de la mascota'
                onChange={actualizarState}
                value={propietario}
                />
                <label>Fecha</label>
                <input 
                type='date'
                name='fecha'
                className='u-full-width'
                onChange={actualizarState}
                value={fecha}
                />
                <label>Hora</label>
                <input 
                type='time'
                name='hora'
                className='u-full-width'
                onChange={actualizarState}
                value={hora}
                />
                <label>Sintomas</label>
                <textarea className='u-full-width'
                name='sintomas'
                onChange={actualizarState}
                value={sintomas}
                ></textarea>
                <button
                type='submit'
                className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}
export default Formulario;