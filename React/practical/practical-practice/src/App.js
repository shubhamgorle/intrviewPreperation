// import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
function App() {
  async function getData(){
    try {
        let data =  await fetch("https://dummyjson.com/products");
        let res = await data.json();
        console.log(res.products);
    } catch (error) {
        console.log(error)
    }
}

  useEffect(()=>{
    getData();
  })

  return (
   <div>

   </div>
  );
}

export default App;
