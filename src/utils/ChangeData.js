import { ShuffleArray } from "./ShuffleArray";

export const ChangeArr = (arr) => {
    let arrTemp = arr
    let correct = []
    arr.forEach((item, index) => {
        correct = [...correct, item.correct_answer]
        let answer = ShuffleArray([item.correct_answer, ...item.incorrect_answers])
        arrTemp[index] = { ...arrTemp[index], answer }
    });
    return { arrTemp, correct };
}