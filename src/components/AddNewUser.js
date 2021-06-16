import Button from '@material-ui/core/Button';
import React from 'react'
import useToggle from "../hooks/useToggle";
import UserDialog from "./UserDialog";

const AddNewUser = () => {
    const {handleOpen, handleClose, open} = useToggle();

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                ADD
            </Button>
            <UserDialog open={open} handleClose={handleClose}/>
        </>
    )
}
export default AddNewUser;
