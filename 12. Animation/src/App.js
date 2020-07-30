import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
    state = {
        modelIsOpen: false
    }

    showModal = () => {
        this.setState({modelIsOpen: true})
    }

    closeModal = () => {
        this.setState({modelIsOpen: false})
    }
    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                {this.state.modelIsOpen ? <Modal closed={this.closeModal}/> : null}
                {this.state.modelIsOpen ?  <Backdrop show={this.state.modelIsOpen}/> : null}
                <button className="Button" onClick={this.showModal}>Open Modal</button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
