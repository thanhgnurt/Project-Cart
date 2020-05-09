import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../Actions/Index';
class AddJob extends Component {

    onHandChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let elementEdit = {...this.props.editTask}
        if (name === 'status') {
            value = target.value === 'true' ? true : false
            elementEdit.status = value
        }
        if (name === 'name') {
            elementEdit.name = value
        }
        this.props.onHandChangeEdit(elementEdit)
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.closeAddJob()
        this.props.onAddTask(this.props.editTask)
    }
    
    render() {
        if (!this.props.isDisplayForm) return ''
        let edit = { ...this.props.editTask }
        return (
            <div className="  ">
                <div className=" text-right row alert alert-success hover-darger" >
                    <div className='col-8 text-left'>
                        {this.props.editTask.id !== '' ? "Update Job" : "Add Job"}
                    </div>
                    <span className="col-4 fa fa-times-circle-o mt-1" onClick={() => { this.props.closeAddJob() }} aria-hidden="true"></span>
                </div>
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label className="text-dark mt-3">Activity :</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name Active"
                            name="name"
                            value={edit.name}
                            onChange={this.onHandChange}
                        />
                    </div>
                    <label className="text-dark">Status :</label>
                    <div className="input-group mb-3">
                        <select
                            className="custom-select"
                            name="status"
                            value={edit.status}
                            onChange={this.onHandChange}
                        >
                            <option value={false} >Hide</option>
                            <option value={true} >Show up</option>
                        </select>
                    </div>
                    <div className="text-left">
                        <button type="submit" className="opancityAppJob btn btn-primary mb-3 mr-2 text-center px-4">
                            {" "}
          Save{" "}
                        </button>
                        <button type="button" className="opancityAppJob btn btn-warning mb-3 text-center px-4" onClick={this.onClear}>
                            {" "}
          Cancel{" "}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        editTask: state.editTask
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        closeAddJob: () => {
            dispatch(actions.closeForm())
        },
        onHandChangeEdit : (elementEdit) => {
            dispatch(actions.onHandChangeEdit(elementEdit))

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob)
