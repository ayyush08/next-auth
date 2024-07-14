import { connectDB } from "@/dbConfig/dbConfig";
import User from '@/models/user.model'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
connectDB()


export const getDataFromToken = (request:NextRequest)=>{
    try {
        const token = request.cookies.get('token')?.value || ''
        const decodedToken:any = jwt.verify(token,process.env.TOKEN_SECRET!)
        return decodedToken.id
    } catch (error:any) {
        throw new Error(error.message)
    }
}