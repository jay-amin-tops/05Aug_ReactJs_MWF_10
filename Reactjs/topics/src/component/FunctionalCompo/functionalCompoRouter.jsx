import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import FunctionalCompoIntro from './01FunctionalCompoIntro.jsx';
import FunctionalCompoProps from './02FunctionalCompoProps.jsx';
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx';
import FunctionalCompoUseLayoutEffect from './04FunctionalCompoUseLayoutEffect.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<FunctionalCompoMenu />} >
                    <Route path="functionalcompointro" element={<FunctionalCompoIntro />} />
                    <Route path="functionalcompoprops" element={<FunctionalCompoProps />} />
                    <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                    <Route path="functionalcompouselayouteffect" element={<FunctionalCompoUseLayoutEffect />} />
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;