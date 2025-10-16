import express from 'express'
import cors from 'cors'
import { getRecipeFromMistral } from './aiBackend.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/recipe', async (req, res) => {
    const { ingredients } = req.body
    if (!ingredients || !Array.isArray(ingredients)) {
        return res.status(400).json({ error: 'Ingredients must be an array' })
    }

    try {
        const recipe = await getRecipeFromMistral(ingredients)
        res.json({ recipe })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen(process.env.PORT || 5000, () =>
    console.log(`✅ Server running on port ${process.env.PORT || 5000}`)
)
