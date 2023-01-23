import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderCom from "./commonCompo/header";
import Koibhi from "./01Component";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainRouter from "./router";



const root = ReactDOM.createRoot(document.getElementById('root'));
{/* <div>
<HeaderCom/>
<Koibhi/>
</div> */}
root.render(\

<RouterProvider router={MainRouter} />
);

