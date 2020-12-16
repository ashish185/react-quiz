import React from 'react';
import { Route, Switch } from 'react-router';
import MainQuiz from './containers/MainQuiz'
function App() {
  return (
      <Switch>
        <Route exact path="/" component= {MainQuiz}></Route>
      </Switch>
  );
}

export default App;
