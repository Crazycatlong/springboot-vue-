import React ,{ Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import test from './comment/test'


export default () => (

        <Switch>
            <Route path="/test" component={test}/>

        </Switch>

)
