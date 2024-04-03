"use server"
import client from "../db";


export async  function Signupr(username:string,password:string){
   try {
     
 
     const user =await   client.user.create({
         data:{
             username : username,
             password : password
 
         }
     })
     console.log(user.id)
     return {message:"you are logged in"}
 
   } catch (error) {
    console.log(error)
    return {
        message:"user already exist"
    }
   }
}