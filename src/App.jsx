import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import WebLayout from './assets/ui/web_layout'
import ContactUs from './pages/contact-us'
import CarriersSetup from './pages/carriers-setup'
import AboutUs from './pages/about-us'
import TruckTypes from './pages/truck-types'

const App = () => {
  return (
    <WebLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/truck-types" element={<TruckTypes />} />
        <Route path="/about-ods-dispatch" element={<AboutUs />} />
        <Route path="/carriers-setup" element={<CarriersSetup />} />
        <Route path="/to-contact-ods-dispatch" element={<ContactUs />} />
      </Routes>
    </WebLayout>
  )
}

export default App