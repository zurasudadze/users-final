import React, {useState} from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styled from "@material-ui/core/styles/styled";
import Box from "@material-ui/core/Box";


export default function UserTable({users}) {
    const [selectedUser, setSelectedUser] = useState(null)
    const [userToDelete, setUserToDelete] = useState(null)
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
                <StyledTable size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {user.firstName}
                                </TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <EditUser user={user}/>
                                <TableCell align='right'>
                                    <Box whiteSpace='nowrap'>
                                        <Button
                                            style={{'marginRight': '5px'}} variant="contained" color="secondary"
                                            onClick={() => handleDelete(user)}
                                            disabled={isFetching && userToDelete === user.id}
                                            size='small'
                                            margin='dense'
                                        >
                                            {isLoading && userToDelete === user.id ? <Spinner size={20} /> : <DeleteIcon />}
                                        </Button>
                                        <StyledEditButton variant="contained" color="secondary"
                                                          onClick={() => handleEdit(user)}><EditIcon/></StyledEditButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </>
    );
}

const StyledTable = styled(Table) ({
    minWidth: 650,
    tableLayout: 'fixed'
})

const StyledEditButton = styled(Button)({
    backgroundColor: '#8f8c8c',
    color: '#fff',
   "&:hover": {
        backgroundColor: '#353535'
    }
})
