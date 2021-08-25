import "./App.css";
import Page from "./components/login_register_page/Page";
import ChatBox from "./components/chat_page/Page";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Page} exact={true} />
      <Route path="/register" component={Page} exact={true} />
      <Route path="/chat-box" component={ChatBox} exact={true} />
    </Switch>
  );
}

export default App;
