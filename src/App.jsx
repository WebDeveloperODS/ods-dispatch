import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import WebLayout from './assets/ui/web_layout'

const App = () => {
  return (
    <WebLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </WebLayout>
  )
}

export default App