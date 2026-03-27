import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { UserCard } from './components/UserCard'
import { QrCode } from './QrCodeComponent/QrCode'
import  './css/QrCode.css'
// import { StudentCard1 } from './components/StudentCard1'
// import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCode />
    {/* <StudentCard1 /> */}
    {/* <UserCard /> */}
    {/* <App /> */}
  </StrictMode>,
)
