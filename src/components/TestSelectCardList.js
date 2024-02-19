import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "wouter";
import { TestSelectCard } from ".";

const TestSelectCardList = () => {
  const testCards = [
    { title: "JavaScript", link: "javascript" },
    { title: "JavaScript ES6", link: "javascript-es6" },
    { title: "JavaScript Patterns", link: "javascript-patterns" },
    { title: "Graphql Apollo", link: "graphql-apollo" },
    { title: "Git", link: "git" },
    { title: "React", link: "react" },
  ];

  const testSelect = testCards.map((testCard) => <TestSelectCard />);

  return (
    <SimpleGrid columns={3} spacing={10}>
      {testSelect}
    </SimpleGrid>
  );
};

export default TestSelectCardList;
