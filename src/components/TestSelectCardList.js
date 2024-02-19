import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "wouter";
import { TestSelectCard } from ".";
import apolloLogoPath from "../logos/apollo-graphql-compact.svg";
import gitLogoPath from "../logos/git-icon.svg";
import javaScriptEsLogoPath from "../logos/logo-javascript.svg";
import javaScriptLogoPath from "../logos/javascript-1.svg";
import javaScriptPatternsLogoPath from "../logos/javascript-2.svg";
import reactLogoPath from "../logos/react-1.svg";

const TestSelectCardList = () => {
  const testSelectCardsProps = [
    { id: 1, image: apolloLogoPath, title: "Apollo Graphql", description: "" },
    { id: 2, image: gitLogoPath, title: "Git", description: "" },
    {
      id: 3,
      image: javaScriptEsLogoPath,
      title: "JavaScript ES6",
      description: "",
    },
    { id: 4, image: javaScriptLogoPath, title: "JavaScript", description: "" },
    {
      id: 5,
      image: javaScriptPatternsLogoPath,
      title: "JavaScript Patterns",
      description: reactLogoPath,
    },
    { id: 6, image: reactLogoPath, title: "React", description: "" },
  ];

  const testSelect = testSelectCardsProps.map((testSelectCardsProp) => (
    <TestSelectCard key={testSelectCardsProp.id} {...testSelectCardsProp} />
  ));

  return (
    <SimpleGrid columns={3} spacing={10}>
      {testSelect}
    </SimpleGrid>
  );
};

export default TestSelectCardList;
