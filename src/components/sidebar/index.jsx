import React from 'react'
import * as C from './style'
import { BsInstagram, BsLinkedin, BsWhatsapp,BsGithub } from 'react-icons/bs'
import { SidebarItem } from '../sidebarItem'

import {
  FaTimes,
} from 'react-icons/fa'

export const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  const Link1 = <a href='http://wa.me/+554899639569' target='_blank' >Contato</a>
  const Link2 = <a href='https://github.com/DanielCampos214' target='_blank' onClick={closeSidebar}>GitHub</a>
  const Link3 = <a href='https://www.instagram.com/daniel.s.s.camposs/' target='_blank'>Instagram</a>
  const Link4 = <a href='https://www.linkedin.com/in/daniel-dos-santos-campos-722155256/' target='_blank'>Linkedin</a>
  

  return (
    <C.Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <C.Content>
        <SidebarItem Icon={BsWhatsapp} Text={Link1} />
        <SidebarItem  Icon={BsGithub} Text={Link2}   />
        <SidebarItem Icon={BsInstagram} Text={Link3} />
        <SidebarItem Icon={BsLinkedin} Text={Link4} />

      </C.Content>
    </C.Container>
  )
}
