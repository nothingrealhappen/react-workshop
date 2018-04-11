import React, { Component } from 'react';
import { render } from 'react-dom';

class Welcome extends Component {
    state = {
        time: Date.now(),
    };

    render() {
        return <p>
            Hello, welcome to my world. {this.state.time}
            <br/>
            <button onClick={() => this.setState({ time: Date.now() })}>update</button>
        </p>;
    }
}

render(<Welcome />, document.querySelector('#app'));
