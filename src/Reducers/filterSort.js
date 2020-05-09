import * as types from "../Constants/ActionTypes"
var initialState = {
    random : false,
    keySort : ''
}
var myReducer = (state = initialState, action) => {
    
    switch (action.type) {
   
        
        case types.ON_SORT:

            let {keySort} = action;
            if (keySort === 2 ) {
                state.random = !state.random
                
            }
            state.keySort = keySort
            // state = action.keySort
           
            return {...state}
            
        default: 
            return state
        }
    }
    export default myReducer;
           
            
            
        
    
            