import React, {Component} from 'react';
import Child1 from './Child1'
import Child2 from './Child2'

export default class Count extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0,
            child1: 0,
            child2: 0
        }
    }
    
    addChild1 = () => {
        this.setState({
            count: this.state.count + 1,
            child1: this.state.child1 + 1
        })
    }

    addChild2 = () => {
        this.setState({
            count: this.state.count + 1,
            child2: this.state.child2 + 1
        })
    }

    render () {
        let {count, child1, child2} = this.state;
        return <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <Child1 child2={child2} count = {count} addChild1 = {this.addChild1}/>
            <Child2 child1={child1} count = {count} addChild2 = {this.addChild2}/>
        </div>
    }
}
