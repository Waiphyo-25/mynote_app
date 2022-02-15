import React, { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddNote from "./components/AddNote/AddNote";
import Container from "./components/Container/Container";
import './app.scss';
import AddItem from "./components/AddItem/AddItem";
import EditItem from "./components/EditItem/EditItem";
import ViewItem from "./components/ViewItem/ViewItem";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Container} />
        <Route exact path="/add/note" component={AddNote} />
        <Route exact path="/add/item" component={AddItem} />
        <Route exact path="/edit/item" component={EditItem} />
        <Route exact path="/view/item/:id" component={ViewItem} />
      </Switch>
    </Router>
  );
};
export default App;