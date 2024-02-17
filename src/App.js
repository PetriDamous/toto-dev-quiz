import { Route, Switch } from "wouter";
import { TestPage, TestSelectPage, NotFoundPage } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" component={TestSelectPage} />
      <Route path="/:testName" component={TestPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
