import React, { Component } from 'react';
import Backbtn from './Backbtn';
import { connect } from 'react-redux';
import Navbar2 from './Navbar2';

class Add extends Component {

    state = {
        name: null,
        phone: null,
        id: Math.random()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.addPerson(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="add-page">
                <Navbar2 />
                <div className="container">
                    <Backbtn />

                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input id="name" className="col-3 form-control" type="text" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Phone">Phone:</label>
                            <input id="phone" className="col-3 form-control" type="text" onChange={this.handleChange} />
                        </div>

                        <div className="font-weight-bold">Subscriber to be added:</div>
                        <div>Name: {this.state.name}</div>
                        <div>Phone: {this.state.phone}</div>

                        <button className="btn btn-success mt-4">ADD</button>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: (data) => dispatch({ type: 'ADD_PERSON', data: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)

