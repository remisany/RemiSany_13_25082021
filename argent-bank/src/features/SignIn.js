const initialState = {
    username: "",
    password: "",
    rememberMe: false
}

const HANDLE_SUBMIT = "submit"
const SET_IDENTIFIERS = "set_identifiers"

export const handleSubmit = e => {
    e.preventDefault()
    return ({
        type: HANDLE_SUBMIT
    })
}

export const setIdentifiers = e => {
    return ({
        type: SET_IDENTIFIERS,
        payload: e.target.value
    })
}

function reducer (state = initialState, action) {
    if (action.type === "set_identifiers") {
        console.log(action.payload)
    }
    return state
}

export default reducer 