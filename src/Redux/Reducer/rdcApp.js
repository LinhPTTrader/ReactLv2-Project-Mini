
import { REMOVE_QUIZ, SET_CATEGORY, SET_ISHOW, SET_QUIZ } from "../Action/action";



const initialState = {
    listCategory: [],
    listQuiz: [],
    listCorrect: [],
    isShow: true
}

const rdcApp = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CATEGORY:
            return {
                ...state,
                listCategory: payload,
            }
        case SET_QUIZ:
            console.log(payload)
            return {
                ...state,
                listQuiz: payload.arrTemp, listCorrect: payload.correct
            }
        case REMOVE_QUIZ:
            return {
                ...state,
                listQuiz: []
            }
        case SET_ISHOW: {
            return {
                ...state,
                isShow: !state.isShow
            }
        }

        default:
            return state
    }
}

export default rdcApp;