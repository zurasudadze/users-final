import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditUser from "./EditUser";
import useUserDelete from "../hooks/useUserDelete";
import Button from '@material-ui/core/Button';
import Spinner from "./Spinner";
import useToggle from "../hooks/useToggle";
import UserDialog from "./UserDialog";
import useUserRequest from "../hooks/useUsersRequest";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function UserTable({users}) {
    const [selectedUser, setSelectedUser] = useState(null)
    const [userToDelete, setUserToDelete] = useState(null)
    const classes = useStyles();
    const {mutate: deleteUser, isLoading} = useUserDelete();
    const {isFetching} = useUserRequest()
    const {handleOpen, handleClose, open} = useToggle();

    const handleDelete = (user) => {
        deleteUser(user.id)
        setUserToDelete(user.id)
    }

    const handleEdit = (user) => {
        handleOpen();
        setSelectedUser(user);
    }


    return (
        <>
            <UserDialog open={open} handleClose={handleClose} user={selectedUser}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {user.firstName}
                                </TableCell>
                                <TableCell align="right">{user.lastName}</TableCell>
                                <TableCell align="right">{user.age}</TableCell>
                                <EditUser user={user}/>
                                <TableCell align="right">
                                    <Button style={{'marginRight': '5px'}} variant="contained" color="secondary"
                                            onClick={() => handleDelete(user)}
                                            disabled={isFetching && userToDelete === user.id}>
                                        {isLoading && userToDelete === user.id ? <Spinner size={20}/> : 'DELETE'}
                                    </Button>
                                    <Button variant="contained" color="secondary"
                                            onClick={() => handleEdit(user)}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
