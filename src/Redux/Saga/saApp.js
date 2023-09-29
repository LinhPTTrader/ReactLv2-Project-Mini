import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { GET_CATEGORY, GET_QUIZ, SET_CATEGORY, SET_QUIZ } from '../Action/action';
import { ApiGetCategory, ApiGetQuiz } from '../../services/api';
import { ChangeArr } from '../../utils/ChangeData';



function* GetCategory({ type, payload }) {
    // const { key } = payload
    const dt = yield call(ApiGetCategory);
    console.log(dt)
    yield put({
        type: SET_CATEGORY,
        payload: dt.trivia_categories
    })
}
function* GetQuiz({ type, payload }) {
    const { category, level } = payload
    const dt = yield call(ApiGetQuiz, category, level)
    const dataChange = (ChangeArr(dt.results))
    console.log(dataChange)
    yield put({
        type: SET_QUIZ,
        payload: dataChange
    })
}

// Generator function
function* saApp() {
    yield takeLatest(GET_CATEGORY, GetCategory)
    yield takeEvery(GET_QUIZ, GetQuiz)
}



export default saApp;