import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const ScoreCard = ({ data, questionsData, cssID }) => {
  const [questionsMapping, setQuestionsMapping] = useState(null);

  useEffect(() => {
    console.log("questionsData", questionsData.questions);
    const qidNameMapping = {};
    questionsData.questions.forEach((element) => {
      qidNameMapping[element.id] = element.name;
    });
    setQuestionsMapping(qidNameMapping);
  }, []);

  return (
    <>
      <div className={"question-" + cssID}>
        Questions: {questionsMapping && questionsMapping[data.ques_id]}
      </div>
      <div className={"submitted-answer-" + cssID}>
        Your Answer: {data.submitted_option}
      </div>
      <div className={"correct-answer-" + cssID}>
        Correct Answer: {data.correct_option}
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    questionsData: state.questionsData,
  };
}

export default connect(mapStateToProps)(ScoreCard);
