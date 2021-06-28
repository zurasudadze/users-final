import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import styled from "@material-ui/core/styles/styled";

const AppTopBar = ({drawerWidth, isLoginForm, setIsLoginForm}) => (
    <StyledAppBar position="fixed" drawerwidth={drawerWidth}>
        <Toolbar>
           USERS
        </Toolbar>
    </StyledAppBar>
)

const StyledAppBar = styled(AppBar)(({theme, drawerwidth}) => ({
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: drawerwidth,
    backgroundColor: '#4B5358'
}))

export default AppTopBar
