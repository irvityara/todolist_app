const initialState = {
    todos: [
        { id: 1, value: "hihi" },
        {id: 1, value: "huhu"},
    ]
}

export default function TodoReducer(state = initialState, acttion) {
    switch (action.type) {
        default:
        return state;
    }
}

export function add() {
    return {
        type : "add"
    }
}