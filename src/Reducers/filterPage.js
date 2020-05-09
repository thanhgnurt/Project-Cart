import * as types from "../Constants/ActionTypes"
var initialState = ''
var myReducer = (state = initialState, action) => {
    
    switch (action.type) {
   
        case types.FILTER_PAGE:
           let keywordSearch = action.keywordSearch
            return keywordSearch
        
        default: 
            return state
        }
    }
    export default myReducer;
           
            
            
        
    
            