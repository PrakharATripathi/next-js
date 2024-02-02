"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const UserData = () => {
    const [user, setUser] = useState([])
    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: any = await response.json();
        setUser(data)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                user.map((data: any) => (
                    <>
                        <Link href={`users/${data.id}`} className="block p-2 hover:bg-blue-600 m-2">
                            {data.id}
                            {data.title}
                        </Link>
                    </>
                ))
            }
            <h1>data</h1>
        </div>
    )
}

export default UserData
