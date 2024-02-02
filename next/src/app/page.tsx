"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchData } from "./redux/slice";

export default function Home() {
  const data = useAppSelector((state: any) => state.data)
  const [serch, setSerch] = useState("a")
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    dispatch(fetchData())
  }, []);
  function handleChange(e: any) {
    if (e.target.value === "") {
      setSerch("a")
    } else {
      setSerch(e.target.value)
    }
    router.push(`#${e.target.value}`)
  }
  return (
    <>
      <div className={`${Number(serch) > 500 || Number(serch) <= 0 ? "bg-red-500" : " bg-black"} absolute w-full`}>
        <div className='sticky top-2'>
          <input value={serch} onChange={handleChange} className="text-black" type="number" />
        </div>
        <div className='p-2 m-2 flex justify-center items-center text-white'>
          <ul className="text-white">
            {data?.map((value: any, index: number) => (
              <li key={value.id} className={`text-white text-xl font-bold m-2 w-full flex justify-between ${Number(serch) == index + 1 && "bg-blue-500"}`}
                id={`${value.id}`}>
                <div >
                  {value.id}.  {value.name}

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
