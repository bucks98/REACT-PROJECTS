

import './App.css'
// import {Header } from './Header'
import './css/Base.css'
import { Student } from './components/Student'
import { ChildComponenet } from './components/ChildComponenet'



function App() {
  

  return (
    <>
    
     {/* <Header /> */}
  <Student Name=" Bagavath" Age={27} isMarried={false}/>
  <Student Name=" Ram" Age={23} isMarried={false}/>
  <Student Name=" shyam" Age={25} isMarried={false}/>
  <Student />
  <Student Name=" shyam" Age={25} isMarried={false}/>

  <ChildComponenet>
    <p>This is a simple para 1</p>
    <p>This is a simple para 1</p>
  </ChildComponenet>
    </>
  )
 
}
//  function Car(){
//    return (<button>Hi, I am a car!</button> 
//  )
//   }

export default App
