const initialState = {
    todos: [],
    isLoading: false,
    error:""
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "DELETE_TODO":
            return {
                
            };
        case "UPDATE_TODO":
            return {
                
            };
        default:
            return state;
    }
}
export function addTodo(input) {
    return {
        type: "ADD_TODO",
        payload: input
    }
}

export default todoReducer;