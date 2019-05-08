import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

class Count extends Component {
    render () {
        // 接受从属性传递过来的变量count
        let {count} = this.props;
        return <div style={{textAlign: 'center'}}>
            <button><Link to='/'>home</Link></button>&nbsp;&nbsp;
            <button><Link to='/child1'>child1</Link></button>&nbsp;&nbsp;
            <button><Link to='/child2'>child2</Link></button>&nbsp;&nbsp;
            <button><Link to='/child3'>child3</Link></button>
            <h1>{count}</h1>
        </div>
    }
}

// mapStateToProps 提供一个从全局state映射Parent的props的方法
export default connect(function MapStateToProps (state) {
    // 表示 为Parent增加一个属性count  匹配state.count
    return {
        count: state.count
    }
}, function mapDispatchToProps() {return {}})(Count)
