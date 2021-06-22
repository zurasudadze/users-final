import React, {useState} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import useUserRequest from "./hooks/useUsersRequest";
import Spinner from "./components/Spinner";
import AppTopBar from "./components/AppTopBar";
import SideBar from "./components/SideBar";
import MainContentArea from "./components/MainContentArea";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

function App() {
    const classes = useStyles();
    const {data: users, isLoading, isError, isFetching} = useUserRequest();
    const [searchTerm, setSearchTerm] = useState('')

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
        <div className={classes.root}>
            <CssBaseline/>
            <div>
                <AppTopBar drawerWidth={drawerWidth}/>
                <SideBar drawerWidth={drawerWidth}/>
                <MainContentArea
                    filteredUsers={filteredUsers}
                    isFetching={isFetching}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    drawerWidth={drawerWidth}/>
            </div>
        </div>
    );
}

export default App;
