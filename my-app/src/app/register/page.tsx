"use client"
import OtpInput from '@/component/OtpInput'
import Heading from '@/component/common/Heading'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

function Register() {
  const [otp, setOtp] = useState(0)
  const router = useRouter();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (otp == 123456) {
      router.push('/user')
    } else {
      setOtp(0)
    }
  }
  return (
    <div className='mt-10'>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-10">
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm shadow-xl p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-2 py-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register
            </h2>
          </div>
          <Heading />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <OtpInput setOtp={setOtp} />
            </div>
            <div style={{ color: "red" }}>{!otp && "invalid password"}</div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register
