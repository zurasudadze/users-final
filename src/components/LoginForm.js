import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
});

const LoginForm = ({setIsAuthenticated}) => {
    const classes = useStyles();
    const handleSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            setIsAuthenticated(true)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
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
                                <Form className={classes.root}>
                                    <TextField
                                        autoFocus
                                        fullWidth
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
                </div>
            </Grid>
        </Grid>
    )
}
export default LoginForm
