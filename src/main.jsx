import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  Dropdown,
  Modal,
  Collapse,
  Ripple,
  initTWE,
} from "tw-elements"
console.log("tw-elements init ho gaya");

initTWE({ Dropdown, Modal, Collapse, Ripple })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
