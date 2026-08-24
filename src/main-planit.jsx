import React from 'react'
import ReactDOM from 'react-dom/client'
import PlanIT from './pages/PlanIT.jsx'
import CustomCursor from './components/site/CustomCursor.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlanIT />
    <CustomCursor />
  </React.StrictMode>,
)
