"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Login({ heading, setShow }: any) {
    const router = useRouter()
    const [number, setNumber] = useState(0)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const num: number = 1234567890;
        if (number == num) {
            setShow(true);
        } else {
            router.push("/register")
        }
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-lg p-5">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {heading && heading}
                    </h2>
                </div>
                <form className="space-y-6 " onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                            Mobile Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="number"
                                name="number"
                                type="number"
                                autoComplete="number"
                                onChange={(e: any) => setNumber(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
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
    )
}

export default Login
