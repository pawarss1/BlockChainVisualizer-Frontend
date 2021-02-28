import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import HomeScreen from "./HomeScreen";

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
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
