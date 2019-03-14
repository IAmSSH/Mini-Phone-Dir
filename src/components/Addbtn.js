import React from 'react';
import { Link } from 'react-router-dom';

const Addbtn = (props) => {

    return (
        <Link to="/add" className="btn btn-success mt-3 mb-4">ADD</Link>
    );
}

export default Addbtn;