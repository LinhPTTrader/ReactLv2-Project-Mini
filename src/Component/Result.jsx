import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_QUIZ, SET_ISHOW } from '../Redux/Action/action'

const Result = ({ score, listColor, listAnswer }) => {
    const listQuiz = useSelector(state => state.AppManage.listQuiz)
    const listCorrect = useSelector(state => state.AppManage.listCorrect)
    const dispatch = useDispatch()
    const HanldeCreatNewQuiz = () => {
        dispatch({
            type: REMOVE_QUIZ,
        })
        dispatch({
            type: SET_ISHOW
        })
    }
    console.log(listAnswer)
    return (
        <div>
            {listQuiz.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.question}</p>
                        {item.answer.map((item2, index2) => (
                            <button style={
                                {
                                    backgroundColor: listColor[index] === `${index}${index2}` ? `${listCorrect.includes(item2) ? "green" : "red"}` :
                                        `${listCorrect.includes(item2) ? "green" : ""}`,

                                }
                            } key={index2} disabled>{item2}</button>
                        ))}
                    </div>
                )
            })}
            <p style={{ background: score < 2 ? "red" : `${score > 3 ? "green" : "yellow"}` }}>You scored {score} out of {listQuiz.length}</p>
            <button onClick={HanldeCreatNewQuiz}>
                Create a New Quiz
            </button>
        </div>
    )
}

export default Result