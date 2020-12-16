const intialState = {
    qObjIndex: 0,
    quiz_id: null,
    mappings:[],
    questionsData:[] 
  };
  const quizReducer = (state = intialState, action) => {
      if(action.type==='INCREMENT_COUNTER'){
          return {
              ...state,
              qno: state.qno +1
          }
      }
      else if(action.type==='SET_QUIZ_ID'){
        const obj =action.payload;
        return {
          ...state,
          quiz_id : obj
        }
    }
    else if(action.type==='INC_INDEX_ON_TIME_OUT'){
      return {
        ...state,
        qObjIndex: state.qObjIndex +1
      }
    }
      else if(action.type==='ANSWER_CLICKED'){
          const obj =action.payload;
          return {
            ...state,
            mappings: [...state.mappings,obj],
            qObjIndex: state.qObjIndex +1
          }
      }
      else if(action.type==='GET_QUESTIONS_DATA'){
        const obj =action.payload;
        return {
          ...state,
          questionsData: obj.data
        }
    }
    return state;
  };
  export default quizReducer;
  /* 
  {
    "quiz_id": "1",
    "mappings": [{
        "ques_id": 1,
        "submitted_option": "Rice"
    }, {
        "ques_id": 2,
        "submitted_option": "NZ"
    }, {...}]
}
} */