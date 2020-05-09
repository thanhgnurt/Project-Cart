import React, { Component } from 'react'
import AddJob from './AddJob'
import Control from './Control'
import TaskList from './TaskList'
import { connect } from 'react-redux';
class TodoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            keyword: '',
            keyWordSort: 0
        }
    }


    onSearch = (keyword) => {
        this.setState({
            keyword: keyword.toLowerCase()
        })
    }
    onSort = (keyWordSort) => {
        this.setState({
            keyWordSort: keyWordSort
        })
    }
    
    render() {
        let { 
            tasks, 
            // isDisplayForm, taskEdit,
            //  filter,
              keyword, keyWordSort
             } = this.state;

        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        if (keyWordSort === 3) {
            tasks = tasks.filter((task) => {
                return task.status === true
            })
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                else return 0
            })
        }
        if (keyWordSort === 4) {
            tasks = tasks.filter((task) => {
                return task.status === false
            })
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                else return 0
            })
        }
        if (keyWordSort === 1 || keyWordSort === -1) {
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return keyWordSort;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -keyWordSort;
                else return 0
            })
        }
        if (keyWordSort === 2) {
            tasks.sort((a,b)=>{
                return 0.5 - Math.random()
            })
        }
    
           
        return (
            <div className="container">
                <div className="text-center mb-5 ">
                    <h2 className="alert alert-primary ">Management Job</h2>
                </div>
                <div className="row">
                    <div className={this.props.isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4 borderAddJob' : ''}>
                        <AddJob/>
                    </div>
                    <div className={this.props.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <Control/>
                        <TaskList/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {}
}
export default connect (mapStateToProps, mapDispatchToProps) (TodoIndex);
