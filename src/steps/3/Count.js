import React, {Component} from 'react';
import {createStore} from 'redux'
// 初始state
const initCount = 0;
const ADD = 'ADD'
// action对象， 用于store.dispatch(action object)
const addAction = {
    type: ADD
}
// reducer  用来表示新不同action作用下， store的变化过程
const addReducer = function (state = initCount, action) {
    if(action.type === 'ADD') {
        return state + 1
    } else {
        return state
    }
}
// 初始化
const store = createStore(addReducer);


export default class Count extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: store.getState()
        }
    }

    handleAdd = () => {
        store.dispatch(addAction)
        this.setState({
            count: store.getState()
        })
    }

    handleAddAsync = () => {
        setTimeout(() => {
            store.dispatch(addAction)
            this.setState({
                count: store.getState()
            })
        }, 400)
    }

    render () {
        let {count} = this.state;
        return <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <button onClick={this.handleAdd} style={{marginRight: '12px'}}>add</button>
            <button onClick={this.handleAddAsync}>addAsync</button>
        </div>
    }
}
