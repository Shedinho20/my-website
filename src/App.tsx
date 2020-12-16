import { Route, Switch } from "react-router-dom";
import { Cursor } from "./components/cursor/cursor";
import { Onboarding } from "./pages/onboarding/onboarding";
import { Blog } from "./route/blog";
import { Home } from "./route/home";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Onboarding />
      <Cursor />
      <Switch>
        <Route path="/" component={() => <Home />} exact />
        <Route path="/blog" component={() => <Blog />} exact />
      </Switch>
    </>
  );
}

export default App;
