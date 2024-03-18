import React, { useState } from 'react'
import Dummy2 from './Dummy2'
const Dummy1 = () => {
    const[state, setState] = useState(false);
    const[ref, setref] = useState(false);
    const handleTrue= ()=>{
        setState(true)
        setref(!ref)
    }
    const handleFalse= ()=>{
       setState(false)
    }
  return (
    <div>
      <Dummy2 state={state}/>
      <button onClick={handleTrue}>True</button>
      <button onClick={handleFalse}>False</button>
    </div>
  )
}

export default Dummy1

// it is higher order component where component will rerenderd only if component props are changed else it will not cause 
// rendering of the component.