import OpenAI from "openai"
import key from "~/key"

const openai = new OpenAI({
  baseURL: process.env.EXPO_PUBLIC_OPENROUTER_BASE_URL,
  // don't publish it 
  apiKey: key.OPENROUTER_API_KEY,
  // apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
  
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
  // console.log("AIModel response from ai.ts :",completion.choices[0].message)
  return completion.choices[0].message.content      
    } catch (error) {
  console.log("AIModel error from ai.ts :",error);
        
    }

}

export const generateCourseAi = async(prompt:string) => {
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
  // console.log("AIModel response from ai.ts :",completion.choices[0].message)
  return completion.choices[0].message.content      
    } catch (error) {
  console.log("AIModel error from ai.ts :",error);
        
    }

}
