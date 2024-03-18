import React from 'react'

const Dummy2 = React.memo(({state}) => {
    console.log("Dummy2 page is rendered again!");
  return (
    <div>
      {state ? "True": "False"}
    </div>
  )
})

export default Dummy2
