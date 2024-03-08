const test1 = {
  questions: [
    {
      question: {
        number: 1,
        headerTxt:
          'The following function never prints "bar" to the console, despite what is passed into the function. Why?',
        codeBlock: `function foo(x) {
            if (x = undefined) {
              console.log('foo');
            } else if (x == false) {
              console.log('bar');
            } else {
              console.log('baz');
            }
          }`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt:
            "The first condition expression handles everything that the second would.",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "The second condition expression overwrites x.",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: "The first condition expression overwrites x.",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: "x can never be false because it is a function argument.",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 2,
        headerTxt:
          "What is one benefit of using Symbol() for unique identifiers?",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "It is public and a third party can edit it.",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "Symbols always have the same values.",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt:
            "It is hidden and you can keep it private for internal use.",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt:
            "Symbols are enumerated and you can use them in for..of or for..in loops.",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 3,
        headerTxt: "What is the intent of the following code snippet?",
        codeBlock: `function Person(name) {   
          if (!(this instanceof Person)) {    
            return new Person(name);   
          }     
          this.name = name;
       }`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt:
            "To ensure that the function never returns undefined if the function is called with missing arguments",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "To inherit from the class Person defined elsewhere",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: "To protect all methods of the custom object as private",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt:
            "To ensure that instances of class Person are always constructed using the new keyword",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 4,
        headerTxt: "What is the correct format for creating a closure?",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `function square(n) { 
            function displayNumber() { 
               alert(n);
            }
            displayNumber();
          }
       
          square(2);`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `function square(n) { 
            alert(n);
           }
        
           square().toClosure();`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `function square(n) { 
            alert(n);
           }
        
           square(2);`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `function square(n) { 
            alert(n);
           }`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 5,
        headerTxt:
          "Which statement about using files with JavaScript is true? ",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt:
            "JavaScript cannot access a database file if there is any Ajax code in the file.",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt:
            "JavaScript cannot directly write to files on the client. ",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt:
            "JavaScript cannot send requests to the server if there is any Ajax code in the file.",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: "JavaScript can directly read from files on the client. ",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 6,
        headerTxt: "What does the following code snippet print to the console?",
        codeBlock: `let foo = () => {
          console.log("User1");
          return false;
      }
      
      let bar = () => {
          console.log("User2");
          return true;
      }
      
      let x = false || bar() || foo();`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "User2",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "undefined",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `User2
          User1`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `User1
          User2`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 7,
        headerTxt:
          "When comparing two strings with the less than or the greater than operator, what does the `console.log` output return?",
        codeBlock: `var a = 'a';
        var b = 'b';
        console.log(a < b);`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "true",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "false",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: "Error",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: "NaN",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 8,
        headerTxt:
          "The following code runs successfully, but the variable y returns as undefined. How can you change this code so that an error outputs to the console instead?",
        codeBlock: `x = 50;

        document.write("x is " + x + " and y is " + y);
        
        var y = 70;
        var x;`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: 'Include "use strict"; before the first line',
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "Remove the var y = 7; line of code.",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: "Declare the x variable with the let keyword. ",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: "Declare the y variable as const. ",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 9,
        headerTxt:
          "What is the difference between a property and a method on a class?",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt:
            "Properties and methods are indistinguishable in the ES6 class spec; properties can be methods and methods can be properties.",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt:
            "A property does not have access to the this object; a method creates a scope with access to the parent's this object and is more suited for calculated virtual properties.",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt:
            "A property is an association between a name and a value; a method is when a function is the value of a property.",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt:
            "A property is only declarable on objects, not classes; a method is declarable only on classes, not objects.",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 10,
        headerTxt:
          "How could you make the following instance into an object literal?",
        codeBlock:
          "const foo = function(name) {\nthis.name = name;\nthis.greet =(greeting) => `${greeting}, ${this.name}`;\n}",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt:
            'const foo = {\nname: "User1",\n_greet: (greeting) => `${greeting}, ${name}`,\n}',
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt:
            "const foo = {};\nfoo.greet = (greeting) => `${greeting}, ${name}`;",
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt:
            'const foo = {\nname: "User1",\ngreet: (greeting, name) => `${greeting}, ${name}`,\n}',
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt:
            'const foo = {"User1"};\nfoo.greet = (greeting) => `${greeting}, ${name}`;',
          isCodeBlock: true,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 11,
        headerTxt:
          "What prints to the console with the final line of the following code snippet?",
        codeBlock: `let foo = 5;
        function addTwo(foo) {  
          return foo + 2;
        }
        
        addTwo(foo);
        console.log(foo);`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "7",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "5",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: "12",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: "Reference Error",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 12,
        headerTxt:
          "Which code snippet correctly shows how to access an object foo's property bar using object destructuring?",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "foo['bar']",
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: "const { bar } = foo",
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: "foo.bar",
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: "const bar = () => foo.bar;",
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 13,
        headerTxt:
          "A variable-size, dynamic array, numbers, contains a series of integers. Using Math.max(), which code snippet finds the largest number in the array?",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "Math.max.call(Math, numbers);",
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `for(let i = 0; i < numbers.length; i++){
            Math.max(numbers[i]);
          }`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: "Math.max(...numbers);",
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: "Math.max(numbers);",
          isCodeBlock: true,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 14,
        headerTxt:
          "While writing a JavaScript application, you declare the following variable. You want to check the initial value to determine if it is truthy or falsy. How could you do this?",
        codeBlock: "let val = NaN;",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "Val(val);",
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: "!!val",
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: "typeof(val)",
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: "String(val);",
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 15,
        headerTxt:
          "An iterator never returns {done: true}. What is the result?",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "The iterator runs infinitely.",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "The iterator always returns the value false.",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt:
            "The iterator always yields the same value for all calls made to .next(). ",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt:
            "The iterator only runs for the initial step when .next() is called first",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 16,
        headerTxt: "What is the value of bar in the following code snippet?",
        codeBlock: `let foo = "Foo";
        let bar = [...foo];`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "SyntaxError",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "[ ]",
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: '["Foo"]',
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: '["F", "o", "o"]',
          isCodeBlock: true,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 17,
        headerTxt:
          "You create the following function which returns a promise: ",
        codeBlock: `function func1() {
          return Promise.resolve("Hello world!");
        }`,
        footerTxt:
          "How can you rewrite this method to accomplish the same thing and return a promise?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `function async func1() {
            return "Hello world";
          }`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `promise function func1() {
            return "Hello world";
          }`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `await function func1() {
            async return "Hello world";
          }`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `async function func1() {
            return "Hello world";
          }`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 18,
        headerTxt: "Consider the following object foo:",
        codeBlock: `const foo = {
          _a: 'Rocket',
          !_a: 'Fuel'
        };
        
        console.log(foo['!_a'])`,
        footerTxt:
          "When you try to access the value of !_a using the code foo['!_a'], you receive an unexpected token error. What changes can you make to retrieve its value, 'Fuel'?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "Remove quotes from !_a while calling the object.",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "Add !_a inside quotes in the object definition.",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt:
            "Replace ! with # in both the object definition and its call.",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt:
            "Replace ! with 9 in both the object definition and its call.",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 19,
        headerTxt: "Which snippet returns the following result?",
        codeBlock: `console.log(foo.show()); // ["hello world", "hello world"]`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `var foo = {
            title: 'world',
            show() {
               return ['', ''].map(function(a) { 
                   return 'hello ' + this.title
               });
            }
          };`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `var foo = {
            title: 'world',
            show() {
               return ['', ''].map(function(a) => 'hello ' + this.title);
            }
          };`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `var foo = {
            title: 'world',
            show() {
               return ['', ''].map(() => 'hello ' + this.title);
            }
          };`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `var foo = {
            title: 'world',
            show() {
               return ['', ''].map(function(a) { this.title });
            }
          };`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 20,
        headerTxt:
          "What keyword does a generator use to send a generated value to the caller?",
        codeBlock: "",
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: "return",
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: "yield",
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: "gen",
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: "send",
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
  ],
};

const exportObj = {
  name: "JavaScript",
  tests: [test1],
};

export default exportObj;
