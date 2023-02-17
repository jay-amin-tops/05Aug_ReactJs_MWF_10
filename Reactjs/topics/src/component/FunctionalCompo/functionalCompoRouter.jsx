import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import FunctionalCompoIntro from './01FunctionalCompoIntro.jsx';
import FunctionalCompoProps from './02FunctionalCompoProps.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <>
            <Routes>
                <Route path="/" element={<FunctionalCompoMenu />} >
                    <Route path="functionalcompointro" element={<FunctionalCompoIntro />} />
                    <Route path="functionalcompoprops" element={<FunctionalCompoProps />} />
                </Route>
            </Routes>
            </>
        );
    }
}

export default ClassCompoRouter;