import React, { useState } from 'react'

const Duumy1 = () => {
    const [count, setcount] = useState(0)
    const [count1, setcount1] = useState(0)
    const handleClick = () => {
        setcount(count + 1);
    }
    const handleClick1 = () => {
        setcount1(count1 + 1);
    }
    const memoizedValue = React.useMemo(()=>{
       console.log('Computing expensive value...');
       var result = 0;
       for(let i = 0; i < count; i++) {
        result = result + i;
       }
       return result
    },[count])

    return (
        <div>
            <p>Count: {count}</p>
            <p>Count1: {count1}</p>
          <p>Expensive value: {memoizedValue}</p>
          <button onClick={handleClick}>ADD</button>
          <button onClick={handleClick1}>ADD1</button>
        </div>
    )
}

export default Duumy1
// it will only recalculated if value of dependency is changed.