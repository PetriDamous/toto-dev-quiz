import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import {
  QuizModalBodyContent,
  QuizModalFooterContent,
  QuizModalHeaderContent,
} from ".";

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
        <ModalHeader>
          <QuizModalHeaderContent />
        </ModalHeader>
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
