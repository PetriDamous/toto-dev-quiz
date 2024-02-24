import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const QuizModalBodyContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>
        <DrawerBody>body</DrawerBody>
        <DrawerFooter>footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default QuizModalBodyContent;
