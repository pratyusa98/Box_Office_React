import React from 'react'
import { Navs } from './Navs'
import Title from './Title'

const MainPagelayout = ({ children }) => {
    return (
        <div>
            <Title title="BOX OFFICE" 
            subtitle = "Are you Looking For A Movie Or an Actor"/>
     <Navs />

        {children}

    </div>
    )
}

export default MainPagelayout
