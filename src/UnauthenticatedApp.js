import React from 'react';
import LoginForm from "./components/LoginForm";

const UnauthenticatedApp = ({setIsAuthenticated}) => {
    return (
        <div>
            <LoginForm setIsAuthenticated={setIsAuthenticated}/>
        </div>
    );
};

export default UnauthenticatedApp;
