import { QuizModal, TestSelectCardList } from "../components";
import { useDisclosure } from "@chakra-ui/react";

const TestSelectPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TestSelectCardList onOpen={onOpen} />
      <QuizModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TestSelectPage;
