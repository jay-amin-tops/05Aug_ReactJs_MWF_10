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
                    <li><Link to="functionalcompouseeffect">Functional useEffect</Link></li>
                    <li><Link to="functionalcompouselayouteffect">Functional useLayoutEffect</Link></li>
                    <li><Link to="functionalcompousecontext">Functional useContext</Link></li>
                    <li><Link to="functionalcompousereducer">Functional useReducer</Link></li>
                    <li><Link to="functionalcompousecallback">Functional useCallback</Link></li>
                    <li><Link to="functionalcompousememo">Functional useMemo</Link></li>
                    <li><Link to="functionalcompouseimperativehandle">Functional useImperativeHandle</Link></li>
                    <li><Link to="functionalcompouseref">Functional useRef</Link></li>
                </ul>
                </div>
            </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;