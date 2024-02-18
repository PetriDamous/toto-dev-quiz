import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch } from "wouter";
import { Layout } from "./components";
import { TestPage, TestSelectPage, NotFoundPage } from "./pages";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Switch>
          <Route path="/" component={TestSelectPage} />
          <Route path="/:testName" component={TestPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
