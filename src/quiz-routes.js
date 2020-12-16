import React from "react";
import { Route, Switch } from "react-router";
import QuizStart from "./containers/QuizStart";
import MainQuiz from "./containers/MainQuiz";
const QuizRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainQuiz}></Route>
        <Route path="/startQuiz" render={ (props) => <QuizStart {...props}/>}></Route>
        </Switch>
    </div>
  );
};

export default QuizRoutes;
