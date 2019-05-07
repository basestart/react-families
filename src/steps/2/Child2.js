import React from 'react'

export default ({child1, addChild2, count}) => <button onClick={addChild2}>child2--左边点击{child1}次, 总共{count}次</button> 