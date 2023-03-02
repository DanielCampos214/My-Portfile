import React, {useState} from 'react'

import * as C from './style'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from '../sidebar'
import Img from '../../assets/logo.svg'

export function Header () {
   const [sidebar, setSidebar ] = useState(false)

    const showSiderBar = () => setSidebar(!sidebar)


   return(
    <C.Container>
        <C.Logo src={Img}/>
        < FaBars  onClick={showSiderBar} />
        {sidebar &&<Sidebar active={setSidebar}/>}
    </C.Container>
)
}