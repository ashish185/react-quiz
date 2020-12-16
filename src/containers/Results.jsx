import React, { Component } from "react";
import { connect } from "react-redux";
import ScoreCard from "../Components/QuizMain/ScoreCard";
import axios from "./../Axios/axiosQuiz";

class Results extends Component {
  state = {
    scoreResultsObj: null,
  };
  componentDidMount() {
    const obj = {
      quiz_id: this.props.quiz_id,
      mappings: this.props.mappings,
    };
    axios
      .post("api/user/quiz-score", JSON.stringify(obj))
      .then((res) => {
      this.setState({ scoreResultsObj: res.data });
      })
      .catch({});
  }
  render() {
    const resObj = this.state.scoreResultsObj;
    return (
      resObj && (
        <>
          <h1 className="score">Your score is: {resObj.score}</h1>
          {resObj.questions.map((qObj, index) => (
            <ScoreCard key={index} data={qObj} cssID={index + 1}></ScoreCard>
          ))}
        </>
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz_id: state.quiz_id,
    mappings: state.mappings,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);
