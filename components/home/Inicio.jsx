import React from 'react'
import About from './About'
import Tarjetas from './Tarjetas'

function Inicio() {
    return (
        <div id='about'>
            <div>
                <About/>
            </div>
            <div id='cards'>
                <Tarjetas />
            </div>
        </div>
    )
}

export default Inicio
