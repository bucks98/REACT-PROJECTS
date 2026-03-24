

import './App.css'
// import {Header } from './Header'
import './css/Base.css'
// import { Student } from './components/Student'
// import { ChildComponenet } from './components/ChildComponenet'
// import { ArraySample } from './components/ArraySample';
import { OneOfSample } from './components/OneOfSample'

function App() {
  // const items =[
  //   {id: 1, name:"Item1"},
  //   {id: 2, name:"Item2"},
  //   {id: 3, name:"Item3"},
  // ];
  

  return (
    <>
  {/* <Header /> */}

  {/* <Student Name=" Bagavath" Age={27} isMarried={false}/>
  <Student Name=" Ram" Age={23} isMarried={false}/>
  <Student Name=" shyam" Age={25} isMarried={false}/>
  <Student />
  <Student Name=" shyam" Age={25} isMarried={false}/>

  <ChildComponenet>
    <p>This is a simple para 1</p>
    <p>This is a simple para 2</p>
    <p>This is a simple para 3</p>

  </ChildComponenet>  */}
  {/* <ArraySample items ={items}/> */}
    <OneOfSample  color = "maroon" />
    </>
  )
}


export default App
