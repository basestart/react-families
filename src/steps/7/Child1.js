import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add1Action} from './action'

const Child1 = ({count, child2, add1}) => <button onClick={() => {add1()}}>child1--右边点击{child2}次,总共{count}</button>

export default connect(function mapStateToProps(state) {
    return {
        ...state
    }
}, function mapDispatchToProps(dispatch) {
    return {
        add1: () => dispatch(add1Action)
    }
})(Child1)