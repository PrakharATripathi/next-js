import AddTodo from '@/component/AddTodo'
import React from 'react'

function AddTodos() {
    return (
        <div>
            <main>
                <h2 className='bg-blue-200 text-bg-dark font-bold text-center p-2 '>Todo List + typscript</h2>
                <AddTodo />
            </main>
        </div>
    )
}

export default AddTodos
