import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>       // zakomentowane bo wszystko ładuje się 2 razy w celu znalezienia błędów i w 6_1 mam 2 razy hello world
    <App />
  // </StrictMode>,
)
