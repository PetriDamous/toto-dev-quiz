const test1 = {
  questions: [
    {
      question: {
        number: 1,
        headerTxt:
          " What React attribute allows you to specify which form element a label is bound to?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `htmlFor`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `labelTarget`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `inputTarget`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `target`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 2,
        headerTxt: "Why can't you use React hooks within loops and conditions?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Because React uses the caller to identify what component a hook belongs to and loops and conditions might change that caller value`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Because React uses the order of defined hooks to preserve their state`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Because it encourages bad practices that end up in infinite loops`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Because loops and conditions might have a different closure than the main function component's closure`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 3,
        headerTxt: "What's the valid syntax to make a function component that acts as a "\pure\" class component?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `React.Pure(function MyComponent() { ... });`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `React.memo(function MyComponent() { ... });`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `React.useMemo(function MyComponent() { ... });`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `React.useCallback(function MyComponent() { ... });`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 4,
        headerTxt: "Which statement is true about the output of a React component?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `The output of a React component cannot include other React elements.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `The output of a React component is a JSX string.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `The output of a React component cannot be null.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `The output of a React component can be an integer`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 5,
        headerTxt: "A function component List receives a prop named onClick which should be a function reference. The following code uses the List component (in its parent render logic):",
        codeBlock: `
        const increment = () => setCount((count) => count + 1);
        <List onClick={increment} />`,
        footerTxt: "List is frequently re-rendered unnecessarily. You wrapped it in React.memo but that did not change anything. What can you do to the increment function to memoize it effectively?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `
          const increment = React.useMemo(
            () => setCount((count) => count + 1),
            []
          );`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `const increment = () => () => setCount((count) => count + 1);`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `
          const increment = React.memo(
            () => setCount((count) => count + 1)
          )`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `
          const increment = React.useCallback(
            () => setCount((count) => count + 1),
            []
          );`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 6,
        headerTxt: "You must create unique IDs across a client and server using the latest React 18 features. How would you do this without having any hydration conflicts?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Use the built-in syncID higher-order component`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Use the useId hook.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Use the useDeferredValue hook.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Use the built-in serverClientID higher-order component.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 7,
        headerTxt: "You must write tests for a React web application that runs on a staging server. You cannot run that React app locally on the machine that will run the tests however. What are some tools you can use to do that?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `React Test Utilities/React Test Renderer`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Enzyme/React Testing Library`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `ReactDOM/ReactDOMServer`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Puppeteer/Selenium/Cypress`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 8,
        headerTxt: "You have the following JavaScript string:",
        codeBlock: `const htmlText = "<h2>Hello</h2>";`,
        footerTxt: "How do you make a React component to render the text as built-in HTML elements?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `
          You must pass the attribute richText to the parent:

          <div richtext>{htmlText}</div>
          `,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `
          You can use the variable directly anywhere in React and React will handle its conversion automatically:

          <div>{htmlText}</div>
          `,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `
          You can include a dangerouslySetInnerHTML attribute on any React element to signal to React the unsafe conversion you need:

          <div dangerouslySetInnerHTML={{__html: htmlText}} />
          `,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `
          You pass the HTML string to an element through the special HTML attribute in React:

          <div html={htmlText} />
          `,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 9,
        headerTxt: "You create a function component that increments a counter whenever the user clicks on the button as follows:",
        codeBlock: `
        function buttonCounter()
        {
          const [count, setCount] = useState(0);
          return (
            <div>
              <h4> {count} </h4>
              <button onClick={() => setCount(count+1)}> Increment </button>
            </div>
          );
        }
        `,
        footerTxt: "How would you create a higher-order component (HOC) to change the background color of the buttonCounter component to red?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `
          function myHOC() {
            return <h2 style={{backgroundColor:'red'}}> <myComp /> </h2>
          }
          
          // Inside the function App:
          <myHOC myComp = { buttonCounter } />`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `
          function myHOC(props) {
            return <h2 style={{backgroundColor:'red'}}> <props.buttonCounter /> </h2>
          }
          
          // Inside the function App:
          <myHOC { props.buttonCounter } />`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `
          function myHOC(props) {
            return <h2 style={{backgroundColor:'red'}}> <props.myComp /> </h2>
          }
          
          // Inside the function App:
          <myHOC myComp = { buttonCounter } />`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `
          function myHOC() {
            return <h2 style={{backgroundColor:'red'}}> <buttonCounter /> </h2>
          }
          
          // Inside the function App:
          <myHOC buttonCounter() />`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 10,
        headerTxt: "You place subscriptions and timers inside a function component's main body, which introduces inconsistencies in your project. Which hook can remove the inconsistencies and make the code imperative?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `useMemo`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `useState`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `useContext`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `useEffect`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 11,
        headerTxt: "You create a script to display the text Loading followed by a variable number of underscores. In the following script, the underscores are supposed to repeat six times. Why does the script fail to compile?",
        codeBlock: `
        import React from 'react';

        function App() {
         return (
           <div>
             <ParentComponent reps={6}>
               <SubComponent
                 text="Loading"
                 ASCIIChar='_'
                 />
             </ParentComponent>
           </div>
        )
        }
        
        const SubComponent = ({ text, ASCIIChar, ...props }) => {
         return (
           <span {...props}>
            {text}{ASCIIChar}
           </span>
        )
        };
        
        const ParentComponent = ({ reps, children }) => {
         return ASCIIChar: children.props.ASCIIChar.repeat(reps)
        };
        
        export default App;
        `,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Because reps must use a spread syntax ...reps in the ParentComponent`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Because the SubComponent's return is enclosed within a span ta`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Because reps is initialized to {6} instead of 6 in the App function`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Because the ParentComponent's return is not enclosed within React.cloneElement`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 12,
        headerTxt: "In React.cloneElement() API, which props remain untouched if no new props are available in config?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `ref and name`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `key and id`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `key and ref`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `id and name`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 13,
        headerTxt: "What is wrong with the key attribute in the ListItem component?",
        codeBlock: `
        1. function ListItem(props) {
        2.   return <li key={props.value.toString()}>{props.value}</li>;
        3. }
            
        4. function NumberedList(props) {
        5.   const listItems = props.numbers.map( number => {
        6.     return <ListItem value={number} />
        7.   });
        8.   return (<ol>{listItems}</ol>);
        9. }
        `,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `The key value does not belong to the listItems in line 8.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `The key value causes a syntax error because props.value is a reserved property.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `The key value is insufficient. You should add a key to the closing list item as well.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `The key value does not belong to the ListItem; call it in line 6`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 14,
        headerTxt: "A statement uses a synthetic event:",
        codeBlock: `<button onClick={(e) => this.createCaption(id, e)}> Create a caption </button>`,
        moreTxt:"You must replicate this behavior without using the synthetic event explicitly. To do so, you run:",
        codeBloack `<button onClick={(flag) => this.createCaption(id, flag)}> Create a caption </button>`,
        footerTxt: "The above command produces no error but still uses an event explicitly. How can you write a command that does not produce an error and does not use an event explicitly?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `<button onClick={this.createCaption.bind(this, id)}> Create a caption </button>`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `<button onClick={this.createCaption.concat(this, id)}> Create a caption </button>`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `<button onClick={{e} => this.createCaption.concat(e, this, id)}> Create a caption </button>`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `<button onClick={{e} => this.createCaption.bind(e, this, id)}> Create a caption </button>`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 15,
        headerTxt: "Making a React class component extend React.PureComponent would likely improve the performance of a component that has expensive operations in which lifecycle method?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `getDerivedStateFromProps`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `constructor`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `render`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `componentDidMount`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 16,
        headerTxt: "Which App function results in the output 8?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `
          function App() {
            const num = <h1>{2+6}</h1>;
          
            return (
              <div> {num} </div>
            );
          }
          `,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `
          function App() {
            const num = <div>2+6</div>;
          
            return (
              <div> {num} </div>
            );
          }
          `,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `
          function App() {
            const num = {2+6};
          
            return (
              <div> num </div>
            );
          }
          `,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `
          function App() {
            const num = {2+6};
          
            return (
              <div> {num} </div>
            );
          }
          `,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 17,
        headerTxt: "A common rule for naming React components is to start the name with a capital letter. Which part of a React application setup will treat the name differently based on the case of its first letter?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `The JSX parser`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `The ReactDOM.render function`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `The React.createElement function`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `The ReactDOMServer.renderToString function`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },    
    {
      question: {
        number: 18,
        headerTxt: "Given this component definition:",
        codeBlock: `
        const App = () => {

            const m = // TODO: set font-size to 100px;
          
            return <div style={m()}>Hello</div>
          };
        `,
        footerTxt: "Which code snippet will make the font-size of the text in the div equal to 100px?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `const m = () => { fontSize: 100 };`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `const m = () => { font-size: 100 };`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `const m = () => ({ fontSize: 100 });`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `const m = { fontSize: 100 };`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "C",
    },
    {
        question: {
          number: 19,
          headerTxt: "In a controlled component, what value is assigned to the value attribute to keep a form editable?",
          codeBlock: ``,
          footerTxt: "",
        },
        answers: [
          {
            letter: "A",
            answersTxt: `Blank`,
            isCodeBlock: false,
          },
          {
            letter: "B",
            answersTxt: `NA`,
            isCodeBlock: false,
          },
          {
            letter: "C",
            answersTxt: `0`,
            isCodeBlock: false,
          },
          {
            letter: "D",
            answersTxt: `undefined`,
            isCodeBlock: false,
          },
        ],
        correctAnswer: "D",
    },
    {
      question: {
        number: 20,
        headerTxt: 'React\'s testing utility libraries such as "react-dom/test-utils" and "react-test-renderer" provide a function to prepare a component for assertions and make your test\'s code behave similarly to how React works in the browser.Examples of usages for "that function":',
        codeBlock: `
        thatFunction(() => {
            ReactDOM.render(<Counter />, container);
          });

          thatFunction(() => {
            button.dispatchEvent(new MouseEvent('click'));
          });
        `,    
        footerTxt: "What is the name of that function?",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `simulate`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `mock`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `act`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `render`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
  ],
};
