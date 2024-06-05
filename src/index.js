import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import LoginClientPage from "./pages/user/loginclient";
import RegisterPage from "./pages/user/register";
import LoginLawyerPage from "./pages/user/loginlawyer";
import {Button} from "@mui/material";
import ClientPage from "./pages/user/client/client";
import ApplicationLawyerPage from "./pages/user/client/applicationLawyer";
import LawyerPage from "./pages/user/lawyer/lawyer";
import SeeApplicationsPage from "./pages/user/lawyer/seeApplications";
import ApplicationLegalCasePage from "./pages/user/client/applicationLegalCase";
import SeeLegalCases from "./pages/user/lawyer/seeLegalCases";
import CaseAssignments from "./pages/caseAssignments";


const router = createBrowserRouter([
    {
        path: "/",
        element: <CaseAssignments/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    },
    {
        path: "/login_client",
        element: <LoginClientPage/>,
    },
    {
        path: "/login_lawyer",
        element: <LoginLawyerPage/>,
    },
    {
        path: "/success",
        element: <div>ai facut ceva bine!</div>
    },
    {
        path: "/client/:id",
        element:<ClientPage/>
    },
    {
        path: "/lawyer/:id",
        element:<LawyerPage/>
    },
    {
        path: "/client_request/:id",
        element:<ApplicationLawyerPage/>
    },
    {
        path: "/lawyer_request/:id",
        element:<SeeApplicationsPage/>
    },
    {
        path: "/client_consult/:id",
        element:<ApplicationLegalCasePage/>
    },
    {
        path: "/lawyer_consult/:id",
        element:<SeeLegalCases/>
    },


]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
