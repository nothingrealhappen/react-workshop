# basic jsx and react dom

```
render(<p>hello, my world</p>, document.querySelector('#app'));
```

# Component and props

## functional component

```
const Hello = props => <p>Hello, my world. {JSON.stringify(props)}</p>;
render(<Hello a="1" b={Date.now()} />, document.querySelector('#app'));
```

## class component

```
import React, { Component } from 'react';
import { render } from 'react-dom';

class Welcome extends Component {
    render() {
        return <p>Hello, welcome to my world. {JSON.stringify(this.props)}</p>;
    }
}

render(<Welcome a="1" b={Date.now()} />, document.querySelector('#app'));
```

## Composing Components

```
class Welcome extends Component {
    render() {
        return <p>Hello, welcome to my world. {JSON.stringify(this.props)}</p>;
    }
}

const WelcomeTheTeam = () => (
    <div>
        <Welcome name="zhangsan" />
        <Welcome name="lisi" />
        <Welcome name="wangmazi" />
    </div>
);

render(<WelcomeTheTeam />, document.querySelector('#app'));
```

# State and Lifecycle

## we want to update the timestamp
```
class Welcome extends Component {
    render() {
        return <p>Hello, welcome to my world. {Date.now()}</p>;
    }
}

render(<Welcome />, document.querySelector('#app'));
```

## use state and setState to update UI(by click the button)
```
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
```

## automachine: use setinterval and lifecycle to update state

# TODO Footer Features

```html
            <!-- This footer should hidden by default and shown when there are todos -->
            <footer class="footer">
                <!-- This should be `0 items left` by default -->
                <span class="todo-count"><strong>0</strong> item left</span>
                <!-- Remove this if you don't implement routing -->
                <ul class="filters">
                    <li>
                        <a class="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <!-- Hidden if no completed items are left ↓ -->
                <button class="clear-completed">Clear completed</button>
            </footer>
```
