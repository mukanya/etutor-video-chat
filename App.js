import React from 'react';
import { BrowserRouter, HashRouter , Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <HashRouter>
        <Switch>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
        </Switch>
        </HashRouter>
      </BrowserRouter>

    </div>
  );
}

export default App;
