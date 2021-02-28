import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import HomeScreen from "./HomeScreen";
import BlockchainInfo from "./BlockchainInfo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home/">
          <HomeScreen />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <BlockchainInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
