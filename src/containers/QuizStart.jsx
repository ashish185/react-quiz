import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import axios from "../Axios/axiosQuiz";
import Results from "./Results";
import Question from "../Components/QuizMain/Question";

class QuizStart extends Component {
  componentDidMount() {
    const id = this.props.history.location.quizId;
    this.props.setQuizId(id);
    id && this.props.getQuestionsDetails(id);
  }

  render() {
    const questionDataAvailable =
      this.props.questionsData.questions &&
      this.props.questionsData.questions.length;
    const qObjIndex = this.props.qObjIndex;
    const questionsEnd = qObjIndex === questionDataAvailable;
    const isVisited = this.props.history.location.visitedMainPage;

    const ifDataAvailable = () => {
      if (questionDataAvailable) {
        if (questionsEnd) {
          return <Results />;
        } else {
          return (
            <Question
              qdata={this.props.questionsData.questions[qObjIndex]}
            ></Question>
          );
        }
      }
    };

    return isVisited ? (
      <React.Fragment>{ifDataAvailable()}</React.Fragment>
    ) : (
      <Redirect to="/"></Redirect>
    );
  }
}
function mapStateToProps(state) {
  return {
    qObjIndex: state.qObjIndex,
    questionsData: state.questionsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setQuizId: (quizID) => {
      dispatch({ type: "SET_QUIZ_ID", payload: quizID });
    },
    getQuestionsDetails: (id) => {
      dispatch((dispatch) => {
        axios
          .get("/api/quiz-questions/all/" + id)
          .then((respose) => {
            dispatch({
              type: "GET_QUESTIONS_DATA",
              payload: respose,
            });
            console.log("Start", respose.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizStart);
