import { createReducer } from "../../app/util/reducerUtils";
import { LOGIN_USER, SIGN_OUT_USER, SHOW_CONFIRM_SIGNUP } from "./AuthConstants";

const initialState = {
    authenticated: false,
    currentUser: null,
    showConfirmSignUp: false

}

const loginUser = (state, payload) => {
    return {
        authenticated: true,
        currentUser: payload
    }
}

const signOutUser = () => {
    return {
        authenticated: false,
        currentUser: null
    }
}

const confirmUser = () => {
    return {
        
        showConfirmSignUp: true
    }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser,
    [SHOW_CONFIRM_SIGNUP]: confirmUser
})