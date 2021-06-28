import React, {useState} from "react";
import './App.css';

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <>
            {isAuthenticated ? <AuthenticatedApp/> : <UnauthenticatedApp setIsAuthenticated={setIsAuthenticated}/>}
        </>
    )
}


export default App;
