import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Rules from './pages/Rules'
import Roles from './pages/Roles'
import Events from './pages/Events'
import FAQ from './pages/FAQ'
import Staff from './pages/Staff'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
