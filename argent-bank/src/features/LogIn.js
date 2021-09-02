const initialState = {
    token: ""
}

const VALID = "valid"
const LOGIN_RESET = "loginReset"

export const valid = (token) => ({
    type: VALID,
    token: token
})

export const loginReset = () => ({
    type: LOGIN_RESET
})

function reducer (state = initialState, action) {
    if (action.type === VALID) {
        return {
            token: action.token
        }
    }

    if (action.type === LOGIN_RESET) {
        return initialState
    }

    return state
}

export default reducer