import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './AppRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
)
