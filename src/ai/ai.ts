import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: process.env.EXPO_PUBLIC_OPENROUTER_BASE_URL,
  // apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
  apiKey: `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 
`,

})

export const aiModel = async(prompt:string) => {
    try {
const completion = await openai.chat.completions.create({
  // response_format: ["json_schema"],
    model: "deepseek/deepseek-chat-v3-0324:free",
    //  ResponseFormatText | ResponseFormatJSONSchema
    //  | ResponseFormatJSONObject | undefined
    messages: [
      { role: "user", content: prompt }
    ],
  })
  console.log("AIModel response from ai.ts :",completion.choices[0].message)
  return completion.choices[0].message.content      
    } catch (error) {
  console.log("AIModel error from ai.ts :",error);
        
    }

}
