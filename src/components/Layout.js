import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl" p={0} bg="gray.400" h="100vh" centerContent>
      {children}
    </Container>
  );
};

export default Layout;
