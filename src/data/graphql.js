// Note: there are questions such as number 10 in test 1
// that do not follow the question format. Consider
// using an array of values instead of fixed values
// for the question.

const test1 = {
  questions: [
    {
      question: {
        number: 1,
        headerTxt:
          "You are working on a real estate application and the GraphQL schema is defined below:",
        codeBlock: `
        type Realtor {
          id: ID!
          houses: [SoldHouse!]!
        }
        
        type SoldHouse {
          id: ID!
        }`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Add a new relation type definition that ties the Realtor and SoldHouse objects into a relationship and add it in the schema.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Return the realtorId inside of the Realtor.houses resolver query function.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Add a realtorId field in the SoldHouse type to create a one-to-many relation.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `In the Realtor.houses resolver, use the parent argument to filter the houses by the realtor's ID.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 2,
        headerTxt:
          "In which scenario would you define a new GraphQL schema object using input instead of type?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `When you want the object to be insertable if there is no conflict.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `When you want the object to be passable as an argument.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `When you want the object to be filterable by queries.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `When you want the object to be immutable.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 3,
        headerTxt:
          "In GraphQL, what term refers to a structure of fields that can be implemented by object types?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Interfaces`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Union types`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Arguments`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Input types`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 4,
        headerTxt:
          "You are testing a component that uses a mutation. Which approach can be used with MockedProvider to mock the mutation's result?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Copy the logic of the component you want to test into your test method and assert the result of useMutation.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Implement an Apollo link that globally counts how many operations that GraphQL client performed.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Implement the mocked mutation result as a function which sets a test-scoped mutationCalled variable to true.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Update the component you want to test and expose the mutation response as a prop.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 5,
        headerTxt:
          "How could you explore the type system used in any given GraphQL server?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Send an OPTIONS request to the root of the server.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Send a GET request to its /__types endpoint.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Use the introspection query, __schema.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `View the /.well-known/schema.graphql file in your browser.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 6,
        headerTxt:
          "What statement is true about subscription type definitions?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Subscriptions are nested in the Mutation type.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Subscriptions are defined using the @subscription directive.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Subscriptions are nested in the Query type.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Subscriptions are another root level type similar to queries and mutation`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 7,
        headerTxt:
          "What represents the correct usage of a fragment named characterInfo?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `query {
            superheroes {
              &characterInfo
              enemies {
                &characterInfo
              }
            }
          }`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `query {
            superheroes {
              ...characterInfo
              enemies {
                 ...characterInfo
              }
            }
          }
          `,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `query {
            superheroes {
              characterInfo @fragment
              enemies {
                characterInfo @fragment
              }
            }
          }`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `query {
            superheroes {
              ...characterInfo on Character
              enemies {
                 ...characterInfo on Character
              }
            }
          }`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 8,
        headerTxt:
          "You need to use the Query type to help define available queries that someone may use. How can you create two queries that each return an array of “Artist” and “Song” objects respectively? ",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `type Query { 
            artists: [Artist]
            songs: [Song] 
        }`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `type Query {
            artists: Array<Artist> 
            songs: Array<Song>
        }`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `Query Type {  
            artists: (Artist)
            songs: (Song)
        }`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `type Query {  
            artists: Artist[]
            songs: Song[]
        }`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 9,
        headerTxt:
          "You are setting up tests for your React components. You decide to use the @apollo/client/testing package. Which helper can you use to mock responses from your GraphQL endpoint?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `MockedProvider`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `MockApolloLink`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `ApolloProvider`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `createTestClient`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 10,
        headerTxt:
          "In the following query, the GraphQL server is returning an error with the message:",
        codeBlock: `Maximum query depth exceeded`,
        footerTxt: "What is the most likely cause of the problem?",
        codeBlock: `query {
          messages(first: 9999) {
            ...messageInfo
            threads(first: 9999) {
               ...messageInfo
               threads {
                 ...messageInfo
               }
            }
          }
          authors {
            name
          }
        }
        
        fragment messageInfo on Message {
          id
          body
          title
        }`,
      },
      answers: [
        {
          letter: "A",
          answersTxt: `The first argument values are too large.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `There are too many queries in the operation.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `The threads field is being nested too much.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `There have been too many requests to the server.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 11,
        headerTxt: "When would a resolver function return an array?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `The schema definition includes a built in array of data objects.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `The schema definition states the the field should be a list.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `The resolver map is nested.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `The resolver functions are at the top level.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 12,
        headerTxt:
          "In what scenario would you need to use a custom scalar type?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `You need to create a field to be a ID type.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `You need to create a field to be a float type.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `You need to create a field to be a date type.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `You need to create a field to be a string type.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 13,
        headerTxt:
          "What type of query is sent to the GraphQL server when using the Apollo Client CLI command apollo client:download-schema?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Introspection`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Object`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Metadata`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Annotation`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 14,
        headerTxt:
          "You created a development GraphQL JavaScript file that contains multiple schema definitions and associated resolver functions, but it is getting to be very long and hard to maintain. What approach should you take to make it more manageable?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Create a new resolver module file to hold the resolver functions and import that file.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Move all schema definitions to one module file and resolver functions to another file.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Move each schema definition to its own module file and co-locate its associated resolver functions in the file.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Create a separate GraphQL server for each schema and its resolvers.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "C",
    },
    {
      question: {
        number: 15,
        headerTxt:
          "Which field definition of members would prevent the following values from being returned in a GraphQL response?",
        codeBlock: `{
          "members": null
        }`,
        footerTxt: "or",
        codeBlock: `{
          "members: [
            null
          ]
        }`,
      },
      answers: [
        {
          letter: "A",
          answersTxt: `members: [TeamMember!]`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `members: TeamMember![]!`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `members!: [TeamMember!]`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `members: [TeamMember!]!`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 16,
        headerTxt:
          "If your company wants to build a chat application that needs to publish real time updates to millions of users, then what statement is true?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `The community has not created any PubSub implementations you can leverage to scale your subscriptions.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `You should use an external PubSub implementation since it allows you to share publishes between running servers.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `You should not use an external PubSub implementation since it reduces the reliability of your system.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `You should use the the in-memory EventEmitter since it is scalable and fast.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "B",
    },
    {
      question: {
        number: 17,
        headerTxt:
          "What feature in GraphQL allows you to query what types are defined in the GraphQL schema?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Introspection`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Interfaces`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Inspection`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Validation`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 18,
        headerTxt:
          "You need to populate data for each field inside your schema. After defining your resolver map inside a rt/resolvers.js module, what should you do so the schema field data can be populated?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Import the rt/resolvers.js module and pass the resolver map to the Apollo Server constructor options.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Specify that Apollo Server should load resolvers asynchronously from the rt/resolvers.js file using the Node.js file module.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Rename the file and directory to resolvers/index.js so Apollo Server will automatically load the resolver map on startup.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Export the rt/resolvers.js module and load the resolver functions using the fetch API.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "A",
    },
    {
      question: {
        number: 19,
        headerTxt:
          "You are setting up an Apollo project for your team to use GraphQL. The GraphQL schema that needs to be used is located at a remote endpoint. What do you need to do to get the schema working?",
        codeBlock: ``,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `Ensure the APOLLO_REMOTE_SCHEMA environment variable is set to the endpoint.`,
          isCodeBlock: false,
        },
        {
          letter: "B",
          answersTxt: `Establish a proxy service that connects directly to the endpoint.`,
          isCodeBlock: false,
        },
        {
          letter: "C",
          answersTxt: `Create a hash key for the remote endpoint so you can use token authentication.`,
          isCodeBlock: false,
        },
        {
          letter: "D",
          answersTxt: `Add the remote endpoint inside the service key of the apollo.config.js file.`,
          isCodeBlock: false,
        },
      ],
      correctAnswer: "D",
    },
    {
      question: {
        number: 20,
        headerTxt:
          "You are testing queries using the Apollo Server createTestClient helper. Assuming all the dependencies are set up for this test, what snippet must be added to query for a single user using the test client?",
        codeBlock: `
        const { createTestClient } = require('apollo-server-testing');

        describe('integration tests', () => {
          it('users query should return single user', async () => {
            const userAPI = new UserAPI();
            const server = new ApolloServer({
              typeDefs,
              resolvers,
              dataSources: () => ({ userAPI })
            });
        
            userAPI.get = jest.fn().mockResolvedValue(mockUser);
        
            //
            // TODO use test client to execute the query
            //
        
            expect(res).toMatchSnapshot();
          });
        });`,
        footerTxt: "",
      },
      answers: [
        {
          letter: "A",
          answersTxt: `
          const { send } = createTestClient(server);

          const res = await send({ query: GET_USER, variables: { id: 1 });`,
          isCodeBlock: true,
        },
        {
          letter: "B",
          answersTxt: `
          const { query } = createTestClient(server);

          const res = query({ query: GET_USER, variables: { id: 1 });`,
          isCodeBlock: true,
        },
        {
          letter: "C",
          answersTxt: `
          const { query } = createTestClient(server);

          const res = await query({ query: GET_USER, variables: { id: 1 });`,
          isCodeBlock: true,
        },
        {
          letter: "D",
          answersTxt: `
          const { query } = createTestClient(server);

          const res = await query(GET_USER, { id: 1 });`,
          isCodeBlock: true,
        },
      ],
      correctAnswer: "C",
    },
  ],
};

const exportObj = {
  name: "Graphql",
  tests: [test1],
};

export default exportObj;
