import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Person from "./Person/Person";

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red': 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
        color: black;
    }
`

class App extends Component {
    state  = {
        persons: [
            { id: 1, name: 'Alira', age: 30 },
            { id: 2, name: 'John', age: 23 },
            { id: 3, name: 'Tany', age: 12 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.find((p) => p.id === id);
        const person =  {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        //create copy
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = (event) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render(){

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    { this.state.persons.map( (person, index) => {
                        return (<Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />)
                    })
                    }
                </div>
            );
        }

        let classes = [];

        if(this.state.persons.length <= 2){
            classes.push('red');
        }

        if(this.state.persons.length <=1 ){
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton
                    alt={this.state.showPersons}
                    onClick={this.togglePersonsHandler}>
                    Switch Name
                </StyledButton>
                {persons}
            </div>
        )
    }
}



export default App;

