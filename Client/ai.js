export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/recipe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients: ingredientsArr }),
        })

        // Handle network-level errors
        if (!res.ok) {
            throw new Error('Server error: ' + res.statusText)
        }

        const data = await res.json()
        if (!data.recipe) {
            throw new Error(data.error || 'No recipe returned')
        }

        return data.recipe
    } catch (err) {
        console.error('Frontend fetch error:', err)

        // Graceful fallback response for UI
        return `
        ⚠️ Sorry for the inconvenience!  
        It seems our recipe chef is taking a quick nap.  
        Please try again in a few minutes 🙏
        `
    }
}
