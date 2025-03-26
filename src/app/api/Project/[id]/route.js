import ConnectToDb from "@/utils/ConnectToDb";
import ProjectModel from "@/models/Projects";

export async function DELETE(req,{params}){
    console.log(params)
    ConnectToDb()
    const {id} = params;
    console.log(id)
     const findAndDelete = await ProjectModel.findByIdAndDelete(id)
    return Response.json({message:"deleted"},{status:201})
}

