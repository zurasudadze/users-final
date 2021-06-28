import React, {useState} from 'react';
import useUserRequest from "./hooks/useUsersRequest";
import Spinner from "./components/Spinner";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppTopBar from "./components/AppTopBar";
import SideBar from "./components/SideBar";
import MainContentArea from "./components/MainContentArea";
import styled from "@material-ui/core/styles/styled";

const drawerWidth = 240;

const AuthenticatedApp = () => {
    const {data: users, isLoading, isError, isFetching} = useUserRequest();
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoginForm, setIsLoginForm] = useState('false')

    if (isLoading) {
        return <Spinner/>
    }

    if (isError) {
        return <h1>Error Loading Data...</h1>
    }

    const filteredUsers = users.filter((user) => {
        const firstName = user.firstName.toLowerCase();
        const lastName = user.lastName.toLowerCase();
        const searchWord = searchTerm.toLowerCase();
        return firstName.includes(searchWord) || lastName.includes(searchWord)
    })

    return (
        <StyledRootDiv>
            <CssBaseline/>
            <div>
                <AppTopBar
                    drawerWidth={drawerWidth}
                    isLoginForm={isLoginForm}
                    setIsLoginForm={setIsLoginForm}
                />
                <SideBar drawerWidth={drawerWidth}/>
                <MainContentArea
                    filteredUsers={filteredUsers}
                    isFetching={isFetching}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    drawerWidth={drawerWidth}/>
            </div>
        </StyledRootDiv>
    );
};

const StyledRootDiv = styled('div')(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}))

export default AuthenticatedApp;
