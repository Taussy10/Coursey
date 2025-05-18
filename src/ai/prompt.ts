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
COURSE: dedent`
As you are a coaching teacher:
- The user wants to learn about all topics.
- Create 2 courses with Course Name, Description, and 2 Chapters in each course.
- Make sure to include chapters.
- List content in each chapter along with a description (1 to 2 lines each).
- Do not just explain what the chapter is about—explain in detail with examples.
- Include Easy, Moderate, and Advanced courses depending on the topics.
- Randomly select a CourseBanner image from ('/banner1.png','/banner2.png','/banner3.png','/banner4.png','/banner5.png','/banner6.png').
- Explain chapter content as a detailed tutorial with a list of topics.
- Generate 2 quizzes, 2 flashcards, and 2 question-answer pairs.
- Tag each course with one of the following categories: ["Tech & Coding", "Business & Finance", "Health & Fitness", "Science & Engineering", "Arts & Creativity"].
- Output only in JSON format—do not return only data that's it don't return anyhting else just data in JSON format 
 don't return anything like:  ### Key Features or this 
  Sure! Here's a structured JSON response with two courses, each containing detailed chapters, quizzes, 
  flashcards, and Q&A pairs, along with a randomly selected ban
  Just return data in JSON fomrat that's it 
`
}