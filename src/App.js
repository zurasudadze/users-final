import React, {useState} from "react";

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    return (
        <>
            {isAuthenticated ?
                <AuthenticatedApp/> :
                <UnauthenticatedApp setIsAuthenticated={setIsAuthenticated}/>}
        </>
    )
}

export default App;
