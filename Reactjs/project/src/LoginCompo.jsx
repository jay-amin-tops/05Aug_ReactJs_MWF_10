import React from 'react';
import { Link } from 'react-router-dom';

const LoginCompo = () => {
    return (
        <>
          Login Compo  
          <Link className="nav-link" to="/register">Registration</Link>
        </>
    );
};

export default LoginCompo;
