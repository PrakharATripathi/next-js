"use client"
import { deleteUser } from '@/app/redux/slice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DisplayUser = () => {
  const data = useSelector((state: any) => state.usersData.user)
  const dispatch = useDispatch()
  const handleDeleteData = (id:string) => {
      dispatch(deleteUser(id))
  }

  return (
    <div>
      <h1 className='flex justify-center items-center text-2xl font-bold p-2'>Display users</h1>
      <div className='p-2 m-2 flex justify-center items-center'>
        <ul>
          {
          data?.map((value: any) => (
              <li key={value.id} className='text-white text-xl text-bold m-2 w-100vw flex justify-between'>
                <div>
                  {value.name}
                </div>
                <div>
                  <button className='bg-red-700 rounded-md p-1 text-sm m-1'
                  onClick={()=>handleDeleteData(value.id)}>remove</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default DisplayUser
