import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../../Actions/Index'


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //all = -1 active :1 deactive:0
        }
    }

    onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value
        let filter = {
            name: name === 'filterName' ? value : this.props.filterTable.name,
            status: name === 'filterStatus' ? value : this.props.filterTable.status
        }
        this.props.onFilterTable(filter)
        this.setState({
            [name]: value
        })

    }
    render() {
        let { filterName, filterStatus } = this.state
        var { tasks, filterTable, filterPage, filterSort } = this.props

        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1
            })
        }
        tasks = tasks.filter((task) => {
            if (parseInt(filterTable.status) === -1) {
                return task;
            } else {
                return task.status === (filterTable.status === 0 ? true : false)
            }
        })


        if (filterPage) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterPage) !== -1
            })
        }



        // sort in page

        if (filterSort.keySort) {


            switch (filterSort.keySort) {
                // sort ramdom
                case 2:
                    tasks.sort((a, b) => {
                        return 0.5 - Math.random()
                    });
                    break;
                // sort name a to z
                case 1:
                    tasks.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        else return 0
                    }); break;
                //  sort nam z to a
                case -1:
                    tasks.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                        else if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        else return 0
                    }); break;
                case 3:
                    
                    tasks = tasks.filter((task) => {
                      return  task.status === true
                    }); break;
                case 4:
                    
                    tasks = tasks.filter((task) => {
                      return  task.status === false
                    }); break;



                default: break;


            }
        }
        let elemTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
            />
        })
        return (
            <div className="container-fluid">
                <table className="tastList container table table-bordered table-light table-hover text-center table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <th scope="row" />
                            <td>
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    name='filterName'
                                    value={filterName}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <div className="input-group mb-3">
                                    <select
                                        className="custom-select"
                                        name='filterStatus'
                                        onChange={this.onChange}
                                        value={filterStatus}
                                    >
                                        <option value={-1}  >All...</option>
                                        <option value={0}> Active </option>
                                        <option value={1}> Deactive </option>
                                    </select>
                                    <div className="input-group-append">
                                    </div>
                                </div>
                            </td>
                            <td>
                            </td>
                        </tr>
                        {elemTasks}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        filterSort: state.filterSort,
        filterPage : state.filterPage
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter))
        },
       

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList) 