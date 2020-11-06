import React from 'react'
import {Link} from 'react-router-dom'

export const Navs = () => {

    const LINKS=[
        {to: '/',text: 'Home'},
        {to: '/starred',text: 'Starred'}

    ]

    return (
        <div>

            <ul>
                {
                    LINKS.map(item =>  <li key={item.to}><Link to={item.to}>{item.text}</Link></li>)
                }
               
            </ul>
            
        </div>
    )
}
