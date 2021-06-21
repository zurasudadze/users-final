import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PeopleIcon from "@material-ui/icons/People";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import styled from "@material-ui/core/styles/styled";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({theme, drawerWidth}) => ({
    drawerPaper: {
        width: drawerWidth
    }
}))

const SideBar = ({drawerWidth}) => {
    const classes = useStyles()
    return (
        <StyledDrawer
            drawerWidth={drawerWidth}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper
            }}
            anchor='left'>
            <List>
                <ListItem>
                    <ListItemIcon><PeopleIcon/></ListItemIcon>
                    <ListItemText>Users</ListItemText>
                </ListItem>
            </List>
        </StyledDrawer>
    )
}

const StyledDrawer = styled(Drawer)(({theme, drawerWidth}) => ({
    width: drawerWidth,
    flexShrink: 0
}))


export default SideBar;
