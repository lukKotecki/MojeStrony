import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


export default function Layout(){
    return (
        <>
            <div className='page-wrapper'>
                <Header/>
                <div className='container'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    )
}