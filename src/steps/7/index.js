import React from 'react'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// Provider 提供一个向全局注入store的高阶组件
import {Provider} from 'react-redux'
import reducer from './reducer'
import App from './App'

const store = createStore(reducer, applyMiddleware(thunk));

export default () => <Provider store = {store}>
    <App/>
</Provider>