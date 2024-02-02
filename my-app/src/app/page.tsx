"use client"
import Login from '@/component/Login'
import LoginForm from '@/component/LoginForm'
import React, { useState } from 'react'

function page() {
  const [show, setShow] = useState(false)
  return (
    <>
      {show ?
        <>
        <LoginForm setShow={setShow}/>
        </>
        :
        <Login heading="Welecome" setShow={setShow}  />
      }
    </>
  )
}

export default page
