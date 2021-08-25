import "./App.css";
import Page from "./components/login_register_page/Page";
import ChatPage from "./components/chat_page/ChatPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Page} exact={true} />
      <Route path="/register" component={Page} exact={true} />
      <Route path="/chat-box" component={ChatPage} exact={true} />
    </Switch>
  );
}

export default App;
