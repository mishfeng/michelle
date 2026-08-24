import React from 'react'
import ReactDOM from 'react-dom/client'
import CapitalOne from './pages/CapitalOne.jsx'
import CustomCursor from './components/site/CustomCursor.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CapitalOne />
    <CustomCursor />
  </React.StrictMode>,
)
