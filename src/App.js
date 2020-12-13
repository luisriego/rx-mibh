import React from 'react'

import { AppRouter } from './routers/AppRouter'

import { Footer } from './components/main/Footer'
import { Header } from './components/main/Header'

export const App = () => {
  return (
    <div>
      <Header />
        <AppRouter />
      <Footer />
    </div>
  )
}
