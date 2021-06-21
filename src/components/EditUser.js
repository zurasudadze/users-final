import TableCell from "@material-ui/core/TableCell";
import React from "react";
import useUserEdit from "../hooks/useUserEdit";
import Button from '@material-ui/core/Button';
import {OfflineBoltOutlined, CheckCircleOutlineOutlined} from '@material-ui/icons';
import Spinner from "./Spinner";


const EditUser = ({
                user
                  }) => {

    const {mutate: editUser, isLoading, isError} = useUserEdit();


    const toggleStatus = (user) => {
        user.activated = !user.activated;
        editUser(user)
        if (isError) {
            return (
                <div>ERROR... Try Again Later...</div>
            )
        }

    }

    return (
        <TableCell align="right">
            {user.activated ?
                <Button style={{'background': 'green'}} variant="contained" color="primary"
                        onClick={() => toggleStatus(user)}>
                    {isLoading ? <Spinner size={20}/> : <CheckCircleOutlineOutlined/>}
                </Button> :
                <Button variant="contained" style={{'background': 'red', 'color': '#fff'}}
                        onClick={() => toggleStatus(user)}>
                    {isLoading ? <Spinner size={20}/> : <OfflineBoltOutlined/>}
                </Button>
            }
        </TableCell>
    )
}

export default EditUser;
