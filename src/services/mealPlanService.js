import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY
});

export async function generateMealPlan(location, dietaryPreferences) {
  try {
    const prompt = `You are a meal planning assistant. Generate a weekly meal plan for someone living in ${location}${dietaryPreferences ? ` with the following dietary preferences: ${dietaryPreferences}` : ''}.

You MUST follow these rules:
1. Return ONLY a valid JSON object
2. Do not include any additional text, explanation, or markdown
3. Ensure all string values are properly escaped
4. The response must exactly match this structure:
{
  "monday": { "breakfast": "meal", "lunch": "meal", "dinner": "meal", "snacks": "snack" },
  "tuesday": { "breakfast": "meal", "lunch": "meal", "dinner": "meal", "snacks": "snack" },
  "wednesday": { "breakfast": "meal", "lunch": "meal", "dinner": "meal", "snacks": "snack" },
  "thursday": { "breakfast": "meal", "lunch": "meal", "dinner": "meal", "snacks": "snack" },
  "friday": { "breakfast": "meal", "lunch": "meal", "dinner": "meal", "snacks": "snack" },
  "saturday": { "breakfast": "meal", "lunch": "meal", "dinner": "meal", "snacks": "snack" },
  "sunday": { "breakfast": "meal", "lunch": "meal", "dinner": "meal", "snacks": "snack" }
}

Ensure meals are appropriate for the location and dietary preferences. Use local cuisine and seasonal ingredients where possible.`;

    const response = await cohere.generate({
      prompt,
      model: 'command',
      maxTokens: 1000,
      temperature: 0.7,
      returnLikelihoods: 'NONE',
      numGenerations: 1
    });

    let text = response.generations[0].text;
    
    // Clean up the response to ensure valid JSON
    text = text.trim()
      // Remove any markdown code block markers
      .replace(/^```(json)?\n|```$/g, '')
      // Remove any leading/trailing whitespace or line breaks
      .replace(/^\s+|\s+$/g, '')
      // Remove any comments
      .replace(/\/\/.+$/gm, '');
    
    try {
      const mealPlan = JSON.parse(text);
      
      // Validate the meal plan structure
      const requiredDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      const requiredMeals = ['breakfast', 'lunch', 'dinner', 'snacks'];
      
      for (const day of requiredDays) {
        if (!mealPlan[day]) {
          throw new Error(`Missing day: ${day}`);
        }
        for (const meal of requiredMeals) {
          if (!mealPlan[day][meal]) {
            throw new Error(`Missing ${meal} for ${day}`);
          }
        }
      }
      
      return mealPlan;
    } catch (parseError) {
      console.error('Error parsing meal plan:', parseError);
      throw new Error('The generated meal plan was not in the correct format. Please try again.');
    }
  } catch (error) {
    console.error('Error generating meal plan:', error);
    throw new Error('Failed to generate meal plan. Please try again.');
  }
}