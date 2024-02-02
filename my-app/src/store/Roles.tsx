"use client"
import React, { ReactNode, createContext, useState } from 'react'
import { intialUser } from './staticData'
 type UserType = {
    id: string;
    name: string;
    status: boolean;
    permision: {};
}
export const RoleContext = createContext<{ 
    users: UserType[]; 
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>> }>({
    users: [],
    setUsers: () => {},
  });
  
function Roles({children} :  { children: ReactNode }) {
    const [users,setUsers] = useState(intialUser)
0
  return (
    <RoleContext.Provider value={{users:users,setUsers:setUsers}}>
      {children}
    </RoleContext.Provider>
  )
}

export default Roles
