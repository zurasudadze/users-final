import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "@material-ui/core/styles/styled";


export default function Spinner(props) {

    return (
        <StyledSpinnerContainer>
            <CircularProgress size={props.size}/>
        </StyledSpinnerContainer>
    );
}

const StyledSpinnerContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})
