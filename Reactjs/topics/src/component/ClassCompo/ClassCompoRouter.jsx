import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import ClassCompoJSXExmaple from './02ClassCompoJSXExmaple.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <>
            <Routes>
                <Route path="/" element={<ClassCompoMenu />} >
                    <Route path="classcompointro" element={<ClassCompoIntro />} />
                    <Route path="jsxexampleclass" element={<ClassCompoJSXExmaple />} />
                </Route>
            </Routes>
            </>
        );
    }
}

export default ClassCompoRouter;