import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: process.env.EXPO_PUBLIC_OPENROUTER_BASE_URL,
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,

})

const aiModel = async() => {
const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324:free",
    messages: [
      { role: "user", content: "Say this is a test" }
    ],
  })
  console.log("AIModel response from ai.ts :",completion.choices[0].message)
  return completion.choices[0].message
}
