// function App(){
//   return (
//         <div className="App">
//      <h1>welcome to interview preperation </h1>
//         </div>
//       );
// }
// export default App;

// 1. **************************************


// import './App.css';
// import Count from './components/problem1/Count';
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
//   return (
//     <div className="App">
//    {
//     data.map((ele)=>
//     <Count name = {ele.name} price = {ele.price} id = {ele.id}  quantity = {ele.quantity} HandleQuantity = {HandleQuantity}/>
//     )
//    }
//    <h1>Total : {total}</h1>
//     </div>
//   );
// }

// export default App;



// 2. **************************************

function App(){
  return (
        <div className="App">
         
        </div>
      );
}
export default App;
