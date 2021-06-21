import React, {useState} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import UserTable from "./components/UserTable";
import useUserRequest from "./hooks/useUsersRequest";
import Spinner from "./components/Spinner";
import Search from "./components/Search";
import AddNewUser from "./components/AddNewUser";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider'
import AppTopBar from "./components/AppTopBar";
import SideBar from "./components/SideBar";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        marginLeft: drawerWidth,
    },
    header: {
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/*ესეც*/}
                    <Paper>
                        <section className={classes.header}>
                            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                            <div>
                                <AddNewUser/>
                            </div>

                        </section>
                        <Divider />
                        <section className='users-table-wrapper'>
                            <UserTable users={filteredUsers}/>
                        </section>
                        {isFetching ? 'FETCHING USERS....' : ''}
                    </Paper>

                </main>
            </div>
        </div>
    );
}

export default App;
