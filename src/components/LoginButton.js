import Button from "@material-ui/core/Button";
import React from "react";
import useToggle from "../hooks/useToggle";
import UserDialog from "./UserDialog";


const LoginButton = ({setIsLoginForm, isLoginForm}) => {
    const {handleOpen, handleClose, open} = useToggle();

    const handleClick = () => {
        handleOpen();
        setIsLoginForm(true);
    }
    return (
        <>
            <Button variant="contained" style={{backgroundColor: '#68cf2c', color: '#fff'}}
                    onClick={handleClick}>
                LOGIN
            </Button>
            <UserDialog open={open} handleClose={handleClose} isLoginForm={isLoginForm}/>
        </>
    )

}
export default LoginButton
