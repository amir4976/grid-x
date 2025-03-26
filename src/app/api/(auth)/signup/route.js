import ConnectToDb from "@/utils/ConnectToDb";
import UserModel from "@/models/user";
import { Bcript, generateToken } from "@/utils/Halper";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export async function POST(req) {
  try {
    ConnectToDb();
    const {name, email, password } = await req.json();
    console.log(name , email , password);
    if( !name || !email || !password){
        return Response.json("all fild have to be modifid", { status: 500 });
    }
    const isExistUser = await UserModel.findOne({email:email})
    if(isExistUser){
        return Response.json("user already exist", { status: 500 });
    }

    const hashedPassword = Bcript(password)


    const JWT = generateToken(email)
    console.log(JWT)
    const allusers= await UserModel.find({})

    const newUser = await UserModel.create({
        name,
        email,
        password : hashedPassword,
        isAdmin: allusers.length === 0 ? true : false,
    })
    
    return Response.json("user created success fully", { status: 200,
        headers: {
            "Set-Cookie": `Token=${JWT}; HttpOnly; Path=/; Max-Age=86400`,
        },
    });
  } catch (error) {
    return Response.json("failed"+error, { status: 500 });
  }
}