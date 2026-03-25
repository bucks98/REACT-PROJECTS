

import './App.css'
import { FunctionSample } from './components/FunctionSample'
import { MultiTypeComponent } from './components/MultiTypeComponent'
import {Header } from './Header'
import './css/Base.css'
import { Student } from './components/Student'
import { ChildComponenet } from './components/ChildComponenet'
import { ArraySample } from './components/ArraySample';
import { OneOfSample } from './components/OneOfSample'

function App() {
  const items =[
    {id: 1, name:"Item1"},
    {id: 2, name:"Item2"},
    {id: 3, name:"Item3"},
  ];
const handleClick = ()=> {
  alert("Button click");
};
  

  return (
    <>
  <Header />

  <Student Name=" Bagavath" Age={27} isMarried={false}/> 
  <Student Name=" Ram" Age={23} isMarried={false}/>
  <Student Name=" shyam" Age={25} isMarried={false}/>
  <Student />
  <Student Name=" shyam" Age={25} isMarried={false}/>

  <ChildComponenet>
    <p>This is a simple para 1</p>
    <p>This is a simple para 2</p>
    <p>This is a simple para 3</p>
  </ChildComponenet>

  <ArraySample items ={items}/>

    <OneOfSample  color = "maroon" />

    <MultiTypeComponent value="Hello"/>
    <MultiTypeComponent value={42}/>
    <MultiTypeComponent value= {false}/> 
<div>
  <h2>Parent Component</h2>
  <FunctionSample handleClick={"handleClick"} />
</div>
    </>
  )
}


export default App
