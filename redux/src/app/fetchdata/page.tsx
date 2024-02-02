"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/slice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

const page = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((data:any) => data.usersData.fetchData)
    useEffect(() => {
         dispatch(fetchData()); 
    },[])
    return (
        <div>
            <div className='p-2 m-2 flex justify-center items-center'>
                <ul>
                    {
                        data?.map((value: any) => (
                            <li key={value.id} className='text-white text-xl text-bold m-2 w-100vw flex justify-between'>
                                <div>
                                    {value.name}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default page
