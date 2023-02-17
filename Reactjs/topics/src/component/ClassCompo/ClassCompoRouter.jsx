import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import ClassCompoJSXExmaple from './02ClassCompoJSXExmaple.jsx';
import ClassCompoPropsExmaple from './03ClassCompoPropsExmaple.jsx';
import ClassCompoStateExmaple from './04ClassCompoStateExmaple.jsx';
import ClassLifeCycleExmaple from './05CompoLifeCycle';
import ConditionalRender from './06conditionalrender.jsx';
import ListKeys from './07ListKeysArraymap';
import ControlledComponent from './08ControlledCompoInClassCompo';
import UnControlledComponent from './09UnControlledCompoInClassCompo';
import SpreadVsRestCompo from './10SpreadVsRestCompo';
import CompositionVsInheritance from './11CompositionVsInheritance';
import StateLifting from './14stateLifting/Mainfile';
import HOC from './17HocClassCompo/HocClassCompo';

class ClassCompoRouter extends Component {
    render() {
        return (
            <>
            <Routes>
                <Route path="/" element={<ClassCompoMenu />} >
                    <Route path="classcompointro" element={<ClassCompoIntro />} />
                    <Route path="jsxexampleclass" element={<ClassCompoJSXExmaple />} />
                    <Route path="propsexample" element={<ClassCompoPropsExmaple />} />
                    <Route path="stateexample" element={<ClassCompoStateExmaple />} />
                    <Route path="compolifecycle" element={<ClassLifeCycleExmaple />} />
                    <Route path="conditionalrender" element={<ConditionalRender />} />
                    <Route path="listkeys" element={<ListKeys />} />
                    <Route path="controlledcomo" element={<ControlledComponent />} />
                    <Route path="uncontrolledcomo" element={<UnControlledComponent />} />
                    <Route path="spreadvsrest" element={<SpreadVsRestCompo />} />
                    <Route path="compositionvsinheritance" element={<CompositionVsInheritance />} />
                    <Route path="statelifting" element={<StateLifting />} />
                    <Route path="hoc" element={<HOC />} />
                </Route>
            </Routes>
            </>
        );
    }
}

export default ClassCompoRouter;