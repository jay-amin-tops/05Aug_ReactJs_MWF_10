import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Examples = () => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-6">
                    <h3>
                        <Link to="/examples/classcompo">Class Component</Link>
                    </h3>

                </div>
                <div className="col-6">
                    <h3><Link to="/examples/functionalcompo">Functional Component</Link></h3>
                </div>
            </div>

            {/* <h3>
                <Link to="othercompo">Extra</Link>
            </h3> */}

            <div className="row my-3">
                <div className="col-md-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Examples;