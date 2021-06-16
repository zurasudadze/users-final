import React, {useState} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import UserTable from "./components/UserTable";
import useUserRequest from "./hooks/useUsersRequest";
import Spinner from "./components/Spinner";
import Search from "./components/Search";
import AddNewUser from "./components/AddNewUser";


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
        return (
            <Spinner/>
        )
    }

    if (isError) {
        return (
            <h1>Error Loading Data...</h1>
        )
    }
    const filteredUsers = users.filter((user) => {
        const firstName = user.firstName.toLowerCase();
        const lastName = user.lastName.toLowerCase();
        const searchWord = searchTerm.toLowerCase();
        return (
            firstName.includes(searchWord) || lastName.includes(searchWord)
        )
    })
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container maxWidth="lg">
                    <div className='header'>
                        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        <div>
                            <AddNewUser/>
                        </div>
                    </div>
                    <section className='table-section'>
                        <UserTable users={filteredUsers}/>
                        {isFetching ? 'FETCHING USERS....' : ''}
                    </section>

            </Container>
        </div>
    );
}

export default App;
