const initialState = {
    firstname: "",
    lastname: "",
}

const RECOVERY = "recovery"
const PROFILE_RESET = "profileReset"

export const recovery = (data) => ({
    type: RECOVERY,
    firstname: data.firstName,
    lastname: data.lastName
})

export const profileReset = () => ({
    type: PROFILE_RESET
})

function reducer (state = initialState, action) {
    if (action.type === RECOVERY) {
        return {
            firstname: action.firstname,
            lastname: action.lastname,
        }
    }

    if (action.type === PROFILE_RESET) {
        return initialState
    }

    return state
}

export default reducer