import React, {Component} from 'react'

export default ({child2, addChild1, count}) => <button onClick={addChild1}>child1--右边点击{child2}次,总共{count}</button> 