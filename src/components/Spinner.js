import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

export default function Spinner(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress size={props.size}/>
        </div>
    );
}
