"use client"
import { addUser } from '@/app/redux/slice'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Adduser = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const handleclick = () => {
    dispatch(addUser(name))
    setName("")
  }
  
  return (
    <div>
      <h1 className='flex justify-center items-center text-2xl font-bold p-2'>Add users</h1>
      <div className='p-2 m-2 flex justify-center items-center'>
        <input type="text" placeholder='enter user name' className='p-2 text-black'
          onChange={(e) => setName(e.target.value)} value={name} />
        <button type="submit" className='p-2 bg-blue-500'
          onClick={handleclick}>Add user </button>
      </div>
      <Link href="/users" className='bg-red-700 rounded-md p-1 text-sm m-1'>Remove Users</Link>
    </div>
  )
}

export default Adduser
