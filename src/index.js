import React, { Component } from 'react';
import { render } from 'react-dom';

class Welcome extends Component {
    state = {
        time: Date.now(),
    };

    componentDidMount() {
        setInterval(() => this.setState({ time: Date.now() }), 1000);
    }

    render() {
        return <p>
            Hello, welcome to my world. {this.state.time}
        </p>;
    }
}

render(<Welcome />, document.querySelector('#app'));
