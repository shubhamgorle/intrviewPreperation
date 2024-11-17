// import React from 'react'
// import { useEffect, useState } from 'react'
// const Problem1 = () => {
//     const[state, setstate] = useState("React")
//     useEffect(()=>{
//        setstate("ReactJS");
//     },[])
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default Problem1

// function Problem1() {
//     const [count, setCount] = React.useState(0);

//     const increment = () => {
//       setCount(count+ 1);
//       setCount(count+ 1);
//     };

//     return <button onClick={increment}>{count}</button>;
//   }

// export default Problem1

// here it is taking current state value of count for both statements thats why we are getting output as 1.


// function Problem1() {
//     const [count, setCount] = React.useState(0);

//     const increment = () => {
//       setCount((prev)=>prev+1);
//       setCount((prev)=>prev+1);
//     };
//     return <button onClick={increment}>{count}</button>;
//   }

// export default Problem1
// here it is taking updated value of state which is prevVal thats why we are getting output as 2
// in this component, the increment function uses the "functional form of setCount". This functional form ensures that prevCount is
//  the current state value at the time setCount is called.


// const Problem1 = () => {
//     const [text, setText] = React.useState("Hello");

//     React.useEffect(() => {
//         setTimeout(() => setText("World"), 1000);
//     }, []);

//     return (
//         <div>
//             {text}
//         </div>
//     )
// }

// export default Problem1



// function Problem1() {
//     const [count, setCount] = React.useState(0);
//     const handleClick = () => {
//         setCount(count + 1);
//         console.log(count);
//     };

//     return <button onClick={handleClick}>{count}</button>;
// }
// export default Problem1

// State updates are asynchronous. The console.log statement executes before the state is updated.


// function Problem1() {
//     const [count, setCount] = React.useState(0);
//     React.useEffect(() => {
//         document.title = `Count: ${count}`;
//     });

//     return <button onClick={() => setCount(count + 1)}>Increment</button>;
// }
// export default Problem1
// Explanation: The document title updates to reflect the current count every time the button is clicked, 
// as the useEffect hook runs after every render without any dependencies.


// function Problem1() {
//     const [count, setCount] = React.useState(0);
//     React.useEffect(() => {
//         const interval = setInterval(() => setCount(c => c + 1), 1000);
//         return () => clearInterval(interval);
//     }, []);

//     return <div>{count}</div>;
// }


// export default Problem1
// - Output: A counter that increments every second
// - Explanation: The `useEffect` hook sets up an interval that increments the count every second.
// The cleanup function clears the interval to prevent memory leaks.


// function Problem1() {
//     const [number, setNumber] = React.useState(0);
  
//     React.useEffect(() => {
//       setNumber(5);
//     }, [number]);
  
//     return <div>{number}</div>;
//   }
//   export default Problem1


//   - Output: `5`
// - Explanation: The `useEffect` hook will run initially and set the number to 5. Since the 
// dependency array includes `number`, it could cause an infinite loop, but since the value is 
// set to the same value, it stabilizes at 5.