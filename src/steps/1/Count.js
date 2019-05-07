import React, {Component} from 'react';

export default class Count extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleAddAsync = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 400)
    }

    render () {
        let {count} = this.state;
        return <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <button onClick={this.handleAdd} style={{marginRight: '12px'}}>add</button>
            <button onClick={this.handleAddAsync}>addAsync</button>
        </div>
    }
}
