"use client"
import { RoleContext } from '@/store/Roles'
import { TodosContext, useTodos } from '@/store/Todos'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

function User() {
    const router = useRouter()
    const { users } = useContext(RoleContext)

    return (
        <>
            <div className='flex justify-end m-2'>
                <button className='bg-blue-500 text-white rounded-md p-2'
                    onClick={() => router.push('/addrole')}>Add new Role</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className='bg-blue-200'>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id} className='hover:bg-blue-200' onClick={()=>router.push(`addrole/${user.id}`)}>
                                        <td className="py-2 px-4 border-b text-center ">
                                            {user.id}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {user.name}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {user.status}
                                        </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User
