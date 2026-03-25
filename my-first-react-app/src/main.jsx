import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserCard } from './components/UserCard'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
    {/* <App /> */}
  </StrictMode>,
)
