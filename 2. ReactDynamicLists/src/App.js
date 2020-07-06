import React, {Component} from 'react';
import './App.css';

import Person from "./Person/Person";

class App extends Component {
    state  = {
        persons: [
            { name: 'Alira', age: 30 },
            { name: 'John', age: 23 },
            { name: 'Tany', age: 12 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 30 },
                { name: 'John', age: 23 },
                { name: 'Tany', age: 12 }
            ],
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Alira', age: 30 },
                { name: event.target.value, age: 23 },
                { name: 'Tany', age: 12 }
            ],
        })
    }

    togglePersonsHandler = (event) => {

    }

    render(){
        const style = {
            backroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Switch Name
                </button>
                {this.state.showPersons ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                            click={this.switchNameHandler.bind(this, 'George')}
                        />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            changed={this.nameChangedHandler}
                        >
                            My Hoddies: Racing
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </div>
                    : ''
                }

            </div>
        )
    }
}



export default App;



