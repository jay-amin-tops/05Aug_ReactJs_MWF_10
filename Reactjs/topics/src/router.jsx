import { createBrowserRouter } from 'react-router-dom';
import HeaderCompo from "./commonCompo/header"
import HomeCompo from "./Home"
import About from "./About.jsx"
import Examples from "./Examples.jsx"
import Othercompo from "./Othercompo.jsx"
import React, { Suspense } from 'react';

// const ClassCompoRoute = React.lazy(()=>{ return import('./component/ClassCompo/ClassCompoRouter')});
const ClassCompoRoute = React.lazy(() => import('./component/ClassCompo/ClassCompoRouter'))
const FunctionalCompoRoute = React.lazy(() => import('./component/FunctionalCompo/functionalCompoRouter'))

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderCompo/><HomeCompo/></>,
    },
    {
        path: "/about",
        element: <><HeaderCompo/><About/></>,
    },
    {
        path: "/examples",
        element: <><HeaderCompo/><Examples/></>,
        children:[
            {
                path: "classcompo/*",
                element:<Suspense fallback={<h2>Loading...</h2>}> <ClassCompoRoute/></Suspense>,
            },{
                path:"functionalcompo/*",
                element : <Suspense fallback={<h2>Loading...</h2>}><FunctionalCompoRoute/></Suspense>
            },{
                path: "othercompo",
                element:<Othercompo/>,
            }
        ]
    },
]);
export default MainRouter; 