import React,{useState} from 'react';
import Toggle from './Toggle'
import Form from './Form'
import Conditional from './Conditional'
import Constructor from './Constructor'
import Login from './Login'
import User from './User'
import Member from './Member'
import Render from './Render'

import './App.css';

function App(){
  const [name,setName]=React.useState("anil")
  function sunData(){
    alert("hello from app")
  }
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  function getData(val)
  {
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return(
    <div className="App">
      <h1>Get Input box value !</h1>
      {
        print?
        <h1>{data}</h1>
        :null

      }
      <input type="text" onChange={getData} />
      <button onClick={()=>setPrint(true)}>Print Data</button>
      <Toggle />
      <Form />
      <Conditional />
      <Login />
      <User data={sunData} />
      <div>
      <Member data={sunData} />
      </div>
      <Constructor />
      <Render name={name} />
      <button onClick={()=>setName("sidhu")}>Update Name</button>
      
    </div>
  )
}


export default App;
