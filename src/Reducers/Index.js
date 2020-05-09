import { combineReducers } from 'redux';
import tasks from './Tasks'
import isDisplayForm from './isDisplayForm'
import editTask from './editTask'
import filterTable from './filterTable'
import filterPage from './filterPage'
import filterSort from './filterSort'

const myReducer = combineReducers ({
    tasks,
    isDisplayForm,
    editTask,
    filterTable,
    filterPage,
    filterSort
})

export default myReducer;
