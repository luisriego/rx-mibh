import React from 'react'
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';

import { store } from './store/store';

import { Footer } from './components/main/Footer'
import { Header } from './components/main/Header'

export const App = () => {
  return (
    <Provider store={ store }>
      <Header />
        <AppRouter />
      <Footer />
    </Provider>
  )
}
