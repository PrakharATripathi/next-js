"use client"
import { useTodos } from '@/store/Todos';
import React, { FormEvent, useState } from 'react';
import List from './List';


function AddTodo() {
    const [todo, setTodo] = useState("");
    const { handleAddTodo } = useTodos();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }
    return (
        <div className=' '>
            <form onSubmit={handleSubmit} className='flex justify-center'>
                <input
                    type="text"
                    placeholder="Add todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className='block  rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />

                <button type="submit" className='flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Submit</button>
            </form>
            <div className='text-center'>
                <List />
            </div>
        </div>
    );
}

export default AddTodo;
