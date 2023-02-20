import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from '../../public/images/airbnblogo.svg'

export default function Header(){
    return(
        <nav className='header'>
            <img src={Logo} alt="logo" className='logo' />
        </nav>
    )



}