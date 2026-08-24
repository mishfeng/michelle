import React from 'react'
import ReactDOM from 'react-dom/client'
import Studio from './pages/Studio.jsx'
import CustomCursor from './components/site/CustomCursor.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Studio />
    <CustomCursor />
  </React.StrictMode>,
)
