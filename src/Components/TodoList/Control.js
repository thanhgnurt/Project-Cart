import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'
import * as actions from './../../Actions/Index'
import { connect } from 'react-redux'

class Control extends Component {
    showAddJob = () => {
        this.props.onToggleFrom()
    }


    render() {
        
        return (
            <div className="container-fluid ">
                <div className="mb-3 ">
                    <button type="button" className="btn btn-secondary px-4 py-2 btn-outline-dark" onClick={()=>{this.showAddJob()}}>
                        <i className="fa fa-plus mr-2" />    Add Job  
    </button>
                </div>
          
                <div className="row mb-3">
                    <Search  />
                    <Sort />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleFrom : () => {
            dispatch(actions.toggleForm())
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Control)