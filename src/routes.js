import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'
import React from 'react'

export default(
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path='/Post/postid' component={Post}/>
        <Route path='/new' component={Form}/>
    </Switch>
)