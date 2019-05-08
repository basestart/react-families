import React, {Component} from 'react';
import {connect} from 'react-redux'
import Child1 from './Child1'
import Child2 from './Child2'


class Count extends Component {
    render () {
        // 接受从属性传递过来的变量count
        let {count} = this.props;
        return <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <Child1/>
            <Child2/>
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
