import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Result from './Result'
import { SET_ISHOW } from '../Redux/Action/action'
const Quiz = () => {
    const listQuiz = useSelector(state => state.AppManage.listQuiz)
    const listCorrect = useSelector(state => state.AppManage.listCorrect)
    const [listAnswer, setListAnser] = useState(["", "", "", ""])
    const [score, setScore] = useState(0)
    const [listColor, setListColor] = useState([])
    const [isSubmit, setIsSubmit] = useState(true)
    const isShow = useSelector(state => state.AppManage.isShow)
    const dispatch = useDispatch();
    const HanldeAnswer = () => {
        setScore(0)
        listAnswer.forEach(item => {
            if (listCorrect.includes(item)) {
                setScore(pre => pre + 1)
            }
        })
        dispatch({
            type: SET_ISHOW
        })

    }
    useEffect(() => {
        setListAnser(["", "", "", ""]);
        setScore(0)
        setListColor([]);
        setIsSubmit(true)
    }, [listQuiz])
    return (
        <div>
            {isShow && <div>
                {listQuiz.map((item, index) => {
                    let temp = [item.correct_answer, ...item.incorrect_answers]
                    return (
                        <div key={index}>
                            <p>{item.question}</p>
                            {item.answer.map((item2, index2) => (
                                <button style={
                                    {
                                        background: (listColor[index] === `${index}${index2}`) ? "green" : ""
                                    }
                                } key={index2} onClick={() => {
                                    setIsSubmit(false)
                                    setListAnser(prev => {
                                        const newArray = [...prev]
                                        newArray[index] = item2
                                        return newArray
                                    })
                                    setListColor(prev => {
                                        const newArray = [...prev]
                                        newArray[index] = `${index}${index2}`
                                        return newArray
                                    })

                                }}>{item2}</button>
                            ))}
                        </div>
                    )
                })}
                <button style={{ marginTop: 20 }} onClick={HanldeAnswer} disabled={isSubmit} >
                    Submit
                </button>
            </div>}

            {!isShow && <Result score={score} listColor={listColor} listAnswer={listAnswer} />}
        </div>
    )
}

export default Quiz