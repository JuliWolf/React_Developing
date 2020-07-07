import React from 'react';
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

const cockpit = (props) => {
    let classes = [];

    if(props.persons.length <= 2){
        classes.push('red');
    }

    if(props.persons.length <=1 ){
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

export default cockpit;