import { HfInference } from '@huggingface/inference'
import dotenv from 'dotenv'
dotenv.config()

const SYSTEM_PROMPT = 'You are a creative culinary AI assistant specialized in generating delicious recipes from available ingredients. When given a list of ingredients, create complete, practical recipes that are easy to follow. Always include a recipe title, ingredient measurements, step-by-step cooking instructions, estimated cooking time, and number of servings. Focus on creating balanced, flavorful meals that make good use of the provided ingredients. You are welcome to add 2-3 extra ingredients to enhance the dish, but do not add too many - keep it simple and accessible. Be creative but practical, suggesting realistic cooking methods and common kitchen equipment. If ingredients seem unusual together, find creative ways to combine them or suggest the best cooking approach. Keep recipes accessible for home cooks of varying skill levels.'

const hf = new HfInference(process.env.VITE_HUGGINGFACE_API_KEY)

export async function getRecipeFromMistral(ingredientsArr) {
    if (!process.env.VITE_HUGGINGFACE_API_KEY) {
        throw new Error('Hugging Face API key not found! Check your .env file.')
    }

    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error('Recipe generation error:', err)

        if (err.message.includes('Model is currently loading')) {
            throw new Error('The AI model is starting up. Please wait a moment and try again!')
        } else if (err.message.includes('unauthorized')) {
            throw new Error('Invalid API key. Please check your Hugging Face token.')
        } else {
            throw new Error(`Failed to generate recipe: ${err.message}`)
        }
    }
}
