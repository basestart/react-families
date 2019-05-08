import React from 'react'
import Parent from './Parent'

import {createStore} from 'redux'
// Provider 提供一个向全局注入store的高阶组件
import {Provider} from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer);

export default () => <Provider store = {store}>
    <Parent/>
</Provider>
