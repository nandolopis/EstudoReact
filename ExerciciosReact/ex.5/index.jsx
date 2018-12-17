import React from 'react'
import ReactDOM from 'react-DOm'
import { Primeiro, Segundo } from './componente'

ReactDOM.render(
    //Para retorna mais de um componente, precisa-se de  uma tag para agrupar as tags dos componentes
    <div>
            <Primeiro/>
            <Segundo/>
    </div>,
     document.getElementById('app'))

