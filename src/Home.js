import React from 'react'

import { HomeRouter } from './routers/HomeRouter'

import { Footer } from './components/main/Footer'
import { Header } from './components/main/Header'

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <HomeRouter />
      </div>
      <Footer />
    </div>
  )
}