import ConnectToDb from "@/utils/ConnectToDb";
import { cookies } from "next/headers";
export async function POST() {
     ConnectToDb();
     cookies().delete('token')    
     return Response.json({"massage":"logout"},{status:200})
}
