import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import styled from "@material-ui/core/styles/styled";

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
});

const LoginForm = ({setIsAuthenticated}) => {
    const handleSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            setIsAuthenticated(true)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };


    return (
        <StyledRootItem container>
            <CssBaseline/>
            <StyledImage item xs={false} sm={4} md={7}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <StyledPaper>
                    <StyledAvatar>
                        <LockOutlinedIcon/>
                    </StyledAvatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Formik
                        initialValues={{email: "", password: ""}}
                        validationSchema={loginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({isSubmitting, handleSubmit, handleBlur, errors, values, touched, handleChange}) => {
                            return (
                                <Form>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        autoComplete='username'
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        type="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        helperText={touched.email ? errors.email : ''}
                                        error={!!touched.email && !!errors.email}
                                    />
                                    <TextField
                                        fullWidth
                                        id="password"
                                        autoComplete='current-password'
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        style={{marginTop: '10px'}}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        helperText={touched.password ? errors.password : ''}
                                        error={!!touched.password && !!errors.password}
                                    />
                                    <Button type="submit" disabled={isSubmitting}>
                                        Login
                                    </Button>
                                </Form>
                            )
                        }}
                    </Formik>
                </StyledPaper>
            </Grid>
        </StyledRootItem>
    )
}

const StyledRootItem = styled(Grid)({
    height: '100vh'
})

const StyledImage = styled(Grid)(({theme}) => ({
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
}))

const StyledPaper = styled('div')(({theme}) => ({
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

const StyledAvatar = styled(Avatar)(({theme}) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
}))
export default LoginForm
