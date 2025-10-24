import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './DoNotEditThis.tsx'
import './doNotEditThis.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
