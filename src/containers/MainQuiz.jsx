import React, { Component } from "react";
import QuizTypeList from "../Components/QuizMain/QuizTypeList";
import axios from "./../Axios/axiosQuiz";
class MainQuiz extends Component {
  state = {
    data: [],
    hasError: false,
  };
  componentDidMount() {
    axios
      .get("/api/quiz/all")
      .then((respose) => {
        this.setState({ data: respose.data });
      })
      .catch((err) => {
        this.setState({ hasError: true });
      });
  }

  render() {
    return (
      <>
        {this.state.data.map((qd) => {
          const id = qd.id;
          return (
            <QuizTypeList
              key={id}
              id={id}
              quizClass={"quiz-list-" + id}
              heading={qd.name}
              description={qd.description}
            />
          );
        })}
      </>
    );
  }
}

export default MainQuiz;
