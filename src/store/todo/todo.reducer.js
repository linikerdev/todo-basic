import { TYPES } from './todo.action'

const INITIAL_STATE = {
    todos: []
};

const reducer = (state = INITIAL_STATE, action) => { // tamara recebe
    switch (action.type) {
        case TYPES.TODO_ADD:
            const arr = [
                ...state.todos,
                action.data.todo
            ]
            state.todos = arr;
            return state
        default:
            return state;
    }
};

export default reducer;
