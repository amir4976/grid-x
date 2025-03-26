import ConnectToDb from "@/utils/ConnectToDb";
import { cookies } from "next/headers";
export function GET(req){
    try{
        const cookieStore = cookies()
        const token = cookieStore.get("token")
        if(!token){
            return Response.json({massage:"you are not login"}, {
                status: 404,
              });
        }
        return Response.json({massage:"you are login"}, {
            status: 200,
          });
    }catch(e){
        return Response.json({massage:"server error"+e}, {
            status: 500,
          });
    }
}