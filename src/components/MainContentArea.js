import Paper from "@material-ui/core/Paper";
import Search from "./Search";
import AddNewUser from "./AddNewUser";
import Divider from "@material-ui/core/Divider";
import UserTable from "./UserTable";
import React from "react";
import styled from "@material-ui/core/styles/styled";


const MainContentArea = ({filteredUsers, isFetching, searchTerm, setSearchTerm, drawerWidth}) => (
    <StyledMain drawerwidth={drawerWidth}>
        <StyledToolbar/>
        <Paper>
            <StyledHeaderSection>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <div>
                    <AddNewUser/>
                </div>
            </StyledHeaderSection>
            <Divider/>
            <section className='users-table-wrapper'>
                <UserTable users={filteredUsers}/>
            </section>
            {isFetching ? 'FETCHING USERS....' : ''}
        </Paper>

    </StyledMain>
)

const StyledMain = styled('main')(({theme, drawerwidth}) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginLeft: drawerwidth,
}))

const StyledToolbar = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar
}))

const StyledHeaderSection = styled('section')(({theme}) => ({
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export default MainContentArea;
