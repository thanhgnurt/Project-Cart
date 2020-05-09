import * as types from "../Constants/ActionTypes"
var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];
//random id
var makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// tim vi tri trong mang
var findIndex = (id, tasks) => {
    let result = -1
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index
        }
    })
    return result
}
let id = ""
let index = -1
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD_TASK:
            let task = action.task
            if (task.id) {
                let index = findIndex(task.id, state)
                state[index] = task
            } else {
                action.task.id = makeid(10);
                task = action.task;
                state.push(task);
            }

            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        case types.CHANGE_STATUS:
            id = action.id;
            index = findIndex(id, state);
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        case types.DELETE_ACTIVE:

            id = action.id

            index = findIndex(id, state)
            state.splice(index, 1)


            localStorage.setItem('tasks', JSON.stringify(state))

            return [...state]
        case types.EDIt_TASK:
            id = action.id
            index = findIndex(id, state)
            return state

        // case types.RANDOM_SORT:
            
        //     return action.task

        default: return state
    }
}
export default myReducer;