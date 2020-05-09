import * as types from "../Constants/ActionTypes"


export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task

    }
}

export const toggleForm = () => {
    return {
        type : types.TOOGLE_FORM
        
    }
}
export const openForm = () => {
    return {
        type : types.OPEN_FORM

    }
}
export const closeForm = () => {
    return {
        type : types.CLOSE_FORM

    }
}
export const changeStatus = (id) => {
    return {
        type : types.CHANGE_STATUS,
        id
    }
}
export const deleteActive = (id) => {
    return {
        type : types.DELETE_ACTIVE,
        id
    }
}
export const editTask = (task) => {
    return {
        type : types.EDIt_TASK,
        task

    }
}

export const onHandChangeEdit = (elementEdit) => {
    return {
        type : types.ON_CHANGE_EDIT,
        elementEdit

    }
}

export const filterTask = (filter) => {
    return {
        type : types.FILTER_TABLE,
        filter
    }
}

export const filterPage = keywordSearch => {
    return {
        type : types.FILTER_PAGE,
        keywordSearch
    }
}

export const onSort = keySort => {
    
    
    return {
        type : types.ON_SORT,
        keySort
    }
}
// export const randomSort = tasks => {
    
    
//     return {
//         type : types.RANDOM_SORT,
//         tasks
//     }
// }
