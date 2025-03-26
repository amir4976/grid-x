import ConnectToDb from "@/utils/ConnectToDb";
import MassageModle from "@/models/Massages";
export async function DELETE (req,{params}){
    ConnectToDb()
    const {id} = params;
    console.log(id)
    const findMassage = await MassageModle.findOneAndDelete({_id:id})
    return Response.json({massage:"Deleted succesfully"} , {status:200})
}