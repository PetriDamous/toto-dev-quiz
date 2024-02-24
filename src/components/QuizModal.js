import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { QuizModalBodyContent, QuizModalFooterContent } from ".";

const QuizModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      onClose={onClose}
      size="full"
      isOpen={isOpen}
      scrollBehavior="inside"
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Test Name</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <QuizModalBodyContent closeModal={onClose} />
        </ModalBody>
        <ModalFooter>
          <QuizModalFooterContent />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuizModal;
