"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Heading from './common/Heading';

function LoginForm({ setShow }: any) {
    const router = useRouter()
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password == "pt123") {
            router.push('/user')
        } else {
            setPassword("")
        }
    }
    return (
        <div className='mt-10'>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-10">
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm shadow-xl p-4">
                    <Heading/>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="Password" className="block text-xl font-bold leading-6 text-gray-900">
                                Password:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Password"
                                    name="Password"
                                    type="password"
                                    autoComplete="Password"
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div style={{ color: "red" }}>{!password && "invalid password"}</div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm block text-sm font-medium leading-6 " style={{ color: "blue" }}>Login via Otp</div>
                </div>

            </div>
        </div>
    )

}

export default LoginForm
