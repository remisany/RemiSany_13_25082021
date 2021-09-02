const initialState = {
    firstname: "",
    lastname: "",
}

const RECOVERY = "recovery"
const PROFILE_RESET = "profileReset"
const PROFILE_EDIT = "profileEdit"

export const recovery = (data) => ({
    type: RECOVERY,
    firstname: data.firstName,
    lastname: data.lastName
})

export const profileReset = () => ({
    type: PROFILE_RESET
})

export const profileEdit = (e, id) => ({
    type: PROFILE_EDIT,
    id: id,
    content: e.target.value
})

function reducer (state = initialState, action) {
    if (action.type === RECOVERY) {
        return {
            firstname: action.firstname,
            lastname: action.lastname,
        }
    }

    if (action.type === PROFILE_EDIT) {
        if (action.id === "firstname") {
            return {
                ...state,
                firstname: action.content
            }
        }
        if (action.id === "lastname") {
            return {
                ...state,
                lastname: action.content
            }
        }
    }

    if (action.type === PROFILE_RESET) {
        return initialState
    }

    return state
}

export default reducer