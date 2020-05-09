import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../Actions/Index'
class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWordSort: 0
        }
    }
    
    onSort = (event) => {
       
        
        let target = event.target;
        let id = parseInt(target.id);
        this.setState({
            keyWordSort: id
        })
        this.props.onSort(id)
    }

    showSort = () => {
        switch (this.state.keyWordSort) {
            case 0:
                return <div className="mx-4 px-3 btn btn-light"><i className="fa fa-sort pr-2"/>Sort </div>
            case 1:
                return <div className="mx-4 px-3 btn btn-light"><i className="fa fa-sort-alpha-asc pr-2" /> Sort</div>
            case -1:
                return <div className="mx-4 px-3 btn btn-light"><i className="fa fa-sort-alpha-desc pr-2" /> Sort</div>
            case 3:
                return <div className="mx-4 px-4 btn btn-light"><i className="fa fa-check pr-2" />Active</div>

            case 4:
                return <div className="mx-4 px-4 btn btn-light "><i className="fa fa-times pr-2" />Disable</div>
            case 2:
                return <div className="mx-2 px-2 btn btn-light "><i className="fa fa-random pr-2" />Random </div>

            default: break;

        }
    }
    render() {
        
        return (
            <div className="col-5">
                <nav className="navbar navbar-light bg-light container">
                    <form className="form-inline">
                        <div className="dropdown  ">
                            <button
                                className=" dropdown-toggle btn-outline-dark btn btn-secondary "
                                id="navbarDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {this.showSort()}
                            </button>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                <span className="dropdown-item"
                                    name="keyWordSort"
                                    id={0}

                                    onClick={this.onSort}
                                >
                                    <i className="fa fa-reply-all pr-3"></i>
                                    Original
                                    <i className={this.state.keyWordSort === 0 ? "fa fa-check pl-3" : ''} />
                                    <div className="dropdown-divider"></div>
                                </span>

                                <span className="dropdown-item"
                                    name="keyWordSort"
                                    id={2}

                                    onClick={this.onSort}
                                >
                                    <i className="fa fa-random pr-3"></i>
                                    Random
                                    <i className={this.state.keyWordSort === 2 ? "fa fa-check pl-3" : ''} />
                                    <div className="dropdown-divider"></div>
                                </span>
                                <span className="dropdown-item"
                                    name="keyWordSort"
                                    id={1}

                                    onClick={this.onSort}
                                >
                                    <i className="fa fa-sort-alpha-asc pr-3" />
                                    Name A-Z
                                    <i className={this.state.keyWordSort === 1 ? "fa fa-check pl-3" : ''} />
                                    <div className="dropdown-divider"></div>
                                </span>
                                <span className="dropdown-item"
                                    name="keyWordSort"
                                    id={-1}

                                    onClick={this.onSort}
                                >
                                    <i className="fa fa-sort-alpha-desc pr-3" />
                                    Name Z-A
                                    <i className={this.state.keyWordSort === -1 ? "fa fa-check pl-3 " : ''} />
                                    <div className="dropdown-divider" />
                                </span>
                                <span className="dropdown-item"
                                    name="keyWordSort"
                                    id={3}

                                    onClick={this.onSort}
                                >
                                    <i className="fa fa-check pr-3" />
                                    Active
                                    <i className={this.state.keyWordSort === 3 ? "fa fa-check pl-5 ml-3" : ''} />
                                    <div className="dropdown-divider"></div>
                                </span>
                                <span className="dropdown-item"
                                    name="keyWordSort"
                                    id={4}


                                    onClick={this.onSort}
                                >
                                    <i className="fa fa-times pr-3" />
                                    Disable
                                    <i className={this.state.keyWordSort === 4 ? "fa fa-check pl-5 ml-3" : ''} />
                                    <div className="dropdown-divider"></div>
                                </span>
                            </div>
                        </div>
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort : (keySort) => {
             dispatch(actions.onSort(keySort))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Sort)
