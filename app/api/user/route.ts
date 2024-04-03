import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();


export async  function POST(req:NextRequest){
   try {
     const body = await req.json();
 
     const user =await   client.user.create({
         data:{
             username : body.username,
             password : body.password
 
         }
     })
     console.log(user.id)
     return NextResponse.json({
         message:"you are logged in "
     })
 
   } catch (error) {
    console.log(error)
    return NextResponse.json({
        message:"user already exist"
    })
   }
}
