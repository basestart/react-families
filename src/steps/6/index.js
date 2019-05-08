import React from 'react'
import Parent from './Parent'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// Provider 提供一个向全局注入store的高阶组件
import {Provider} from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk));

export default () => <Provider store = {store}>
    <Parent/>
</Provider>
