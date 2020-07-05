import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';

import Person from "./Person/Person";

/*----------  Default Component creation -----------------*/
//
// class App extends Component {
//     render(){
//         return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//     }
// }

/*----------  Functional Component creation -----------------*/
//
// function App() {
//   return (
//     <div className="App">
//         <h1>Hi, I'm React App</h1>
//     </div>
//   );
// }


/*----------  Component creation with Component -----------------*/
//
// class App extends Component {
//     // special property of any Class
//     state  = {
//         persons: [
//             { name: 'Alira', age: 30 },
//             { name: 'John', age: 23 },
//             { name: 'Tany', age: 12 }
//         ],
//         otherState: 'some other value'
//     }
//
//     switchNameHandler = (newName) => {
//         // console.log('Was clicked');
//
//         // NOTE: Don't do this
//         // this.state.persons[0].name = 'George';
//
//         this.setState({
//             persons: [
//                 { name: newName, age: 30 },
//                 { name: 'John', age: 23 },
//                 { name: 'Tany', age: 12 }
//             ],
//         })
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: 'Alira', age: 30 },
//                 { name: event.target.value, age: 23 },
//                 { name: 'Tany', age: 12 }
//             ],
//         })
//     }
//
//     render(){
//         const style = {
//             backroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid blue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//         return (
//             <div className="App">
//                 <h1>Hi, I'm React App</h1>
//                 <button
//                     style={style}
//                     onClick={(event) => this.switchNameHandler('Mike')}>
//                     Switch Name
//                 </button>
//                 <Person
//                     name={this.state.persons[0].name}
//                     age={this.state.persons[0].age}
//                     click={this.switchNameHandler.bind(this, 'George')}
//                 />
//                 <Person
//                     name={this.state.persons[1].name}
//                     age={this.state.persons[1].age}
//                     changed={this.nameChangedHandler}
//                 >
//                     My Hoddies: Racing
//                 </Person>
//                 <Person
//                     name={this.state.persons[2].name}
//                     age={this.state.persons[2].age}
//                 />
//             </div>
//         )
//     }
// }


/*--------------  Hooks -----------------*/
//
// const App = props => {
//     const [ personsState, setPersonsState ] = useState({
//         persons: [
//             { name: 'Alira', age: 30 },
//             { name: 'John', age: 23 },
//             { name: 'Tany', age: 12 }
//         ]
//     });
//
//     //NOTE: Better to set each state separately
//     const [otherState, setOtherState] = useState('some other value');
//
//     // NOTE: does not merge state, just replace
//     const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: 'George', age: 30 },
//                 { name: 'John', age: 23 },
//                 { name: 'Tany', age: 12 }
//             ],
//             //In order to same this props
//             // otherState: personsState.otherState
//         })
//     };
//
//     console.log(personsState)
//     console.log(otherState)
//
//     return (
//         <div className="App">
//             <h1>Hi, I'm React App</h1>
//             <button onClick={switchNameHandler}> Switch Name</button>
//             <Person
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}
//             />
//             <Person
//                 name={personsState.persons[1].name}
//                 age={personsState.persons[1].age}
//                 click={switchNameHandler}
//             >
//                 My Hoddies: Racing
//             </Person>
//             <Person
//                 name={personsState.persons[2].name}
//                 age={personsState.persons[2].age}
//             />
//         </div>
//     )
// }


/*--------------  Summarise  -----------------*/
//
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        userName: 'Mike'
    }

    userNameChangedHandler = (event) => {
        this.setState({userName: event.target.value})
    }
    render() {
        return (
            <div className='App'>
                <UserInput changed={this.userNameChangedHandler} currentName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/>
                <UserOutput userName="Max"/>
            </div>
        )
    }
}

export default App;



