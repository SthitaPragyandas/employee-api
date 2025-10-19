import bcrypt from "bcrypt";
import UserModel from "./models/User.js"
import connectDB from "./db/db.js";
import dotenv from "dotenv"


dotenv.config()
const userRegister=async()=>{
    connectDB()
    try {
        const hashPassword=await bcrypt.hash("admin",10)
        const newUser=new UserModel({
            name:"Admin",
            email:"admin@gmail.com",
            password: hashPassword,
            role:"admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}
userRegister()