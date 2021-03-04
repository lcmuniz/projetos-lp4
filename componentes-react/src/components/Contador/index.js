import { useState } from 'react'

import './index.css'

function Contador() {

    // let valor = 0

    const [valor, setValor] = useState(0)

    function decrementar() {
        if (valor > 0) { 
            setValor(valor - 1)
        }
    }

    function incrementar() {

        setValor(valor + 1)
        
        //valor = valor + 1
        
        // console.log(">>>>" + valor)
    }

    return (
        <div className="container">
            <button onClick={ decrementar } className="button"> - </button>
            <h2 className="texto"> { valor } </h2>
            <button onClick={ incrementar } className="button"> + </button>
        </div>
    )
}

export default Contador