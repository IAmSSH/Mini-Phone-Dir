import React, { Component } from 'react';
import { connect } from "react-redux";

class People extends Component {


    handleDelete = (id) => {
        this.props.deletePost(id);
    }


    render() {
        let nameList = this.props.people.map(person => {
            return (
                <div className="names">
                    {person.name}
                </div>
            )
        })
        let phoneList = this.props.people.map(person => {
            return (
                <div className="numbers">
                    {person.phone}
                    <button className="btn btn-danger btn-sm ml-5" onClick={() => { this.handleDelete(person.id) }}>Delete</button>
                </div>
            )
        })

        return (

            <div className="row">
                <div className="col-6">NAME
                {nameList}
                </div>
                <div className="col-6">PHONE

                <div className="numbers">
                        {phoneList}
                    </div>


                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch({ type: 'DELETE_PERSON', id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People)
