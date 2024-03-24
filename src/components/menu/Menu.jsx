import React from 'react'
import close from '../../assets/images/icon-menu-close.svg'
import './Menu.css'


export default function Menu({showMenu, children}){

    return (
        <nav id='menu-container' 
        className={`menu-container ${showMenu && 'show-menu'}`} >
            <img id='close' src={close} />
            <ul className='navigation'>
                {...children}
            </ul>
        </nav>
    )
}