import React, { Component } from 'react';
import { render } from 'react-dom';

class TodoMvc extends Component {
    state = {
        todos: [],
        newItem: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        alert(this.state.newItem);
    };

    handleChange = e => this.setState({ newItem: e.target.value });

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autofocus
                        onChange={this.handleChange}
                        value={this.state.newItem}
                    />
                </header>
            </form>
        );
    }
}

render(<TodoMvc />, document.querySelector('#app'));
