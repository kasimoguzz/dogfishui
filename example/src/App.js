import {useState} from 'react'
import React from 'react'
import './index.css'

import 'dogfishui/dist/index.css'

const App = () => {
  const [border, setBorder] = useState("btn")
  return(
    <>
    <button className={border} onClick={()=> alert("hello world!!")}>click</button>
    <br />
    <button onClick={()=> setBorder("dotted")}>dotted</button>
    <button onClick={()=> setBorder("dashed")}>dashed</button>
    <button onClick={()=> setBorder("btn")}>default</button>
    </>
  )
}

export default App
