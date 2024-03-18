import React, { useEffect, useState, useRef} from 'react'

const UseRef = () => {
    const data = useRef(0);
    useEffect(()=>{
    data.current = data.current+1;
    })
    const [count, setCount] = useState("");
      
  return (
    <div>
      <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
      <h1>{data.current}</h1>
    </div>
  )
}

export default UseRef
// Note ---> i want variable which should not cause rerender if we update it && it shoul not lost its value in while rendering.
// to meet such requirements we get useref hook.
// if we use usestate then it will not lost its value in while rerendering but it will cause rerender of component when updated.
// if we use normal varial which will not cause rerender but it will lost its value in while rendering.