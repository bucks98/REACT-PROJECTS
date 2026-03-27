import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { UserCard } from './components/UserCard'
import { StudentCard1 } from './components/StudentCard1'
// import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentCard1 />
    {/* <UserCard /> */}
    {/* <App /> */}
  </StrictMode>,
)
