import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter
} from "react-router-dom";
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import NotreApplication from './views/notre-appli/notre-application';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter >
        <App />
      </BrowserRouter>
  </React.StrictMode>
)
