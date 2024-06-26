import React from 'react'
import { useLocation } from 'react-router-dom';
import Menu from './Menu.jsx'
import menu from '../assets/images/icon-menu.svg'
import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/mojestrony-logo.png'

export default function Header({...rest}){

    const [showMenu, setShowMenu] = React.useState(false)

    // THIS CODE IS FOR LATER USE
    //const [activePage, setActivePage] = React.useState('home')
    // let location = useLocation()
    // console.log(location)

    //THIS CODE WORKS ONLY LOCAL AND DOSENT WORK ON NETLIFY
    // React.useEffect(()=>{
    //     const closeMenu = function(){
    //         window.addEventListener('click', (e)=> {
    //         console.log('rendering2')
    //         e.target.id==='menu-btn' || e.target.id === 'menu-container' ? 
    //         setShowMenu(true) : setShowMenu(false) })
    //     }
    //     return closeMenu
    // },[])

    //THIS CODE WORKS ON NETLIFY BUT RUNS THIS FUNCTION MULTIPLE TIMES
    window.addEventListener('click', (e)=> {
        console.log('rendering')
        e.target.id==='menu-btn' || e.target.id === 'menu-container' ? 
        setShowMenu(true) : setShowMenu(false) })

    const menuItems = [
        {name:'home'},
        {name:'moje'},
        {name:'login'}
    ]

    return (
        <header {...rest}>
            <div className='logo'><NavLink to='/'><img src={logo}/></NavLink></div>
            <div className='menu'>
                <img id='menu-btn' src={menu} />
                <Menu showMenu={showMenu}>
                    {menuItems.map(li=>
                        <li key={nanoid()} >
                            <NavLink 
                                to={li.name}
                                className={( { isActive } )=> isActive ? 'active' : null }
                                end>
                                {li.name}
                            </NavLink>
                        </li>)
                    }
                </Menu>
            </div>
        </header>
    )
}