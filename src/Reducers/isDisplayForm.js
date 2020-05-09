import * as types from "../Constants/ActionTypes"

var initialState = false;





var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOOGLE_FORM:
            return !state
        case types.OPEN_FORM:
            return true
        case types.CLOSE_FORM:
            return false
        case types.EDIt_TASK:
            return true
        default: return state
    }
}
export default myReducer;