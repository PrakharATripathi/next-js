"use client"
import { cheaboxValidate } from '@/service/validation';
import { RoleContext } from '@/store/Roles';
import { dummyUser } from '@/store/staticData';
import { error } from 'console';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { boolean } from 'yup';

function Inputhandle({ id }: any) {
    const router = useRouter();
    const { users, setUsers } = useContext(RoleContext);
    const user: any = id ? users.find((obj: any) => obj.id == id) || dummyUser : dummyUser
    const {
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setValues,
    }: any = useFormik({
        validationSchema: cheaboxValidate,
        initialValues: {
            id: user.id || Math.floor(Math.random() * 1000),
            name: user.name,
            status: user.status,
            permissions: user.permissions,
        },
        onSubmit: (values) => {
            console.log(values)
            const existingUserIndex: any = users.findIndex((u: any) => u.id === values.id);
            if (existingUserIndex !== -1) {
                const updatedUserData: any = [...users];
                updatedUserData[existingUserIndex] = values;
                setUsers(updatedUserData);

            } else {
                setUsers((pre: any) => [...pre, values]);
                console.log(users)
            }

            router.push('/user');
        },
    });
    const handleCheckboxChange = (category: string, action: string) => {
        setValues((prevValues: any) => ({
            ...prevValues,
            permissions: {
                ...prevValues.permissions,
                [category]: {
                    ...prevValues.permissions[category],
                    [action]: !prevValues.permissions[category][action],
                },
            },
        }));
    };

    const handleSelectAll = (category: string) => {
        const allChecked = Object.values(values.permissions[category]).every((value) => value === true);
        const updatedPermissions = Object.keys(values.permissions[category]).reduce(
            (acc: any, action) => {
                acc[action] = !allChecked;
                return acc;
            },
            {}
        );
        setValues((prevValues: any) => ({
            ...prevValues,
            permissions: {
                ...prevValues.permissions,
                [category]: updatedPermissions,
            },
        }));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this user?')) {
            const updatedUserData = users.filter((user) => user.id != id);
            setUsers(updatedUserData);
            router.push('/user');
        }
    };

    return (
        <div className='h-screen w-screen '>
            <div className='  w-full'>
                <form onSubmit={handleSubmit} className='h-full w-full reletive'>
                    <div className='flex justify-between h-full w-full'>
                        <div className='w-1/2 p-2 '>
                            <label>Role</label>
                            <input
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                className='w-full border-2 border-violet-700 rounded-md outline-none p-1.5'
                            />
                            <p className='text-red-500'>{errors.name && touched.name && errors.name}</p>
                        </div>
                        <div className='w-1/2 p-2'>
                            <label>Status</label>
                            <select
                                name="status"
                                value={values.status}
                                onChange={handleChange}
                                className='w-full border-2 border-violet-700 rounded-md outline-none p-1.5'
                            >
                                <option value="">Please Select</option>
                                <option>Active</option>
                                <option>Deactive</option>
                            </select>
                            <p className='text-red-500'>{errors.status && touched.status && errors.status}</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap'>
                        {Object.entries(values.permissions).map(([type, actions]: any) => (
                            <div key={type} className='w-1/2'>
                                <h2 className='p-1.5 text-2xl font-bold'>
                                    <input
                                        type="checkbox"
                                        checked={Object.values(actions).every((value) => value === true)}
                                        onChange={() => handleSelectAll(type)}
                                        className='p-1.5 m-1'
                                    />
                                    {type}
                                </h2>
                                {Object.entries(actions).map(([action, value]: any) => (
                                    <label key={action} className='p-1.5'>
                                        <input
                                            type="checkbox"
                                            checked={value}
                                            name={`permission.${type}.${action}`}
                                            onChange={() => handleCheckboxChange(type, action)}
                                            className='p-1.5 m-1'
                                        />
                                        {action}
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='flex pt-5'>
                        <button type='submit'  className='bg-blue-700 text-white rounded-md p-2'>{id ? 'Update User' : 'Add User'}</button>
                        <button type='button' className='bg-blue-700 text-white rounded-md p-2'>cancel</button>
                    </div>
                </form>

                <div className='flex justify-end absolute right-0 ' style={{ top: "40%" }}>
                    <Link href="/user">
                        <button className='bg-red-600 text-white rounded-md p-2 m-2'>Cancel</button>
                    </Link>
                    {id && <button onClick={handleDelete}
                        className='bg-red-600 text-white rounded-md p-2 m-2'>Delete</button>}
                </div>
            </div>
        </div>
    )
}

export default Inputhandle
