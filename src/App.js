import React from "react";
import './App.css';

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";


function App() {
    const isAuthenticated = false

    return (
        <>
            {isAuthenticated ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
        </>
    )
}


export default App;
