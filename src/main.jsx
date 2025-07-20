import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import AOS styles
import 'aos/dist/aos.css';
// Import AOS and initialize
import AOS from 'aos';
AOS.init({
  once: false, // animations repeat when scrolling up/down
  duration: 800,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
