import React, {useEffect, useRef, useContext} from 'react';
import styled from 'styled-components';
import './Cockpit.css';
import AuthContext from '../../context/auth-context'

const StyledButton = styled.button`
    background-color: ${props => props.isShown ? 'red': 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.isShown ? 'salmon': 'lightgreen'};
        color: black;
    }
`

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //Http request ...
        const timer = setTimeout(() => {
            console.log ('Save data to the cloud')
        }, 1000);

        toggleBtnRef.current.click();

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    });


    let classes = [];

    if(props.personsLength <= 2){
        classes.push('red');
    }

    if(props.personsLength <=1 ){
        classes.push('bold');
    }
    return (
        <div>
            <h1>Hi, I'm React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton
                ref={toggleBtnRef}
                isShown={props.showPersons}
                onClick={props.click}>
                Switch Name
            </StyledButton>
            {/*<AuthContext.Consumer>*/}
            {/*    {(context) =>*/}
            {/*        <StyledButton onClick={context.login}> Log in</StyledButton>*/}
            {/*    }*/}
            {/*</AuthContext.Consumer>*/}
            <StyledButton onClick={authContext.login}> Log in</StyledButton>

        </div>
    );
}

export default React.memo(Cockpit);