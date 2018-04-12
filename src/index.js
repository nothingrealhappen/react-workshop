import React, { Component } from 'react';
import { render } from 'react-dom';

const LoggedIn = ({ name, onClick }) => (
    <p>
        Hi, {name}. you already logged in. want{' '}
        <button onClick={onClick}>Logout</button>
        ?
    </p>
);

const LoggedOut = ({ onClick }) => (
    <p>
        Hi, come on <button onClick={onClick}>Login</button>
    </p>
);

class Welcome extends Component {
    state = {
        isLoggedIn: false,
    };

    login = () => {
        this.setState({ isLoggedIn: true });
    };

    logout = () => {
        this.setState({ isLoggedIn: false });
    };

    render() {
        return (
            <span>
                {this.state.isLoggedIn ? (
                    <LoggedIn onClick={this.logout} />
                ) : (
                    <LoggedOut onClick={this.login} />
                )}
            </span>
        );
    }
}

render(<Welcome />, document.querySelector('#app'));
