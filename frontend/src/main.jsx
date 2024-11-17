import { jwtDecode } from "jwt-decode";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css'
import App from './App.jsx'

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GoogleOAuthProvider clientId={apiKey}>
        <App />
      </GoogleOAuthProvider> 
    </Router>
  </StrictMode>,
)
