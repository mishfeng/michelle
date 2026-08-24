import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import CustomCursor from './components/site/CustomCursor.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <CustomCursor />
  </React.StrictMode>,
)
