import React, {Component} from 'react';
import Child1 from './Child1'
import Child2 from './Child2'
import {createStore} from 'redux'

const initialState = {
    count: 0,
    child1: 0,
    child2: 0
}

const ADD1 = 'ADD1'
const ADD2 = 'ADD2'

const add1Action = {
    type: ADD1
}

const add2Action = {
    type: ADD2
}

const reducers = function (state = initialState, action) {
    if(action.type === ADD1) {
        return {
            ...state,
            count: state.count + 1,
            child1: state.child1 + 1
        }
    } else if(action.type === ADD2) {
        return {
            ...state,
            count: state.count + 1,
            child2: state.child2 + 1
        }
    } else {
        return state
    }
}

const store = createStore(reducers)



export default class Count extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
    }

    updateState = () => {
        this.setState({
            ...store.getState
        })
    }

    render () {
        const props = {add1Action, add2Action, store}
        
        return <div style={{textAlign: 'center'}}>
            <h1>{store.getState().count}</h1>
            <Child1 {...props} updateState={this.updateState}/>
            <Child2 {...props} updateState = {this.updateState}/>
        </div>
    }
}
