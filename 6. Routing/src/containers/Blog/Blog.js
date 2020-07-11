import React, { Component } from 'react';
// import axios from '../../axios';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './Blog.css';

import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})


class Blog extends Component {
    state = {
        auth: true
    }

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
                                exact>Posts</NavLink></li>
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
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null }
                    <Route path="/posts" component={Posts}/>

                    {/* attr "from" in Redirect is allowed only in Switch*/}
                    <Redirect from="/" to="/posts"/>

                    {/*Default route for all unknown routes*/}
                    <Route render={() => <h1>Not found</h1>}/>

                    {/*<Route path="/" component={Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;