import React from 'react'
import Header from './header'
import Footer from './footer'
import JumpToTop from './components/jump-to-top'

const WebLayout = ({children}) => {
  return (
    <div className='relative'>
        <Header />
        {children}
        <JumpToTop />
        <Footer />
    </div>
  )
}

export default WebLayout