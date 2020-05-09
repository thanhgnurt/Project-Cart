import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../Actions/Index'



class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keywordSearch : ""
        }
    }

    onSearch = (event) => {
    
        // let target = event.target;
        // let name = target.name;
        // let value = target.value;
        // this.setState ({
        //     [name] : value
        // })
        this.setState ({
            keywordSearch : this.refs.search.value
        })
   
    }

    onSearchPage = (event) =>{
        console.log(this.state.keywordSearch);
        event.preventDefault();
        this.props.filterPage(this.state.keywordSearch);
        
    }
    render() {
        
        return (
            <div className="col-7">
                <nav className="navbar navbar-light bg-light container">
                    <form className="form-inline" onSubmit = {this.onSearchPage}>
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            aria-label="Search"
                            name = 'keywordSearch'
                            ref = 'search'
                        

                        />
                        <button className="btn btn-outline-dark btn-secondary my-2 my-sm-0"
                         type="submit"
                         
                         >
                            <i className="fa fa-search" onClick = {this.onSearch}> Search</i>
                        </button>
                    </form>
                </nav>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        
        

    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        filterPage : (keywordSearch) => {
            dispatch(actions.filterPage(keywordSearch))
        }

    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Search)
