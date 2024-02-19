import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container my={10} p={{ lg: 10 }} maxW="container.xl" centerContent>
      {children}
    </Container>
  );
};

export default Layout;
