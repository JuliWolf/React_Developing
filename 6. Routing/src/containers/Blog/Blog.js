import React, { Component } from 'react';
// import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import {Route, NavLink, Switch} from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Block">
                    <nav>
                        <ul>
                            <li><NavLink
                                /*Use custom className */
                                /*activeClassName="my-active"*/
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                to="/posts"
                                exact>Home</NavLink></li>
                            <li><NavLink to={{
                                // relative path
                                // pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* Use Exact to ensure that path should be exactly as in the path attr*/}
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                {/*<Route path="/new-post" exact render={() => <h1>Home 2</h1>}/>*/}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;