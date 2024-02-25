import { SimpleGrid } from "@chakra-ui/react";
import { TestSelectCard } from ".";
import apolloLogoPath from "../logos/apollo-graphql-compact.svg";
import gitLogoPath from "../logos/git-icon.svg";
import javaScriptEsLogoPath from "../logos/logo-javascript.svg";
import javaScriptLogoPath from "../logos/javascript-1.svg";
import javaScriptPatternsLogoPath from "../logos/javascript-2.svg";
import reactLogoPath from "../logos/react-1.svg";

const TestSelectCardList = ({ onOpen }) => {
  const testSelectCardsProps = [
    {
      id: 1,
      image: apolloLogoPath,
      title: "Apollo Graphql",
      description:
        "Test your knowledge of Apollo GraphQL with this engaging quiz! Dive into the world of queries, mutations, and resolvers, and see how well you understand this powerful tool for building APIs. Whether you're a seasoned developer or just starting out with GraphQL, this quiz offers a fun and informative way to assess your skills and learn something new. Good luck!",
    },
    {
      id: 2,
      image: gitLogoPath,
      title: "Git",
      description:
        "Put your Git skills to the test with this comprehensive quiz! From basic commands to advanced branching strategies, this quiz covers a wide range of Git topics. Whether you’re a seasoned developer or just starting out with version control, this quiz offers a challenging and educational way to evaluate your understanding of Git. Get ready to commit, push, and pull your way to success. Good luck!",
    },
    {
      id: 3,
      image: javaScriptEsLogoPath,
      title: "JavaScript ES6",
      description:
        "Ready to test your JavaScript ES6 knowledge? This quiz covers everything from let and const, to arrow functions, template literals, destructuring assignments, and more. Whether you’re a seasoned JavaScript developer or just getting started with ES6, this quiz is a great way to assess your skills and learn new aspects of modern JavaScript. Dive in and see how well you know ES6. Happy coding!",
    },
    {
      id: 4,
      image: javaScriptLogoPath,
      title: "JavaScript",
      description:
        "Embark on a journey through the dynamic world of JavaScript with this interactive quiz! Covering everything from basic syntax to complex concepts like closures, promises, and async/await, this quiz is designed to test your JavaScript knowledge at every level. Whether you’re a seasoned developer or just starting out with JavaScript, this quiz offers a challenging and educational way to evaluate your skills. Dive in and see how well you know JavaScript. Happy coding!",
    },
    {
      id: 5,
      image: javaScriptPatternsLogoPath,
      title: "JavaScript Patterns",
      description:
        "Are you ready to dive deep into the world of JavaScript Design Patterns? This quiz covers a variety of patterns including Creational, Structural, and Behavioral patterns. Whether you’re an experienced JavaScript developer or just starting to explore design patterns, this quiz is a great way to assess your understanding and learn more about efficient coding practices in JavaScript. Get ready to tackle Singleton, Factory, Observer, and more. Happy coding!",
    },
    {
      id: 6,
      image: reactLogoPath,
      title: "React",
      description:
        "Challenge yourself with this interactive quiz on React! Explore the world of components, props, state, and hooks, and gauge your understanding of this popular JavaScript library. Whether you’re an experienced developer or a newcomer to the world of React, this quiz is designed to test your knowledge and help you learn more about building user interfaces with React. Enjoy the quiz and happy coding!",
    },
  ];

  const testSelect = testSelectCardsProps.map((testSelectCardsProp) => (
    <TestSelectCard
      key={testSelectCardsProp.id}
      onOpen={onOpen}
      {...testSelectCardsProp}
    />
  ));

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
      {testSelect}
    </SimpleGrid>
  );
};

export default TestSelectCardList;
