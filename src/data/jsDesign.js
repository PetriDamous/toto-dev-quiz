const test1 = {
  questions: [
    {
      question: {
        number: 1,
        headerTxt:
          "What static Object function is used to create an object using another object's prototype? ",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Object.setPrototypeOf`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `Object.create`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `Object.new`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `Object.assign`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 2,
        headerTxt: 'What is the best way to prevent "callback hell"?',
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Keep callbacks to a single event`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Nest your functions appropriately`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Keep code shallow, modular, and handle every error`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Keep functions anonymous to prevent confusion`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 3,
        headerTxt:
          "A pattern that enables objects to subscribe to events through a third party broker is called?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Command`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Observer`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Pub - Sub `,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Listener`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 4,
        headerTxt:
          "How would you define the public object (incomplete in the code below) that is a good use of a proxy object, for a third-party object with a getValue function that takes a long time to return a value? ",
        codeBlock: `var myCheaperObject = (
            function() { 
              var cache = [];  
              var expensiveObject = expensiveThirdPartyObject;  
              var public = { 
                 <COMPLETE THIS CODE SNIPPET> 
              };
              return public;
            }
          )();`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `var public = {
            getValue: function(idx) {
              return cheaperWayToGetValue(idx);
            }
          };`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `var public = {    
            getValue: function(idx) { 
              var rv = cache.find(itm => itm.idx === idx);      
              if (rv) { return rv; } 
              else { 
                rv = expensiveObject.getValue(idx);
                cache.push(rv);
                return rv;
              }
            }
          };`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `var public = { 
            getValue: function(idx) { 
              var rv = cache.find(itm => itm.idx === idx);
              if (rv) { return rv; } 
              else { 
                rv = expensiveObject.getValue(idx);
                return rv; 
              }
            }
          };`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `var public = {
            getValue: function(idx) {
              return expensiveObject.getValue(idx);
              }
            }
          };`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 5,
        headerTxt: "What is a benefit of the Pub/Sub pattern?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Helps you encapsulate your service logic in a single class `,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Simplifies object creation `,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Simplifies code for long polling `,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Decouples communication between objects`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 6,
        headerTxt: "How do you create an instance of a Class in JavaScript?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Use the new keyword `,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Use instanceof`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Use Object.create`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Use the New keyword `,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 7,
        headerTxt: "What is the primary purpose of the command pattern?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Facilitating HTTP calls`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Executing commands`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Coupling systems`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Encapsulating actions as objects.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 8,
        headerTxt:
          "A function that is passed into a method call with the intent of it being executed when the method is completed is called what?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `A function `,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `A Promise`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `A resolver `,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `A callback`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 9,
        headerTxt:
          "Which of the following is a good option for storing data pertinent only to the user's current visit to your website?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `cookies`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `siteStorage`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `localStorage`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `sessionStorage`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 10,
        headerTxt:
          "What are all the types that can be exported from a built-in JavaScript module?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `functions, objects, classes, & variables`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `functions & classes `,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `functions, objects, & classes `,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `functions & variables `,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 11,
        headerTxt: "Given the following, what is printed to the console?",
        codeBlock: `class Course {
            constructor (title) {
              this.title = title;
            }
          }
          var c = new Course('Design Patterns');
          console.log(c.language);
          Course.prototype.language = "JavaScript";
          console.log(c.language);`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Ref error `,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `
          undefined
          undefined
          `,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `
          JavaScript
          JavaScript
          `,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `
          undefined
          JavaScript 
          `,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 12,
        headerTxt:
          "How would you implement the Singleton pattern for CourseRepo?",
        codeBlock: `var Repos = (function () {
            // Your code here... 
          })();
          var repo1 = Repos.getCourseRepo();
          var repo2 = Repos.getCourseRepo();
          class CourseRepo {
            constructor () { }
            getCourse(id) {
              return "Course " + id;
            }
          }`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `return CourseRepo;`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `return CourseRepo();`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `return {
            getCourseRepo: function () {
              var courseRepo = new CourseRepo();
              return courseRepo;
            }
          };`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `function createInstance() {
            var courseRepo = new CourseRepo();
            return courseRepo;
          }
          return {
            getCourseRepo: function () {
              if (!courseRepo) {
                courseRepo = createInstance();
              }
              return courseRepo;
            }
          };`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 13,
        headerTxt:
          "What keywords are used to import and export built-in JavaScript modules?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `using, public `,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `use, returns`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `require, exports `,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `import, export `,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 14,
        headerTxt: "Which function is used to remove an item from indexedDb? ",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `clear`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `purge`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `remove`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `delete`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 15,
        headerTxt:
          "How would you handle this Promise rejection using async/await?",
        codeBlock: `function waiting (){
            return new Promise(function(resolve, reject){
              setTimeout(reject('value'), 0);
            })
          }
          (async function(){
            let value = await waiting(); 
            console.log(value);
          }())`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `try{
            let value = await waiting(); 
            console.log(value);
          }
            reject(error) {
            console.log('error ' + error );
          }`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `try{
            let value = await waiting(); 
            console.log(value);
          }
            catch(error) {
            console.log('error ' + error );
          }`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `let value = await waiting()
          .reject( console.log('error ' + error )); 
        console.log(value);`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `let value = await waiting(); 
          if(!value){
            console.log(error);
          }
          console.log(value);`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 16,
        headerTxt: "What method is used to change the prototype of an object?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Object.setPrototypeOf`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Object.changePrototype`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Object.setProto`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Object.exten`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 17,
        headerTxt:
          "Given the following class, how would you create a getter for the author property?",
        codeBlock: `class Course {  
            constructor (title, author) { 
              this.title = title;
              this.author = author;  
            }
          }`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `class Course {  
            constructor (title) {    
              this.title = title;  
            }  
            this.author = {    
              return this.author.firstName + ' ' + this.author.lastName  
            }
          }`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `class Course {  
            constructor (title) {    
              this.title = title;  
            }  
            get author() {    
              return this.author.firstName + ' ' + this.author.lastName  
            }
          }`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `class Course {  
            constructor (title) {    
              this.title = title;  
            }  
            author = { 
              return this.author.firstName + ' ' + this.author.lastName  
            }
          }`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `class Course {  
            constructor (title) {    
              this.title = title;  
            }  
            author() {    
              return this.author.firstName + ' ' + this.author.lastName  
            }
          }`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 18,
        headerTxt: "How would you create a child class of this Course class?",
        codeBlock: `class Course {
            constructor (title) {
                this.title = title;
            }
        }`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `class PlayByPlay extends Course {
            constructor(title){
                this.title = title;
            }
        }`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `class PlayByPlay extends Course {
            constructor(title){
                super(title);
            }
        }`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `class PlayByPlay inherits Course {
            constructor(title){
                this.title = title;
            }
        }`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `class PlayByPlay inherits Course {
            constructor(title){
                super(title);
            }
        }`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 19,
        headerTxt:
          "Which of the following is used to subscribe to element events in the DOM?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `subscribe`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `createEventListener`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `addEventListener`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `attachEvent`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 20,
        headerTxt:
          "A user visits your site and a value is set in the sessionStorage of their browser specifying a discount percentage based on the site that referred them to you. If they are not using a secure transport Secure Sockets Layer (SSL) they are then redirected to the SSL URL for your webstore. Later in that same session, they are ready to check out, but the discount percentage in sessionStorage is blank. What is most likely the cause of this?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `sessionStorage is not supported on SSL sites. You must use localStorage.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `You should store the discount information in a cookie.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `sessionStorage is per-Origin and an SSL URL is a different origin from a non-SSL URL because of the port change.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `You forgot to include the copySession cookie so that the session information is transferred.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
  ],
};
