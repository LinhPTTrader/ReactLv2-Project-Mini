
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect, useState } from 'react'
import { GET_CATEGORY, GET_QUIZ } from './Redux/Action/action'
import Quiz from './Component/Quiz'

function App() {
  const listCategory = useSelector(state => state.AppManage.listCategory)
  const listQuiz = useSelector(state => state.AppManage.listQuiz)
  const isShow = useSelector(state => state.AppManage.isShow)
  const dispatch = useDispatch()
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState('easy')
  useEffect(() => {
    dispatch({
      type: GET_CATEGORY
    })
  }, [])
  useEffect(() => {
    setCategory("")
  }, [listQuiz])

  const HandleOnCreateQuiz = () => {
    dispatch({
      type: GET_QUIZ,
      payload: {
        category, level
      }
    })
  }
  return (
    <>
      <div>
        {isShow && <div>
          <h1>QUIZ MARKET</h1>
          <select onChange={(event) => setCategory(event.target.value)}>
            <option value={null}></option>
            {
              listCategory.map((item, index) => (
                <option key={index} value={item.id}>{item.name}</option>
              ))
            }
          </select>
          <select onChange={(event) => setLevel(event.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onClick={HandleOnCreateQuiz} disabled={category === "" ? true : false}>Create</button>
        </div>}
        <Quiz />
      </div>
    </>
  )
}

export default App
