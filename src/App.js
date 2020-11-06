
import React from "react";
import { Switch,Route } from 'react-router-dom'

function App() {
  return (
    <Switch>


    <Route exact path="/">This is Home Page</Route>
    <Route exact path="/contact">This is Contact Page</Route>
    <Route>This is Invalid Page</Route>

    </Switch>
  );
}

export default App;
