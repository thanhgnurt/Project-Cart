import * as types from "../Constants/ActionTypes"

var initialState = {
    id : '',
    name : '',
    status : false,
}




var myReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.EDIt_TASK:
            state = action.task;
            return {...state}
        case types.ON_CHANGE_EDIT:
            state = action.elementEdit
            return {...state}
        case types.TOOGLE_FORM:
            state = {
                id : '',
                name : '',
                status : false,
            }
            return {...state}
    


            
        default: return state
    }
}
export default myReducer;