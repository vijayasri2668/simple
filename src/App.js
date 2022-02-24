import React,{useState} from 'react'
import './App.css'
const para = {
    color:'white',
    margin:'20px', 
}

function App ()  {
 const [show,setShow]=useState(false)

  return (
    <div className='body'>
       <h1 className='head'>STYLING USING FUNCTIONAL AND CLASS COMPONENTS</h1>
    
    <button onClick={() => setShow(!show)} className='box1'>This is Functional Component</button>
     {show?<div className='clscomp'>
       <h1>This Is Created Using Functional Component -- with external css</h1>
       <h1 style={para}>This is done by using inline css</h1>
       </div> : null}
      
    </div>
  )
}

export default App