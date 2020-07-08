import   React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cokcpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                { id: 1, name: 'Alira', age: 30 },
                { id: 2, name: 'John', age: 23 },
                { id: 3, name: 'Tany', age: 12 }
            ],
            otherState: 'some other value',
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount...');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate...');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidMount...');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => p.id === id);
        const person =  {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.chngeCounter++
            }
        });
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

    loginHandler = () => {
        this.setState({authenticated: true});
    }

    render(){
        console.log('[App.js] render');
        let persons = null;

        if(this.state.showPersons){
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                        isAuthenticated={this.state.authenticated}
                    />
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: !this.state.showCockpit})
                }}
                > Remove Cockpit</button>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                    {this.state.showCockpit ?
                        <Cockpit
                            personsLength={this.state.persons.length}
                            showPersons={this.state.showPersons}
                            click={this.togglePersonsHandler}
                            login={this.loginHandler}
                        />
                     : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        )
    }
}



export default withClass(App, 'App');

