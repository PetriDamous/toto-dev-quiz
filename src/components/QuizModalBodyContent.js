import {
  Box,
  Flex,
  IconButton,
  Text,
  Spacer,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowBackIcon, SettingsIcon } from "@chakra-ui/icons";
import { QuizOptions } from ".";

const QuizModalBodyContent = ({ closeModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavigationHeader closeModal={closeModal} onOpen={onOpen} />
      <div style={{ marginBottom: 30 }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus
          volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit.
        </Text>
      </div>

      <VStack spacing={4} w="100%">
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </VStack>
      <QuizOptions isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const NavigationHeader = ({ closeModal, onOpen }) => {
  return (
    <Flex alignItems="center" style={{ marginBottom: 20 }}>
      <div onClick={closeModal} style={{ cursor: "pointer" }}>
        <ArrowBackIcon /> Back
      </div>
      <Spacer />
      <IconButton
        aria-label="Quiz Settings"
        variant="outline"
        icon={<SettingsIcon />}
        onClick={onOpen}
        style={{ border: "none" }}
      />
    </Flex>
  );
};

export default QuizModalBodyContent;
