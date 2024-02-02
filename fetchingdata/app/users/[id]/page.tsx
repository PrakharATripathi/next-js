"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const UserProfile = ({params}:any) => {
    const [user, setUser] = useState({id:"",title:"",body:""});
    console.log(params)
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const data: any = await response.json();
        setUser(data)
        console.log(data)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>{user.id}</h1>
            <h1>{user.title}</h1>
           <h1>{user.body}</h1>
           <Link href="/users" className="bg-blue-400 p-2 rounded-md m-3">Back</Link>
        </div>
    )
}

export default UserProfile
