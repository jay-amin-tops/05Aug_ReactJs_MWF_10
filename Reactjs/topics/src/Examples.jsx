import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Examples = () => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-6">
                    <h3>
                        <Link to="classcompo">Class Component</Link>
                    </h3>

                </div>
                <div className="col-6">
                    <h3>Functional Component</h3>
                </div>
            </div>


            <div className="row my-3">
                <div className="col-md-6 offset-md-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Examples;