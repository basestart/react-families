import React from 'react'
import {connect} from 'react-redux'
import {add2Action} from './action'

const Child2 = ({count, child1, add2}) => <button onClick={() => {add2()}}>child2--左边点击{child1}次, 总共{count}次</button> 

export default connect(function mapStateToProps(state) {
    return {
        ...state
    }
}, function mapDispatchToProps(dispatch) {
    return {
        add2: () => dispatch(add2Action)
    }
})(Child2)