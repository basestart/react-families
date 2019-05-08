import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add3Action} from './action'

const Child3 = ({add3}) => <button onClick={() => {add3()}}>异步+++</button>

export default connect(function mapStateToProps(state) {
    return {}
}, function mapDispatchToProps(dispatch) {
    return {
        add3: () => setTimeout(() => {dispatch(add3Action)}, 500)
    }
})(Child3)