import TableCell from "@material-ui/core/TableCell";
import React from "react";
import useUserEdit from "../hooks/useUserEdit";
import {OfflineBoltOutlined, CheckCircleOutlineOutlined ,HighlightOff} from '@material-ui/icons';
import Spinner from "./Spinner";
import IconButton from "@material-ui/core/IconButton";
import styled from "@material-ui/core/styles/styled";


const EditUser = ({user}) => {

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
        <TableCell>
            {user.activated ?
                <IconButton onClick={() => toggleStatus(user)}>
                    {isLoading ? <Spinner size={20}/> : <StyledActivatedIcon fontSize='large'/>}
                </IconButton> :
                <IconButton  onClick={() => toggleStatus(user)}>
                    {isLoading ? <Spinner size={20}/> : <StyledDeactivateIcon fontSize='large'/>}
                </IconButton>
            }
        </TableCell>
    )
}

const StyledActivatedIcon = styled(CheckCircleOutlineOutlined)({
    color: 'rgba(9,110,21,0.64)',
})

const StyledDeactivateIcon = styled(HighlightOff)({
    color: 'rgba(193,15,53,0.64)'
})
export default EditUser;
