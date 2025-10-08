import { StrictMode } from 'react'
import { ViteSSG } from 'vite-ssg'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

export const createApp = ViteSSG(
  () => (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  ),
  {
    routes: [
      { path: '/' },
      { path: '/about-ods-dispatch' },
      { path: '/truck-types' },
      { path: '/services-by-ods/dispatch-and-brokerage' },
      { path: '/services-by-ods/social-media-management' },
      { path: '/services-by-ods/business-web-development' },
      { path: '/carriers-setup' },
      { path: '/to-contact-ods-dispatch' },
    ],
  }
)
