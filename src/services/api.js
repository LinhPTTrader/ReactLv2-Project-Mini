


export const ApiGetCategory = async () => {
    const res = await fetch(`https://opentdb.com/api_category.php`)
    return await res.json()
}

export const ApiGetQuiz = async (category, level) => {
    console.log(category)
    const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${level}&type=multiple`)
    return await res.json()
}