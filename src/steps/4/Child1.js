import React, {Component} from 'react'

export default ({add1Action, store, updateState}) => <button onClick={() => {store.dispatch(add1Action); updateState();}}>child1--右边点击{store.getState().child2}次,总共{store.getState().count}</button> 