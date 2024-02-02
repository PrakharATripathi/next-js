"use client"
import { addTodo } from '@/app/redux/todoslice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.todo.todos)

    return (
        <div>
            <div>
                <h1 className='flex justify-center items-center text-2xl font-bold p-2'>Add users</h1>
                <div className='p-2 m-2 flex justify-center items-center'>
                    <input type="text" placeholder='enter user name' className='p-2 text-black'
                        onChange={(e) => setName(e.target.value)} value={name} />
                    <button type="submit" className='p-2 bg-blue-500'
                        onClick={() => dispatch(addTodo(name))}>
                        Add todo
                    </button>
                </div>

            </div>
            <div>
                <h1 className='flex justify-center items-center text-2xl font-bold p-2'>Display users</h1>
                <div className='p-2 m-2 flex justify-center items-center'>
                    <ol>
                        {
                            data?.map((value: any) => (
                                <li key={value.id} className='text-white text-xl text-bold m-2 w-100vw flex justify-between'>
                                    <div>
                                        {value.name}
                                    </div>
                                    <div>
                                        
                                    </div>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Todo
