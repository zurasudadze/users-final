import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import styled from "@material-ui/core/styles/styled";

const AppTopBar = ({drawerWidth}) => (
    <StyledAppBar position="fixed" drawerWidth={drawerWidth}>
        <Toolbar>
            USERS
        </Toolbar>
    </StyledAppBar>
)

const StyledAppBar = styled(AppBar)(({theme, drawerWidth}) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#4B5358'
}))

export default AppTopBar
