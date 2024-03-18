import React, { useState } from 'react'
import { AddAction,RemoveAction } from '../Redux/action'
import {useDispatch,useSelector} from "react-redux"
const Counter = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const handlePLus = ()=>{
      dispatch(AddAction(1));
    }
    const handleMinus = ()=>{
       dispatch(RemoveAction(1));
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handlePLus}>+PLUS</button>
            <button onClick={handleMinus}>-MINUS</button>
        </div>
    )
}

export default Counter
