import { React, useCallback, useState } from 'react'

const UseCallBack = () => {
    const [count, setCount] = useState(0);
    const [ref, setref] = useState(0);
    // Without useCallback, ChildComponent would re-render on each ParentComponent render
    const handlePlus = useCallback(() => {
        setCount(count + 1);
    }, [count])
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setref(ref + 1)}>Refff</button>
            <ChildComponent handlePlus={handlePlus} />
        </div>
    )
}
function ChildComponent({ handlePlus }) {
    console.log('ChildComponent rendering');
    return (
        <button onClick={handlePlus}>
            Increment Count in ParentComponent
        </button>
    );
}
export default UseCallBack
// The React useCallback Hook returns a memoized callback function.
//  note:- The `useCallback` and useMemo Hooks are similar. The main difference is that useMemo
//         returns a memoized value and useCallback returns a memoized function.

// In this example, the handleplus function is memoized using useCallback.
//    Without useCallback, the handleplus function would be recreated on each render
//    of the ParentComponent, causing unnecessary re-renders of the ChildComponent.
//    With useCallback, the handleplus function will only be recreated if the count
//    state changes, optimizing performance.