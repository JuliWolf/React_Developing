import React, {Component} from "react";
import {connect} from 'react-redux'
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDraw from "../../components/Navigation/SideDraw/SideDraw";

class Layout  extends Component{
    state = {
        showSideDraw: true
    }

    sideDrawClosedHandler = () => {
        this.setState({showSideDraw: false});
    }

    sideDrawToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDraw: !prevState.showSideDraw}
        });
    }

    render(){
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawToggleClicked={this.sideDrawToggleHandler}/>
                <SideDraw
                    isAuth={this.props.isAuthenticated}
                    closed={this.sideDrawClosedHandler}
                    open={this.state.showSideDraw}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);