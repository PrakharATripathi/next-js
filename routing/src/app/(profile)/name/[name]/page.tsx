import React from 'react'

const Nameid = ({params}:any) => {
    console.log(params)
  return (
    <div>
      name :  {params.name}
    </div>
  )
}

export default Nameid
