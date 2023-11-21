import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, response) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')
       

        return new Response(JSON.stringify(prompts), { status: 200, 
        headers:{'Cache-Control': 'max-age=0'} })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
