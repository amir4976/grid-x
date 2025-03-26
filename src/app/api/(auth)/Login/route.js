import ConnectToDb from "@/utils/ConnectToDb";
import userModel from '@/models/user'
import bcrypt from "bcrypt";
import { redirect } from 'next/navigation'
import { generateToken } from "@/utils/Halper";
 
export async function POST(req) {
  try {
    await ConnectToDb();
    const body = await req.json();
    const {email , password} = body
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return new Response(JSON.stringify("user not found"), {
        status: 404,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify("password is not valid"), {
        status: 404,
      });
    }

    
    if(user.isAdmin){
        const token = await generateToken(user.email)
        console.log(token)
        return Response.json({massage:"you are admin"},{
            status: 200,
            headers: {
              'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3d;`,
            }
          });
    }else{
        return Response.json({massage:"you are not admin"}, {
            status: 201,
          });
    }
  } catch (error) {
    return Response.json({massage:"server error"+error}, {
      status: 500,
    });
  }
}