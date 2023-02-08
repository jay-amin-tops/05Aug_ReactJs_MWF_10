import React, { Component } from 'react';
import { Link,Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro">Class Compo Intro</Link></li>
                    <li><Link to="jsxexampleclass">Class Compo JSX</Link></li>
                    <li><Link to="propsexample">Class Compo Props</Link></li>
                    <li><Link to="stateexample">Class Compo State</Link></li>
                    <li><Link to="compolifecycle">Class Compo Life Cycle</Link></li>
                    <li><Link to="conditionalrender">Class Conditional Render</Link></li>
                    <li><Link to="listkeys">Class List Keys</Link></li>
                    <li><Link to="controlledcomo">Class Controlled Compo</Link></li>
                    <li><Link to="uncontrolledcomo">Class UnControlled Compo</Link></li>
                    <li><Link to="spreadvsrest">Class Spread vs. Rest</Link></li>
                    <li><Link to="compositionvsinheritance">Class Composition vs inheritance</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;