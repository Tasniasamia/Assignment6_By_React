import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Button1 from './Component/Button1/Button1'
import Button2 from './Component/Button2/Button2'
import Card from './Component/Card/Card'
import Modal from './Component/Modal/Modal'

function App() {
const [step,setStep]=useState([])
useEffect(()=>{
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res=>res.json())
  .then(data=>setStep(data.data.tools))
},[])
const[step1,setStep2]=useState(true)

const showall=()=>{
  setStep2(false);
}
let values;
const [step2,setStep3]=useState(null)
// console.log(step2);
const [data,singleobj]=useState({})

useEffect(()=>{
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${step2}`)
  .then(res=>res.json())
  .then(data=>singleobj(data.data))
},[step2])

function handler(id){
  console.log(id);
  setStep3(id);
 
}

  return (
    <div>
     <Header></Header>
     <Button1></Button1>
     <div className='container'>
     {
      step.slice(0,step1?6:12).map(index=> <Card {...index}key={index.id} functionlabel={handler}></Card>)
     }</div>
    {
     step1 &&(
<Button2 getvalues={showall}></Button2>

      )
    }
    <Modal {...data}></Modal>
    </div>
  )
}

export default App
