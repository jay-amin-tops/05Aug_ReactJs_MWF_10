import React, { Component } from 'react';
import { Link,Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="offset-md-6">
                <ul>
                    <li><Link to="functionalcompointro">Functional Compo Intro</Link></li>
                    <li><Link to="functionalcompostate">Functional State</Link></li>
                    <li><Link to="functionalcompoprops">Functional Props</Link></li>
                </ul>
                </div>
            </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;