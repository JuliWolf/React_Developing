import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
            
            @media (min-width: 500px) {
                width: 450px
            }
        `

class Person extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Person.js] shouldComponentUpdate');
    //     return true;
    // }
    //
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Person.js] getSnapshotBeforeUpdate');
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('[Person.js] componentDidUpdate');
    // }
    render(){
        console.log('[Person.js] rendering...');
        return (
            // Component to wrap elements. It does not create wrapping element like div
            <Aux>
                <h2 key='i2'>Another Element</h2>
                <StyledDiv key='i1'>
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{ this.props.children }</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </StyledDiv>
            </Aux>
        )
    }
}



export default withClass(Person, 'Person');