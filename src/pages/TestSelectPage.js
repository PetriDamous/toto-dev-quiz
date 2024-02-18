import { Box, VStack } from "@chakra-ui/react";
import { Link } from "wouter";

const TestSelectPage = () => {
  const testLinks = [
    { title: "JavaScript", link: "javascript" },
    { title: "JavaScript ES6", link: "javascript-es6" },
    { title: "JavaScript Patterns", link: "javascript-patterns" },
    { title: "Graphql Apollo", link: "graphql-apollo" },
    { title: "Git", link: "git" },
    { title: "React", link: "react" },
  ];

  const testSelectBoxProps = {
    textAlign: "center",
    padding: "4",
    bg: "blue.400",
    color: "black",
    maxW: "full",
    borderRadius: "lg",
  };

  const testSelect = testLinks.map((testLink) => (
    <Box {...testSelectBoxProps}>
      <Link href={testLink.link}>{testLink.title}</Link>
    </Box>
  ));

  return (
    <VStack VStack w="full" h="full" p={10} spacing={6} align="flex-center">
      {testSelect}
    </VStack>
  );
};

export default TestSelectPage;
