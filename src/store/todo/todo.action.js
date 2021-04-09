const key = 'xxxx'

export const TYPES = {
    TODO_ADD: "TODO_ADD",
}

export const saveTodo = (item) => {
    // const itemString = JSON.stringify(item);
    // localStorage.setItem(key, itemString)
    return  (dispatch) => {
        dispatch({
            type: TYPES.TODO_ADD, data: item
        })
    }

}