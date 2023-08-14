// function App(){
//   return (
//         <div className="App">
//      <h1>welcome to interview preperation </h1>
//         </div>
//       );
// }
// export default App;

// 1. **************************************

import {Profiler} from 'react'
import './App.css';
 import Count from './components/problem1/Count'
import { useState } from 'react';
import data1 from './db.json'
function App() {
 const [data,setdata] = useState(data1) 
 const HandleQuantity = (count, id)=>{
 var arr =  data.map((ele, idx)=>{
     if(id === ele.id){
      return {...ele, quantity : ele.quantity + count}
     }
     else{
      return ele
     }
  })
  setdata(arr)
 }
   var total = data.reduce((one, two)=>{
          return one + two.price*two.quantity
   },0)
   
   const onRenderCallback = ()=>{
    console.log("rendering is completed")
   }

  return (
    <div className="App">
      <Profiler id="MyAppProfiler" onRender={onRenderCallback}>
      {
    data.map((ele)=>
    <Count name = {ele.name} price = {ele.price} id = {ele.id}  quantity = {ele.quantity} HandleQuantity = {HandleQuantity} key={ele.id}/>
    )
   }
   <h1>Total : {total}</h1>
            
            </Profiler>
   
    </div>
  );
}

export default App;



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
