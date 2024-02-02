import Inputhandle from '@/component/common/Inputhandle'
import React from 'react'

function UpdateRole({params}:any) {
  return (
    <div>
      <Inputhandle id={params&& params.id}/>
    </div>
  )
}

export default UpdateRole
