import React, { Component } from 'react';
import { Link,Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro">Class Compo Intro</Link></li>
                    <li><Link to="jsxexampleclass">Class Compo JSX</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;