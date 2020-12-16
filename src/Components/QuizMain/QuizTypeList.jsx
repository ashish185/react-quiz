import React from "react";
import { useHistory, withRouter } from "react-router";

const QuizTypeList = ({ id, heading, description }) => {
  const history = useHistory();

  const handleStartClick = (id) => {
    history.push({
      pathname: "/startQuiz",
      quizId: id,
      visitedMainPage: true,
    });
  };
  return (
    <React.Fragment>
      <div>
        <h3 className={"quiz-list-" + id}>{heading}</h3>
        <button
          className={"start-quiz-" + id}
          onClick={() => handleStartClick(id)}
        >
          Start
        </button>
        <hr />
        <p>{description}</p>
      </div>
    </React.Fragment>
  );
};

export default withRouter(QuizTypeList);
