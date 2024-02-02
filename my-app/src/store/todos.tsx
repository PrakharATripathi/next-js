"use client"
import React, { ReactNode, useContext, useState } from 'react'
import { createContext } from "react";
export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}
export type TodoContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
}
export const TodosContext = createContext<TodoContext|null>(null);

function Todos({children}: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task,
                    completed: false,
                    createdAt: new Date(),
                },
                ...prev
            ]
            return newTodos;
        })
    }
    return (
        <TodosContext.Provider value={{todos, handleAddTodo}}>
            {children}
        </TodosContext.Provider>
    )
}

export default Todos

export function useTodos(){
    const todosContextValue = useContext(TodosContext)
    if(!todosContextValue){
        throw  new Error ('useTodos used outside of Provider')
    }
    return todosContextValue;
}