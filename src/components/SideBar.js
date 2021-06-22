import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PeopleIcon from "@material-ui/icons/People";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import styled from "@material-ui/core/styles/styled";

const SideBar = ({drawerWidth}) => {
    return (
        <StyledDrawer
            drawerwidth={drawerWidth}
            variant='permanent'
            anchor='left'>
            <List>
                <ListItem>
                    <ListItemIcon><PeopleIcon/></ListItemIcon>
                    <ListItemText>Users</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><PeopleIcon/></ListItemIcon>
                    <ListItemText>Users</ListItemText>
                </ListItem>
            </List>
        </StyledDrawer>
    )
}

const StyledDrawer = styled(Drawer)(({theme, drawerwidth}) => ({
        width: drawerwidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerwidth,
        }
}));


export default SideBar;
