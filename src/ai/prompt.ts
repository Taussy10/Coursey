import dedent from "dedent";

// so we have here we have
//  two keys IDEA and COURSE
// Look if you want ot write multi line string 
// then you can't write using quotes why? cause 
// quotes doesn't support new line why?
// instead use backtic cause it support it 
// then why dedent ?
// cause it removes white spaces  

// let's learn about white spaces 
// there a lot of types will talk about two 
// 1. Normal: ( ) white space is created between round bracket
// 2. New line: whenever you enter a new line a 
// white space is created called n\(new line character) 
// which is white space 

// so we want to remove white spaces in 
// our prompt so that LLM can't confuse that's why using 
// dedent  
// btw dedent syntax:  dedent`write your text`
//   As your are coaching teacher 
    // - User want to learn about the topic
    // - Generate 5-7 Course title for study (Short)
    // - Make sure it is releated to description
    // - Output will be ARRAY of String in JSON FORMAT only
    // - Do not add any plain text in output,
    // PROMPT SHOULD BE LIKE THIS BELOW NOTHING JUST DATA THAT'S IT. 
    // lodu tujhe samjh nahi aata kya ? 
    // I don't need this: "Here is the response in the exact format you requested:"
    // I only once need this data 
export default {
  IDEA: dedent`: As a course expert:
- User wants to learn the topic.
- Generate 5-7 short, beginner-friendly course titles.
- Make sure they are related to the description.
- Respond with an ARRAY of STRINGS in valid JSON format.
- DO NOT include any other text, no explanations, no labels like "Input" or "Output".
- Just return the array, nothing else.
    [
    "Introduction to Python Programming",
    "Data Structures and Algorithms in Python",
    "Python for Data Science and Machine Learning",
    "Web Development with Python and Django",
    "Automation and Scripting with Python",
    "Object-Oriented Programming in Python",
    "Python for Cybersecurity and Ethical Hacking"
]
    `,
  // - Chapter Explain in HTML Form, (Code example if required), add line break if required
COURSE:`

FOLLOWING THESE STEPS ARE COMPUSORY ALSO READ THE COURES NAME:
1. GENERATE COURSE OF: Youtube 
2. Fill all required fields
4. Ensure that chapters should contain 2 objects 
3. Ensure chapter_content uses the exact object structure shown
4. Ensure that chapter_content should contain 2 objects 
4. If the course is related to coding then add codeExample and example key should be null 
 if the course is not related to coding then keep it null and add value in only example key   
5. Ensure that quizzes should contain 2 objects 
6. Ensure that flashcards should contain 2 objects 
7. Ensure that questionAnswerPairs should contain 2 object 
8. Only output the raw JSON object - no explanations, markdown, or extra text

Generate a structured course in JSON format with these exact specifications:
{
  "courseName": "<string>",
  "description": "<string>",
  "bannerImage": "<random from: /banner1.png,/banner2.png,/banner3.png>",
  "courseLevel": "<Easy|Moderate|Advanced>",
  "category": "<Tech & Coding|Business & Finance|Health & Fitness|Science & Engineering|Arts & Creativity>",
  "chapters": [
    {
      "chapterName": "<string>",
      "chapter_content": [
        {
          "topic": "<string>",
          "description": "<max 2 lines>",
          "example": "<Example>"
          "codeExample": "<code/instruction example>"
        }
      ]
    }
     ]
    }
  ],
  "quizzes": [
    {
      "question": "<string>",
      "options": ["<string>", "<string>", "<string>", "<string>"],
      "answer": "<string>"
    }
  ],
  "flashcards": [
    {
      "front": "<string>",
      "back": "<string>"
    }
  ],
  "questionAnswerPairs": [
    {
      "question": "<string>",
      "answer": "<string>"
    }
  ]
}

`
}