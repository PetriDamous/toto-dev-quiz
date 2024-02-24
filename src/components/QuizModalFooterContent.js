import { Button, ButtonGroup, Flex, Spacer, Text } from "@chakra-ui/react";

const QuizModalFooterContent = () => {
  const questionCountSizes = { sm: "1.5rem", md: "2rem" };
  const btnSizes = ["sm", "md", "lg"];

  return (
    <Flex alignItems="center" w="100%">
      <Text fontSize={questionCountSizes}>0 of 20 Questions</Text>

      <Spacer />
      <ButtonGroup>
        <Button variant="solid" colorScheme="blue" size={btnSizes}>
          Prev
        </Button>
        <Button variant="solid" colorScheme="blue" size={btnSizes}>
          Next
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default QuizModalFooterContent;
