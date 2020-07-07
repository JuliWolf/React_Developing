import   React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cokcpit'

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
        const personIndex = this.state.persons.findIndex((p) => p.id === id);
        const person =  {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
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
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            )
        }

        return (
            <div className="App">
                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    click={this.togglePersonsHandler}
                />
                {persons}
            </div>
        )
    }
}



export default App;

