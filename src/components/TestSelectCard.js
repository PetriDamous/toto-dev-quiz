import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const TestSelectCard = ({ image, title, description }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          size="lg"
          boxSize={["130px", "150px", "200px", "200px"]}
          objectFit="cover"
          align="center"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Take Quiz
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default TestSelectCard;
