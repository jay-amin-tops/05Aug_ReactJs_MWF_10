import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import FunctionalCompoIntro from './01FunctionalCompoIntro.jsx';
import FunctionalCompoProps from './02FunctionalCompoProps.jsx';
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx';
import FunctionalCompoUseLayoutEffect from './04FunctionalCompoUseLayoutEffect.jsx';
import FunctionalCompoUseContext from './05UseContext';
import FunctionalCompoUseReducer from './06FunctionalCompoUseReducer.jsx';
import FunctionalCompoUseCallback from './07FunctionalCompoUseCallback.jsx';
import FunctionalCompoUseMemo from './08FunctionalCompoUseMemo.jsx';
import FunctionalUseImperativeHandle from './09useImperativeHandle';
import FunctionalUseRef from './11useRef.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<FunctionalCompoMenu />} >
                    <Route path="functionalcompointro" element={<FunctionalCompoIntro />} />
                    <Route path="functionalcompoprops" element={<FunctionalCompoProps />} />
                    <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                    <Route path="functionalcompouselayouteffect" element={<FunctionalCompoUseLayoutEffect />} />
                    <Route path="functionalcompousecontext" element={<FunctionalCompoUseContext />} />
                    <Route path="functionalcompousereducer" element={<FunctionalCompoUseReducer />} />
                    <Route path="functionalcompousecallback" element={<FunctionalCompoUseCallback />} />
                    <Route path="functionalcompousememo" element={<FunctionalCompoUseMemo />} />
                    <Route path="functionalcompouseimperativehandle" element={<FunctionalUseImperativeHandle />} />
                    <Route path="functionalcompouseref" element={<FunctionalUseRef />} />
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;