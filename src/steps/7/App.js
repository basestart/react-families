import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Parent from './Parent'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

export default () => <BrowserRouter>
    <Route path='/' component={Parent}/>
    <Route path='/child1' component={Child1}/>
    <Route path='/child2' component={Child2}/>
    <Route path='/child3' component={Child3}/>
</BrowserRouter>