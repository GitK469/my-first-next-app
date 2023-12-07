import React from 'react'
import {familyMembers} from './menuConfig'
import './Menu.css'
import Link from 'next/link'

const Menu = () => {
  //const [menuItem, setMenuItem]=React.useState("");
  //const fnMenuItemClick=(eve)=>{setMenuItem(eve.target.id)}
  // const [menuClass, setMenuClass] = React.useState("");
  // const fnMenuItemClick = (params) => {
  //   setMenuClass(params.currentTarget.id);
  // };
  

  return (
    <div>
        <ul className='menu'>
              {
                  familyMembers.map(({role,link}, ind)=>{
                      return <li key={`li_${ind}`} id={role}>
                          <Link href={link}>{role}</Link>
                          </li>
                  })
              }
        </ul>
    </div>
  )
}

export default Menu
