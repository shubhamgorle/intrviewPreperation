import React, { useState } from 'react'

const Range = () => {
    const[state, setstate] = useState(50);
    const[selectedOption, setSelectedOption] = useState("Yes");
    const handleRange = (e)=>{
     setstate(e.target.value)
    }
    const handleCheck = (e)=>{
     setSelectedOption(e.target.value)
    }
    
  return (
    <div>
      <h1>Range Component</h1>
      <h1>{state}</h1>
      <input type="range" min={0} max={100} value={state} onChange={handleRange}/>
      <br />
      <input type="radio" value="Yes" checked={selectedOption === "Yes"} onChange={handleCheck}/>Yes
      <input type="radio" value="No" checked={selectedOption === "No"} onChange={handleCheck}/>No
      <input type="radio" value="Can't say" checked={selectedOption === "Can't say"} onChange={handleCheck}/>Can't say
      <h1>{selectedOption}</h1>
    </div>
  )
}

export default Range
