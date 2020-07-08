import React, {useEffect} from 'react';
import styled from 'styled-components';
import './Cockpit.css';

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
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //Http request ...
        const timer = setTimeout(() => {
            alert('Save data to the cloud')
        }, 1000);
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
                isShown={props.showPersons}
                onClick={props.click}>
                Switch Name
            </StyledButton>
        </div>
    );
}

export default React.memo(Cockpit);