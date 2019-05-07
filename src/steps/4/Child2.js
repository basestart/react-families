import React from 'react'

export default ({add2Action, store, updateState}) => <button onClick={() => {store.dispatch(add2Action); updateState()}}>child2--左边点击{store.getState().child1}次, 总共{store.getState().count}次</button> 