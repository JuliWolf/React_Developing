import React from 'react';

import './Modal.css';
// import Transition from "react-transition-group/cjs/Transition";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {
    return (
        // <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
        //     {state => {
        //         const cssClasses = ['Modal',
        //                             state === 'entering'
        //                             ? 'ModalOpen'
        //                             : state === 'exiting' ? 'ModalClosed' : null]
        //         return (
        //             <div className={cssClasses.join(' ')}>
        //                 <h1>A Modal</h1>
        //                 <button className="Button" onClick={props.closed}>Dismiss</button>
        //             </div>
        //             )
        //
        //     }}
        // </Transition>

         // Определить свои классы
        <CSSTransition in={props.show}
                       timeout={animationTiming}
                       // classNames="fade-slide"
                       classNames={{
                           enter: '',
                           enterActive: 'ModalOpen',
                           exit: '',
                           exitActive: 'ModalClosed',
                           appear: '',
                           appearActive: ''
                       }}
                       mountOnEnter
                       unmountOnExit
                        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    )
}


export default modal;