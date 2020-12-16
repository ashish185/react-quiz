import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Question = ({ qdata, onSubmit, onTimeout }) => {
  const optionsArr = qdata && qdata.options.split(",");
  const [time, setTime] = useState(15);
  useEffect(() => {
   const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    
      return () => {
        clearTimeout(timer);
        if(time===0){
            setTime(2)
            onTimeout();
        }
      };
 });

  //   useEffect(()=>{
  //       debugger
  //     return ()=> {
  //         setTime(15);
  //     }
  //   })
const twoDigit = String(time).length ===2 ? "00:"+time :"00:0"+time ;
  return (
    <>
    <div className="time-bar">Time Remaining: {twoDigit} / 0:15 seconds</div>
      <div className={"question"}>{qdata.name}</div>
      {optionsArr.map((op, index) => {
        const ansId = index + 1;
        return (
          <div
            key={index}
            className={"answer-value-" + ansId}
            onClick={() => {
              setTime(15);
              onSubmit(qdata.id, op, true);
            }}
          >
            {op}
          </div>
        );
      })}
    </>
  );
};
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (qno, ans, isClicked) => {
      dispatch({
        type: "ANSWER_CLICKED",
        payload: {
          ques_id: qno,
          submitted_option: ans,
          isClicked: isClicked,
        },
      });
    },
    onTimeout: () => (dispatch({ type: "INC_INDEX_ON_TIME_OUT" }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
/* {
    "name": "Basic GK Quiz",
    "description": "This quiz will help to polish your unawareness about General Knowledge.",
    "questions": [
        {
            "id": 1,
            "name": "Which crop is sown on the largest area in India?",
            "options": "Rice,Wheat,Sugarcane,Maize",
            "quiz": 1,
            "points": 1
        },
        {...}]
} */
