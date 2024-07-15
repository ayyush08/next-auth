'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'


export default function ProfilePage() {
    const router = useRouter()
    const [userData,setUserData] = useState("nill")

    const getUserDetails = async ()=>{
        const response = await axios.post("/api/users/me")
        console.log(response.data.data);
        setUserData(response.data.data._id)
        
    }
    const logout = async ()=>{
        try {
            await axios.get('/api/users/logout');
            toast.success("Logout Success")
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
            
        }
    }
    return (
        <div className='flex flex-col items-center justify-center max-h-screen py-2'>
            <h1>Profile Page</h1>
            <hr />
            <h2>{userData==="nill" ? "No data found": <Link href={`/profile/${userData}`} >{userData}</Link>}</h2>
            <hr />
            <button className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={logout}>Logout</button>
            <button className='bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={getUserDetails}>Get User Details</button>
        </div>
    )
}


