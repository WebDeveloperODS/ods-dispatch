import React from 'react'
import Header from './header'
import Footer from './footer'

const WebLayout = ({children}) => {
  return (
    <div className="flex flex-col">
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default WebLayout