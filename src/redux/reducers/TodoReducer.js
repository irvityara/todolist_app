const initialState = {
    todos: [
        { id: 1, value: "hihi" },
        {id: 1, value: "huhu"},
    ],
}

export default function TodoReducer(state = initialState, action) {
    switch (action.type) {
        default:
        return state
    }
}