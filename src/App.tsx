import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <AuthProvider>
        <Router>          
          <Switch>
            <Route component={Home} exact path="/"> </Route>
            <Route component={Login} exact path="/login"> </Route>
            <Route component={Register} exact path="/register"> </Route>
          </Switch>
        </Router>
    </AuthProvider>   
   
  );

}

export default App;
