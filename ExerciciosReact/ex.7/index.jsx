import React from 'react'
import ReactDOM from 'react-DOm'
import Family from './family'
import Mamber from './mamber'

ReactDOM.render(
    //Para retorna mais de um componente, precisa-se de  uma tag para agrupar as tags dos componentes
    <Family>
        <Mamber name = "Guilherme" lastName="Silva" />
    </Family>,
    document.getElementById('app')
)


