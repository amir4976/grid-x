import ConnectToDb from "@/utils/ConnectToDb";
import Massages from "@/models/Massages";
export async function GET() {
    try {
        await ConnectToDb()
        const AllMassages = await Massages.find({}).lean()
        return new Response(JSON.stringify(AllMassages), {
            status: 200
        })
    } catch (error) {
        return new Response(JSON.stringify({
            message: "خطا در دریافت پیام ها",
            error: error.message
        }), {
            status: 500
        })
    }
}
export async function POST (req){
    try {
        ConnectToDb()
        const body = await req.json()
        const {name, email, title, massage} = body
        if(!name.trim()||!email.trim || !title.trim || !massage.trim){
            return new Response(JSON.stringify({
                message: "لطفا همه فیلد ها را پر کنید"
            }), {
                status: 400
            })
        }
        
        const newMassage = {
            name,
            email,
            title,
            massage
        }
     
        const CreateMassage = await Massages.create(newMassage)
        return new Response(JSON.stringify({
            message: "پیام شما با موفقیت ارسال شد"
        }), {
            status: 201
        })

    } catch (error) {
        return new Response(JSON.stringify({
                message: error.message
            }), {
                status: 500
            })
    }
}