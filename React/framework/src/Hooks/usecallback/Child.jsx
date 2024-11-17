import React from 'react'

const Child = ({handlePlus}) => {
    console.log("child")
  return (
    <div>
      <button onClick={handlePlus}>
            Increment Count in ParentComponent
        </button>
    </div>
  )
}

export default Child
