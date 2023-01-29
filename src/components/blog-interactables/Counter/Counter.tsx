import React from 'react';
import { CounterButton } from './CounterButton';

interface CounterState {
    count: number
}

class Counter extends React.Component {

    state: CounterState;

    constructor(props: {}) {
        super(props);
        this.state = {
            count: 1
        }
    }

    handleCount(value: number) {
        this.setState((prevState: CounterState) => ({ count: prevState.count + value }));
    }

    render() {
        return (
        <div>
            Current count: {this.state.count}
            <hr />
            <CounterButton sign="+" updateCount={this.handleCount.bind(this)} />
            <CounterButton sign="-" updateCount={this.handleCount.bind(this)} />
        </div>
        );
    }
    }

export default Counter;