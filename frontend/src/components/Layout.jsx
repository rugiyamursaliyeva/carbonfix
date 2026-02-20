import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import WhatsAppFloatButton from './whatsAppButton/WhatsAppFloatButton'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <WhatsAppFloatButton/>
    </div>
  )
}

export default Layout