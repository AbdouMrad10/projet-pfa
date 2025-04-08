import React from 'react'
import { NavBar } from '../components/Web/NavBar'
import { Footer } from '../components/Web/Footer'
import { Outlet } from 'react-router-dom'

const WebMainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <NavBar />

      <main className="flex-1  "><Outlet /></main>

      <Footer />

    </div>
  )
}

export default WebMainLayout