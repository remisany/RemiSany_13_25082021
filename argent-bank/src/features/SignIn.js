const initialState = {
    email: "",
    password: "",
    remember: false
}

const IDENTIFIERS = "identifiers"
const REMEMBER = "remember"
const SIGNIN_RESET = "signinReset"

export const identifiers = (e, type) => ({
    type: IDENTIFIERS,
    input: type,
    content: e.target.value
})

export const remember = () => ({
    type: REMEMBER
})

export const signinReset = () => ({
    type: SIGNIN_RESET
})

function reducer (state = initialState, action) {
    if (action.type === IDENTIFIERS) {
        if (action.input === "text") {
            return {
                ...state,
                email: action.content
            }
        }
        if (action.input === "password") {
            return {
                ...state,
                password: action.content
            }
        }
    }

    if (action.type === REMEMBER) {
        return {
            ...state,
            remember: !state.remember
        }
    }

    if (action.type === SIGNIN_RESET) {
        if (state.remember) {
            return state
        } else {
            return initialState
        }
    }

    return state
}

export default reducer 