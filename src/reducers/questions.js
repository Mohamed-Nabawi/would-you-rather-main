import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions';
import { ADD_ANSWER } from '../actions/answers';

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions,
      }
    case ADD_QUESTION :
      return{
        ...state,
        [action.question.id]: action.question
      }
    case ADD_ANSWER :
      const { answer, qid, authedUser } = action
      const question = state[qid]
      const voteOption = `${answer}Votes`

      return {
        ...state,
        [action.qid]: {
          ...question,
          [voteOption]: question[voteOption].concat([authedUser])
        }
      }
    default :
      return state
  }
}