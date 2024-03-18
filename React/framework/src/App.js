import './App.js';
import Usereducer from './Hooks/usereduced/Usereducer.jsx';
function App() {
    return (
        <div className="App">
            <Usereducer/>
        </div>
    );
}

export default App;



// import './App.css';
// // import Counter from './Redux-component/Counter';
// import Democontexts from './contextApi/Democontexts';
// // function App() {
// //   const [time, setTime] = useState(0);
// //   const [countdown, setCountdown] = useState(false);

// //   const startCountdown = () => {
// //       setTime(time+1);
// //       setCountdown(true);
// //   }
// //   const stopCountdown =()=>{
// //     setCountdown(false);
// //   }
// //   useEffect(() => {
// //     let interval;

// //     if (countdown) {
// //       interval = setInterval(() => {
// //         setTime(prevTime => prevTime + 1);
// //       }, 1000);
// //     } else{
// //       clearInterval(interval);
// //       setCountdown(false);
// //     }
// //     return () => clearInterval(interval);
// //   }, [countdown, time]);

// //   //  the return () => clearInterval(interval); line ensures that the interval is cleared when the component
// //   //  is unmounted or when the dependencies of the useEffect hook change

// //   // The cleanup function is defined inside the useEffect hook using return () => clearInterval(interval);. 
// //   // This cleanup function is responsible for clearing the interval when the component is unmounted or when 
// //   // the countdown or time values change.
// //   return (
// //     <div className="App">
// //       <h1>Timer App</h1>
// //       <div className="timer">
// //           <h2>{time} seconds</h2>
// //             <button onClick={startCountdown}>Start Countdown</button>
// //             <button onClick={stopCountdown}>stop Countdown</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// // function App(){
// //     const [state, setstate] = useState("");
// //     var count = 0;
// //     var refcount = useRef(0)
// //     useEffect(()=>{
// //         count++;
// //         refcount.current = refcount.current+1;
// //     })
// //     return (
// //         <div className='App'>
// //        <input type='text' value={state} onChange={(e)=>setstate(e.target.value)}/>
// //       <h1>refcount:{refcount.current}</h1>
// //       <h1>count:{count}</h1>
// //         </div>
// //     )
// // }
// // export default App;
// function App(){
    
//     return (
//         <div className='App'>
//             {/* <Counter/> */}
//            < Democontexts/>
//         </div>
//     )
// }
// export default App;
// 1. **************************************

// import {Profiler} from 'react'
// import './App.css';
//  import Count from './components/problem1/Count'
// import { useState } from 'react';
// import data1 from './db.json'
// function App() {
//  const [data,setdata] = useState(data1) 
//  const HandleQuantity = (count, id)=>{
//  var arr =  data.map((ele, idx)=>{
//      if(id === ele.id){
//       return {...ele, quantity : ele.quantity + count}
//      }
//      else{
//       return ele
//      }
//   })
//   setdata(arr)
//  }
//    var total = data.reduce((one, two)=>{
//           return one + two.price*two.quantity
//    },0)
   
//    const onRenderCallback = ()=>{
//     console.log("rendering is completed")
//    }

//   return (
//     <div className="App">
//       <Profiler id="MyAppProfiler" onRender={onRenderCallback}>
//       {
//     data.map((ele)=>
//     <Count name = {ele.name} price = {ele.price} id = {ele.id}  quantity = {ele.quantity} HandleQuantity = {HandleQuantity} key={ele.id}/>
//     )
//    }
//    <h1>Total : {total}</h1>
            
//             </Profiler>
   
//     </div>
//   );
// }

// export default App;



// 2. **************************************

// import Profiler from 'react'
// import Count from './components/problem1/Count.jsx'
// function App(){
//   const onRenderCallback = ()=>{
//     console.log('rendered')
//   }
//   return (
//         <div className="App">
//            <h1>My Profiler Example</h1>
//       <Profiler id="MyAppProfiler" onRender={onRenderCallback}>
       
//         <Count/>
//       </Profiler>
//         </div>
//       );
// }
// export default App;

