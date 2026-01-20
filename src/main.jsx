
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { preloadCriticalResources } from './utils/performance.js'

// Preload critical resources
preloadCriticalResources()

// Use concurrent features for better performance
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)