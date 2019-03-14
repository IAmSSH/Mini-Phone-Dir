import React, { Component } from 'react';
import People from './People';
import Navbar from './Navbar';
import Addbtn from './Addbtn';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Navbar />
                <div className='container'>
                    <Addbtn />
                    <People />
                </div>
            </div>
        );
    }
}

export default Home;