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

export default {
  IDEA: dedent`:As your are coaching teacher 
    - User want to learn about the topic
    - Generate 5-7 Course title for study (Short)
    - Make sure it is releated to description
    - Output will be ARRAY of String in JSON FORMAT only
    - Do not add any plain text in output,
    `,
  // - Chapter Explain in HTML Form, (Code example if required), add line break if required
  COURSE: dedent`: As you are coaching teacher
    - User want to learn about all topics
    - Create 2 Courses With Course Name, Description, and 5/8 Chapters in each course
    - Make sure to add chapters 
    - List Content in each chapter along with Description in 5 to 8 lines
    - Do not Just Explain what chapter about, Explain in Detail with Example
    - Also Make Easy, Moderate and Advance Course depends on topics
    - Add CourseBanner Image from ('/banner1.png','/banner2.png','/banner3.png','/banner4.png','/banner5.png','/banner6.png'), select It randomly
    - Explain the chapter content as detailed tutorial with list of content
    - Generate 10 Quizz, 10 Flashcard and 10 Questions answer
    - Tag each course to one of the categorty from :["Tech & Coding","Business & Finance","Health & Fitness","Science & Engineering","Arts & Creativity"]
    - Output in JSON Format only 
    -  "courses": [
  {
    "courseTitle": '<Intro to Python>',
    "description": '',
    "banner_image": "/banner1.png",
    "category":"",
    "chapters": [
      {
        chapterName: '',
        content: [
          {
            topic: '<Topic Name in 2 to 4 worlds ex.(Creating Variables)>'
            explain: '< Detailed Explaination in 5 to 8 Lines if required>',
            code: '<Code example of required else null',
            example: '< example of required else null'
          },
          
            ...
          
        ]
      }
    ],
    quiz:[
      {
        question:'',
        options:['a',b,c,d],
        correctAns:''
      }
    ],
    flashcards:[
      {
        front:'',
        back:''
      }
    ],
    qa:[
      {
        question:'',
        answer:''
      }
    ]
  }
]
    `
}



