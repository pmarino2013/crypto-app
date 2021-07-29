//importación de React y Hooks
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importación de helpers
import ProtectedRoute from "./helpers/ProtectedRoute";
//importacion de componentes
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="*" component={() => "404 Not Found"} />
      </Switch>
    </Router>
  );
}

export default App;
