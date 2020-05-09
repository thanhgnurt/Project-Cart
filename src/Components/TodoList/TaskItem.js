import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../Actions/Index'

class TaskItem extends Component {


   
    changeStatus = () => {
        this.props.changeStatus(this.props.task.id)
        
    }

    deleteActive = () => {
        this.props.deleteActive(this.props.task.id)
    }

    editTask = () => {
        this.props.editTask(this.props.task);

    }

    render() {
        return (
            
            <tr key ={this.props.task.id} >
                <th scope="row">{this.props.index + 1}</th>
                <td>{this.props.task.name}</td>
                <td>
                    <span className={this.props.task.status === true
                        ? 'badge badge-primary'
                        : 'badge badge-dark'}
                        onClick={this.changeStatus}
                    >
                        {this.props.task.status === true ? 'Active' : 'Disable'}

                    </span>
                </td>
                <td>

                    <button className="btn btn-secondary mr-2"
                        onClick = {this.editTask}
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger"
                        onClick={this.deleteActive}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}
const mapStateToProps = state => {
    return {
        

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeStatus : (id) => {
            dispatch(actions.changeStatus(id))
        },
        deleteActive : (id) => {
           dispatch(actions.deleteActive(id)) 
        },
        editTask : (task) => {
            dispatch(actions.editTask(task))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(TaskItem)
