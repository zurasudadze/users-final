import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Formik, Form} from "formik";
import useUserAdd from "../hooks/useUserAdd";
import * as Yup from 'yup'
import {makeStyles} from '@material-ui/core/styles';
import useUserEdit from "../hooks/useUserEdit";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(1),
        },
    },
}));
const initialValues = {
    firstName: '',
    lastName: '',
    age: 1
}

const UserSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    age: Yup.number()
        .integer()
        .positive()
        .min(1)
        .max(80)
        .default(4)
})

export default function UserDialog({open, handleClose, user, isLoginForm}) {
    const classes = useStyles();
    const {mutate: addUser} = useUserAdd();
    const {mutate: editUser} = useUserEdit();
    const isEditMode = Boolean(user)

    const handleSubmit = (values) => {
        const config = {
            onSuccess: () => {
                handleClose()
            }
        }
        !isEditMode ? addUser(values, config) : editUser(values, config)
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{isEditMode ? 'Edit' : 'Add'} User</DialogTitle>
                <Formik
                    initialValues={
                        user ? {
                            ...initialValues,
                            ...user
                        } : initialValues
                    }
                    onSubmit={handleSubmit}
                    validationSchema={UserSchema}
                >
                    {({handleChange, handleBlur, values, errors, touched}) => (

                        <Form className={classes.root}>
                            <DialogContent>
                                <DialogContentText>
                                    PLEASE PROVIDE SOME USER INFORMATION
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    helperText={touched.firstName ? errors.firstName : ''}
                                    error={!!touched.firstName && !!errors.firstName}
                                />
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    helperText={touched.lastName ? errors.lastName : ''}
                                    error={!!touched.lastName && !!errors.lastName}
                                />
                                <TextField
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    variant="outlined"
                                    type="number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.age}
                                    helperText={touched.age ? errors.age : ''}
                                    error={!!touched.age && !!errors.age}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary"
                                        disabled={!!errors.firstName || !!errors.lastName || !!errors.age}>
                                    Save
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </div>
    );
}
