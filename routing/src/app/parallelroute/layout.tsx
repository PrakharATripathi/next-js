import React from 'react'

const ParallelRoute = ({children ,left,rigiht} : any) => {
    const loggin = true;
  return (
    <section>
      {children}
      {/* {left} */}
      {/* {rigiht} */}
      {loggin ? left : rigiht}
    </section>
  )
}

export default ParallelRoute
